# Documentação do Código HTML

Este documento fornece uma visão geral do código HTML fornecido e suas funcionalidades.

## Estrutura do Arquivo HTML

- `index.html`: O arquivo principal contém a estrutura básica de uma página web.

## Arquivos Externos

- `style.css`: Este arquivo contém estilos CSS para a página web.
- `script.js`: Este arquivo contém scripts JavaScript para interatividade na página.

## Bibliotecas Externas

- **Font Awesome**: Utilizada para ícones na página web.
- **Google Fonts (Lato)**: Utilizada para estilização de fontes na página web.
- **Axios**: Utilizada para fazer requisições HTTP.

## Elementos HTML Principais

1. **Meta Tags**: Definem configurações importantes da página, como charset e viewport.
2. **Título**: Define o título da página exibido na aba do navegador.
3. **Links Externos**: Importam os arquivos de estilo CSS e fontes externas.
4. **Script Externo**: Importa o script JavaScript externo (Axios).
5. **Barra de Navegação**: Componente responsável pela navegação entre diferentes seções da página.
6. **Conteúdo Dinâmico**: Áreas que exibem conteúdo dinâmico da página, alteradas por interações do usuário.
7. **Formulários**: Incluem campos para entrada de dados e botões para envio de informações.
8. **Tabelas**: Utilizadas para exibir dados tabulares, como uma lista de produtos.

## Funcionalidades JavaScript

1. **Navegação entre Páginas**: JavaScript é utilizado para alternar entre diferentes seções da página.
2. **Envio de Requisições HTTP**: O Axios é usado para fazer requisições HTTP para buscar ou enviar dados para o servidor.

## Funções Principais

### `showHome()`

- Exibe o conteúdo da página inicial e atualiza a barra lateral.

### `showListOfWines()`

- Exibe a lista de vinhos cadastrados e atualiza a barra lateral.

### `showCadOfWines()`

- Exibe o formulário para cadastro de novos vinhos e atualiza a barra lateral.

### `submitRegisterWine()`

- Envia uma solicitação para cadastrar um novo vinho no servidor backend.

### `fetchWines()`

- Envia uma solicitação para recuperar a lista de vinhos cadastrados e atualiza a tabela na interface do usuário.

## Integração com o Backend

O código utiliza a biblioteca Axios para enviar solicitações HTTP para endpoints no servidor backend, lidando com operações de cadastro e listagem de dados.

## Armazenamento Local

O armazenamento local (localStorage) do navegador é utilizado para armazenar o token de autenticação e outras informações do usuário, permitindo a persistência da sessão entre as solicitações.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em um navegador web compatível.
