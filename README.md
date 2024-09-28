# Upload S3 NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


## Descrição

**Upload S3 NestJS** é uma aplicação backend desenvolvida com [NestJS](https://nestjs.com/) que permite o upload de arquivos públicos para o [Amazon S3](https://aws.amazon.com/s3/). Este projeto serve como um guia prático para integrar o Amazon S3 em uma aplicação NestJS, facilitando o armazenamento e a gestão de arquivos estáticos de maneira eficiente e escalável.

## Funcionalidades

- **Upload de Arquivos:** Permite o upload de arquivos através de endpoints RESTful.
- **Integração com Amazon S3:** Armazena os arquivos no Amazon S3, garantindo alta disponibilidade e escalabilidade.
- **Configuração de Variáveis de Ambiente:** Utiliza o módulo `@nestjs/config` para gerenciar configurações sensíveis.
- **Validação e Segurança:** Implementa melhores práticas de segurança ao interagir com o Amazon S3.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construção de aplicações server-side.
- [Amazon S3](https://aws.amazon.com/s3/) - Serviço de armazenamento de objetos da AWS.
- [AWS SDK](https://aws.amazon.com/sdk-for-node-js/) - Biblioteca oficial da AWS para interagir com os serviços da AWS.
- [Multer](https://github.com/expressjs/multer) - Middleware para manipulação de `multipart/form-data`.
- [Multer S3](https://github.com/badunk/multer-s3) - Integração do Multer com o Amazon S3.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática.

## 🚀 Começando

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- Conta na [AWS](https://aws.amazon.com/) com acesso ao Amazon S3

### Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/diogofelizardo/upload-s3-nestjs.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd upload-s3-nestjs
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   ```

### Configuração

1. **Configurar Variáveis de Ambiente**

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   AWS_ACCESS_KEY_ID=seu_access_key_id
   AWS_SECRET_ACCESS_KEY=seu_secret_access_key
   AWS_S3_BUCKET_NAME=nome_do_seu_bucket
   AWS_S3_REGION=sua-região
   ```

   **Nota:** Certifique-se de adicionar o arquivo `.env` ao seu `.gitignore` para manter as credenciais seguras.

2. **Configurar o Bucket no Amazon S3**

   - **Criar um Bucket:**
     - Acesse o console do [Amazon S3](https://s3.console.aws.amazon.com/s3/).
     - Clique em "Create bucket".
     - Defina um nome único para o bucket e selecione a região desejada.
     - Configure as permissões conforme necessário (para arquivos públicos, ajuste as configurações de acordo).

   - **Configurar Políticas de Bucket:**
     - Acesse a aba **"Permissions"** do seu bucket.
     - Adicione a seguinte política de bucket substituindo `YOUR_BUCKET_NAME` pelo nome do seu bucket:

       ```json
       {
         "Version": "2012-10-17",
         "Statement": [
           {
             "Sid": "PublicReadGetObject",
             "Effect": "Allow",
             "Principal": "*",
             "Action": "s3:GetObject",
             "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
           }
         ]
       }
       ```

     - Salve a política e verifique as configurações de bloqueio de acesso público para garantir que a política esteja sendo aplicada corretamente.

### Executando a Aplicação

1. **Inicie a Aplicação**

   ```bash
   npm run start
   ```

2. **Acesse o Endpoint de Upload**

   Utilize ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar o upload de arquivos.

   - **Método:** `POST`
   - **URL:** `http://localhost:3000/upload`
   - **Body:** Selecione `form-data`, adicione um campo `file` do tipo `File` e selecione o arquivo que deseja fazer upload.

   **Exemplo de Resposta:**

   ```json
   {
     "url": "https://nome_do_seu_bucket.s3.sua-região.amazonaws.com/1234567890-seuarquivo.ext"
   }
   ```

## 📁 Estrutura do Projeto

```
upload-s3-nestjs/
├── src/
│   ├── upload/
│   │   ├── upload.controller.ts
│   │   ├── upload.module.ts
│   │   └── upload.service.ts
│   ├── app.module.ts
│   └── main.ts
├── .env
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## 🛠️ Tecnologias e Ferramentas

- **[NestJS](https://nestjs.com/):** Framework progressivo para construir aplicações Node.js eficientes e escaláveis.
- **[Amazon S3](https://aws.amazon.com/s3/):** Serviço de armazenamento de objetos escalável e de alta disponibilidade da AWS.
- **[AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-node-js/):** Biblioteca oficial da AWS para interagir com os serviços da AWS.
- **[Multer](https://github.com/expressjs/multer):** Middleware para manipulação de `multipart/form-data`, utilizado para uploads de arquivos.
- **[Multer S3](https://github.com/badunk/multer-s3):** Integração do Multer com o Amazon S3.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/diogofelizardo/upload-s3-nestjs/issues) ou enviar um [pull request](https://github.com/diogofelizardo/upload-s3-nestjs/pulls) com melhorias, correções de bugs ou novas funcionalidades.

### Passos para Contribuir

1. **Fork este repositório**
2. **Crie uma Branch para sua Feature ou Bugfix**

   ```bash
   git checkout -b feature/nova-feature
   ```

3. **Commit suas alterações**

   ```bash
   git commit -m 'Adiciona nova feature'
   ```

4. **Push para a Branch**

   ```bash
   git push origin feature/nova-feature
   ```

5. **Abra um Pull Request**

## 📜 Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).

## 📧 Contato

Diogo Felizardo - [@felizardo.dev](https://instagram.com/felizardo.dev) - developerfelizardo@gmail.com

Projeto Link: [https://github.com/diogofelizardo/upload-s3-nestjs](https://github.com/diogofelizardo/upload-s3-nestjs)

---