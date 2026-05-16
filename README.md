# Lab Pós Mobile

Projetos, estudos e aprendizados construídos pelos alunos da pós.

O Lab Pós Mobile é o espaço público da pós-graduação para registrar a evolução técnica dos
alunos: projetos, artigos, resumos, experimentos, contribuições e participação na comunidade.

## Como contribuir

Você deve contribuir apenas com o seu projeto, artigo, resumo ou experimento. Evite alterar
configurações, dependências, estilos globais ou páginas que não sejam suas.

### 1. Faça um fork

1. Abra o repositório no GitHub.
2. Clique em **Fork**.
3. Crie o fork na sua conta.
4. Clone o seu fork:

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
cd NOME-DO-REPO
```

### 2. Crie uma branch

Use uma branch com o seu nome e o projeto:

```bash
git checkout -b projeto/joao-silva-app-financeiro
```

### 3. Adicione seu post

Crie um arquivo `.mdx` dentro de:

```text
src/content/docs/projects/2026/
```

Use um nome simples, em minúsculas, sem espaços:

```text
src/content/docs/projects/2026/joao-silva-app-financeiro.mdx
```

Modelo mínimo:

```mdx
---
title: App Financeiro Pessoal
description: Aplicativo mobile para registrar gastos e acompanhar metas mensais.
autor: João Silva
autorUrl: https://github.com/seu-usuario
turma: Pós Mobile 2026
data: 2026-05-16
canonicalUrl: https://seu-blog.com/app-financeiro-pessoal
---

## Resumo

Explique em 3 a 5 linhas o que foi construído, qual problema o projeto resolve e qual foi o
principal aprendizado técnico.

## Screenshots

![Tela inicial](../../../../assets/projects/joao-silva-app-financeiro/screenshot-1.png)

## Links

- GitHub: https://github.com/seu-usuario/seu-projeto
- Demo: https://link-da-demo.com
```

Campos de crédito:

- `autor`: seu nome completo.
- `autorUrl`: link opcional para seu GitHub, LinkedIn ou site.
- `turma`: identificação da turma.
- `data`: data de publicação no formato `AAAA-MM-DD`.
- `canonicalUrl`: link opcional para o post original, caso você esteja trazendo um conteúdo que já
  publicou em outro lugar.

Use `canonicalUrl` quando o conteúdo já existe no seu blog, Medium, Dev.to, LinkedIn ou outro site.
Isso informa aos buscadores qual é a versão original do texto e evita que o Lab concorra com o seu
próprio post.

### 4. Adicione suas imagens

Coloque as imagens do seu projeto dentro de:

```text
src/assets/projects/
```

Crie uma pasta com o mesmo nome base do post:

```text
src/assets/projects/joao-silva-app-financeiro/
  cover.png
  screenshot-1.png
  screenshot-2.png
```

Inclua pelo menos 1 screenshot. Prefira imagens leves, em `.png`, `.jpg` ou `.webp`.

### 5. Rode o projeto localmente

Todos os comandos devem ser executados na raiz do projeto:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `pnpm install`        | Instala as dependências                          |
| `pnpm dev`            | Inicia o site local em `localhost:4321`          |
| `pnpm build`          | Valida o build de produção                       |

Antes de abrir o PR, rode:

```bash
pnpm build
```

### 6. Envie suas mudanças

```bash
git status
git add src/content/docs/projects/2026/seu-arquivo.mdx src/assets/projects/sua-pasta/
git commit -m "Add projeto de Nome Sobrenome"
git push origin projeto/joao-silva-app-financeiro
```

### 7. Abra um Pull Request

1. Abra seu fork no GitHub.
2. Clique em **Compare & pull request**.
3. Preencha o checklist do template.
4. Explique em 3 a 5 linhas o que foi construído.
5. Envie o PR.

## Checklist antes do PR

- [ ] Meu post está em `src/content/docs/projects/`
- [ ] Minhas imagens estão em `src/assets/projects/`
- [ ] O post tem título, descrição, autor, turma e data
- [ ] Incluí `canonicalUrl` se o conteúdo já foi publicado em outro lugar
- [ ] Incluí pelo menos 1 screenshot
- [ ] Incluí link do GitHub ou demo, se houver
- [ ] Rodei `pnpm build`
- [ ] Não alterei arquivos de configuração do projeto

## O que não alterar

Não altere estes arquivos sem orientação da disciplina:

- `astro.config.mjs`
- `package.json`
- `pnpm-lock.yaml`
- `wrangler.jsonc`
- arquivos em `src/styles/`
- arquivos de outros alunos

Se você precisar mudar algo fora da sua página e da sua pasta de imagens, explique o motivo no PR.
