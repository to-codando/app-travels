# O Projeto

Esse projeto consiste em uma aplicação responsiva, com o que há de mais moderno em termos de tecnologia.

Esse projeto é baseado no padrão de renderização (SSR) que facilita a aplicação de SEO ao entregar ao browser apenas html simples. No entanto, ao carregar a página, o navegador ativa os recursos javascript que tornam a aplicação reativa favorecendo a melhor UX.


## Tecnologias utilizadas

- Linguagens:
Typescript
HTML
CSS

- Bibliotecas:
IARES
Fam-code-ui
Chai
Mocha
Biome

- Padrões e práticas:
KISS
YAGNI
Components

- Run time, compiladores e servidores:
Esbuild
Bun
Elysia


## Aspecto geral do projeto

Abaixo você encontra informações sobre a estrutura do projeto, sua estrutura de pastas e arquiteturas adotadas.

### 2CA - Arquitetura para Organizar Componentes

A 2CA é a arquitetura adotada para definir e combinar componentes. Esta arquitetura de UI promove modularidade, reutilização, escalabilidade e fácil manutenção.

### 2CA - Seus Benefícios

A 2CA utiliza-se principalmente dos princípios da Clean Component Architecture e Comprehensible Component Architecture para criar componentes completos, simples, fáceis de entender, escalar e manter. Apesar dos nomes emblemáticos, a 2CA é fácil de aplicar e compreender.

### 2CA - Estrutura de Pastas

Abaixo, a estrutura de pastas e arquivos que regem os componentes dentro da arquitetura 2CA:

- **elements**: Componentes autocontidos que não dependem de outros componentes.
- **blocks**: Componentes formados pela combinação de outros componentes.
- **layouts**: Componentes que estruturam um padrão de interface e que podem ser compostos por elements e blocks.
- **views**: Componentes que estruturam parte da interface do usuário usando um ou mais layouts.
- **pages**: Componentes que agrupam uma ou mais views para formar a interface completa do usuário.

> A estrutura de pastas está definida no diretório `src/component/ui`.


## Clonando o projeto

```
npx degit to-codando/iares-template-ssr new-app
```

## Executando projeto

Instale o bun para executar o projeto posteriormente.

```
curl -fsSL https://bun.sh/install | bash
```

Instale as dependencias do projeto com comando abaixo:

```
bun -i
```

Execução em modo de desenvolvimento:
```
 bun dev
```

Execução em modo de produção:
```
 bun start
```

## Acessando a aplicação no browser
Antes de acessar a aplicação através do browser, você precisa definir as variáveis de ambiente que definem através de qual protocolo, IP e porta a aplicação será servida no navegador.

As variáveis de ambiente padrão, estão definidas no arquivo .env na raíz do projeto e você deve ajustar seus valores conforme suas necessidades.

```
PROTOCOL=http
HOST=127.0.0.1
PORT=3000
ENVIRONMENT=development
```
## Certificado SSL/TLS

Você pode utilizar o certificado padrão presente no diretório SSH do projeto para servir a aplicação usando HTTPS em modo de desenvolvimento. No entanto, não se esqueça dos cuidados necessários com a segurança quando versionando a aplicação com git e ao fazer deploy.

Recomendo fortemente que para fins de segurança remova o diretório SSH e o arquivo .ENV do histórico de versionamento do git.



