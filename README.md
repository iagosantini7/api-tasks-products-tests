# 🧪 API Tasks Products Tests

Projeto de automação de testes para a API REST **API Tasks Products**, desenvolvido em JavaScript utilizando **Mocha**, **Supertest** e **Chai**.

## 🎯 Objetivo

Validar os principais endpoints da API por meio de testes automatizados, garantindo o correto funcionamento das funcionalidades e servindo como base para estudos em automação de testes de API.

**API testada:**  
https://github.com/iagosantini7/api-tasks-products

---

## 🛠️ Stack utilizada

- JavaScript (Node.js)
- Mocha
- Chai
- Supertest
- Dotenv
- Mochawesome

---

## 📁 Estrutura do projeto

```text
├── fixtures/              # Massa de dados utilizada nos testes
├── helpers/               # Funções auxiliares
├── test/
│   ├── login.test.js
│   ├── tasks.test.js
│   └── ...
├── mochawesome-report/    # Relatório HTML (gerado automaticamente)
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Instalação

```bash
git clone https://github.com/iagosantini7/api-tasks-products-tests.git
cd api-tasks-products-tests
npm install
```

---

## 🔐 Configuração do ambiente

O projeto utiliza um arquivo `.env` para armazenar informações de configuração, como a URL da API e as credenciais utilizadas durante a execução dos testes.

1. Faça uma cópia do arquivo `.env.example`.
2. Renomeie a cópia para `.env`.
3. Preencha as variáveis com os valores do seu ambiente.

Exemplo:

```env
BASE_URL=http://localhost:3000

EMAIL=seu_email@teste.com
PASSWORD=sua_senha
```

> O arquivo `.env` não é versionado no Git. Apenas o `.env.example` é disponibilizado como modelo de configuração.

---

## 🚀 Executando os testes

```bash
npm test
```

Gerando relatório HTML:

```bash
npm run test-mochawesome
```

---

## 📊 Relatórios

O comando `npm run test-mochawesome` gera automaticamente um relatório HTML no diretório `mochawesome-report/`.

Abra o arquivo `mochawesome.html` em qualquer navegador para visualizar os resultados da execução.

---

## 📚 Documentação

- Node.js — https://nodejs.org/
- Mocha — https://mochajs.org/
- Chai — https://www.chaijs.com/
- Supertest — https://github.com/ladjs/supertest
- Dotenv — https://github.com/motdotla/dotenv
- Mochawesome — https://github.com/adamgruber/mochawesome

---

## 👨‍💻 Autor

**Iago Santini**
