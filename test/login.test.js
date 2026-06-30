import request from 'supertest'
import { expect } from 'chai';
import 'dotenv/config';
import postLogin from '../fixtures/postLogin.json' with { type: 'json' };

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve realizar login e retornar status 200 com credenciais válidas', async () => {
            
            const resposta = await request(process.env.BASE_URL)
                .post('/auth/login')
                .set('Content-Type', 'application/json')
                .send(postLogin.valida)

            expect(resposta.status).to.equal(200) 
            expect(resposta.body.success).to.equal(true)
            expect(resposta.body.token).to.be.a('string')

        })

        it('Deve retornar status 400 ao informar credenciais inválidas', async () => {
            const resposta = await request(process.env.BASE_URL)
                .post('/auth/login')
                .set('Content-Type', 'application/json')
                .send(postLogin.invalida)

            expect(resposta.status).to.equal(401)
            expect(resposta.body.success).to.equal(false)
        })
    })
})