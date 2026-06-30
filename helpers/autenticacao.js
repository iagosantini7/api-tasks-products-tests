import request from 'supertest';
import postLogin from '../fixtures/postLogin.json' with { type: 'json' };

export const obterToken  = async (email, password) => {
    const bodyLogin = {...postLogin.valida}
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin)

    return respostaLogin.body.token;
}