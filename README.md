# CI/CD Practice - Node.js
Este repositório foi criado como parte de um exercício prático para configurar um pipeline básico de **Integração Contínua (CI)** utilizando **GitHub Actions**. O objetivo é realizar testes automatizados em um projeto simples de **Node.js**.

## Descrição
O projeto contém uma função simples chamada `soma` e um conjunto de testes automatizados criados com o framework **Jest**. Além disso, a configuração de **GitHub Actions** foi realizada para garantir que os testes sejam executados automaticamente sempre que houver mudanças no código (push ou pull request).

![Status do Projeto](https://img.shields.io/badge/Status%20do%20Projeto-Concluído-brightgreen)

[![Kéure Passos Soares](https://img.shields.io/badge/GitHub-Black?style=flat-square&logo=github&logoColor=white)](https://github.com/keurepassos)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/keurepassos)

## Estrutura do Repositório
O repositório contém os seguintes arquivos:
- **`app.js`**: Contém a função `soma`, que recebe dois números como parâmetros e retorna a soma deles.
- **`test/app.test.js`**: Contém os testes automatizados para a função `soma` utilizando o Jest.
- **`.github/workflows/ci.yml`**: Configuração do pipeline de CI no GitHub Actions para rodar testes a cada push ou pull request.
- **`package.json`**: Arquivo de configuração do npm com a dependência do Jest e o script de teste configurado.

## Funcionalidade

### Função `soma`
A função `soma` é definida no arquivo `app.js` e realiza a soma de dois números:
```javascript
    function soma(a, b) {
      return a + b;
    }
    module.exports = soma;
