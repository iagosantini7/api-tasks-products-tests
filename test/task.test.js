import request from 'supertest';
import { expect } from 'chai';
import 'dotenv/config';
import postLogin from '../fixtures/postLogin.json' with { type: 'json' };
import postTasks from '../fixtures/postTasks.json' with { type: 'json' };
import { beforeEach } from 'mocha';
import { obterToken } from '../helpers/autenticacao.js'

describe('Task', () => {

    let token;
    beforeEach(async () => {
        token = await obterToken(process.env.USER_EMAIL_ADM,
            process.env.USER_SENHA_ADM
        )
    })

    describe('POST /tasks', () => {
        it('Deve criar uma nova task e retornar status 201', async () => {
            const resposta = await request(process.env.BASE_URL)
                .post('/tasks')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(postTasks)

            expect(resposta.status).to.equal(201)
            expect(resposta.body.message).to.equal('Tarefa criada com sucesso')
        })

        it('Deve retornar status 400 ao deixar o titulo vazio', async () => {
            const bodyTasks = { ...postTasks }
            bodyTasks.title = ""

            const resposta = await request(process.env.BASE_URL)
                .post('/tasks')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTasks)

            expect(resposta.status).to.equal(400)
            expect(resposta.body.error).to.equal('O título da tarefa é obrigatório')

        })

        it('Deve retorna status 401 ao não passar o token na requisição', async () => {
            const resposta = await request(process.env.BASE_URL)
                .post('/tasks')
                .set('Content-Type', 'application/json')
                .send(postTasks)

            expect(resposta.status).to.equal(401)
            expect(resposta.body.error).to.equal('Token de autenticação não fornecido')
        })
    })

    describe('GET /tasks', () => {
        it('Deve retornar status 200 e lista de tasks', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/tasks')
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.pagination.limit).to.equal(10)

        })
    })

    describe('GET /tasks/{id}', () => { //

        it('Deve retornar status 200 e dados iguais ao registro tasks contido no banco de dados', async () => {
            const taskCriada = await request(process.env.BASE_URL)
                .post('/tasks')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(postTasks);

            const tasksId = taskCriada.body.data.id;

            const resposta = await request(process.env.BASE_URL)
                .get(`/tasks/${tasksId}`)
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.data.title).to.equal(postTasks.title)
            expect(resposta.body.data.description).to.equal(postTasks.description)
            expect(resposta.body.data.status).to.equal('todo')
            expect(resposta.body.data.priority).to.equal(postTasks.priority)

        })
    })
})