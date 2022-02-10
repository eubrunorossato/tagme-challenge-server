# Server

1. Baixe o projeto e certifique-se que está na branch main.
2. Você precisará do docker instalado na sua CLI. Caso não tenha, instale e siga as demais instruções. https://docs.docker.com/get-docker/
3. Rode em seu terminal o seguinte comando. **docker-compose up --build**. Esse comando vai subir uma instancia do redis.
4. Agora rode **npm i** e dps **npm run dev**
5. O .env do projeto está no git somente por facilidade! Estou ciente que não é uma boa pratica!

# Testes automatizados.

1. Rode npm i (caso ainda não tenha rodado).
2. npm run jest. Todas as linhas do controller de recipe estão testadas.
