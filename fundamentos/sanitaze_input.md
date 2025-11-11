# Sanitização de Input

## Validação x Sanitazação

> A **validação** verifica se a entrada corresponde ao esperado. <br> A **sanitização** limpa a entrada para torná-la segura para processamento ou armazenamento

 Muitos desenvolvedores validam a entrada de dados e presumem que ela seja segura. No entanto, invasores ainda podem inserir código malicioso por meio de entradas aparentemente válidas. Validar sem sanitizar os dados é como trancar a porta da frente, mas deixar a janela aberta.

 <br>

 **O processo mais indicado para o desenvolvimento adequado deve ser** : 
 1. Validar o tipo e a estrutura da entrada
 2. Higienizar a entrada para remover caracteres indesejados, código ou vetores de injeção

## Uso de biblioteca para Sanitização 

O Node.js possui algumas bibliotecas excelentes mantidas por pessoas preocupadas com a segurança. Aqui estão duas delas: 
- `validator.js` <br> Ótimo para validar e higienizar strings — como e-mails, URLs, entradas alfanuméricas e muito mais.

```powershell
    npm install validator
```

```javascript
    const validator = require ( ' validator' ) ; 

    const email = '<script>evil()</script>user@example.com' ; 
    if (validator.isEmail ( email)) { 
    const safeEmail = validator.normalizeEmail ( email); 
    console.log (safeEmail); // 'user@example.com' 
    } 
```

- ``DOMPurify` <br> Utilizado principalmente para higienizar entradas HTML (por exemplo, comentários, conteúdo WYSIWYG)


```powershell
    npm install dompurify jsdom
```

```javascript
    const { JSDOM } = require ( 'jsdom' ); 
    const createDOMPurify = require ( 'dompurify' ); 

    const  window = new  JSDOM ( '' ). window ; 
    const  DOMPurify = createDOMPurify ( window ); 

    const dirtyHTML = ' < img src=x onerror=alert(1)>' ; 
    const cleanHTML = DOMPurify.sanitize ( dirtyHTML ) ; 

    console.log (cleanHTML); // <img src="x" >
```

**Por que isso é importante** : É impossível detectar manualmente todas as vulnerabilidades XSS ou vetores de injeção. Use bibliotecas que evoluem com novas ameaças.

##  Proteção contra ataques de injeção (SQL, NoSQL, injeção de comandos)

**Injeção NoSQL (MongoDB)**

```mongodb
    User.find({username: red.body.username});
```

<br>

**Se alguém enviar**:

```
    {"username": { "$gt": ""}}
```

Eles poderiam contornar completamente a lógica de login.


## Higienizar todos os pontos de entrada 

Aqui estão alguns vetores de ataque comuns :

- Cadeias de consulta de URL :/search?term=<script>
- Cabeçalhos HTTP : User-Agent,Referer
- Cookies : Especialmente aqueles usados ​​para autenticação ou rastreamento.
- Webhooks : Dados recebidos de serviços de terceiros
- Sockets/WebRTC : Comunicação em tempo real com clientes

**Consertar**:
Normalizar e higienizar os dados antes de utilizá-los em:
- Caminhos de arquivo
- Consultas
- Modelos
- Cargas úteis JSON
- Registros

## Limitar o comprimento e o tipo de entrada

Imagine receber uma bioentrada e alguém enviar uma string de 10 MB . Ou usernameum objeto. Agora seu aplicativo trava, seu banco de dados entra em colapso e os atacantes sorriem.

**Conserto**:
Utilize limites em todos os lugares — no middleware, nos esquemas e nos formulários de front-end.


## Automatizar a higienização de entrada com middleware

Higienizar manualmente cada campo de entrada em cada rota? Isso é pedir para ter bugs. Em vez disso, crie um middleware que intercepte e limpe a entrada de forma centralizada.

```javascript
const sanitize = require ( 'sanitize-html' ); 

function  sanitizeBody ( req, res, next ) { 
  function  deepSanitize ( obj ) { 
    for ( let key in obj) { 
      if ( typeof obj[key] === 'string' ) { 
        obj[key] = sanitize (obj[key]); 
      } else  if ( typeof obj[key] === 'object' ) { 
        deepSanitize (obj[key]); 
      } 
    } 
  } 

  if (req.body ) deepSanitize ( req.body ) ; 
  if (req.query ) deepSanitize (req.query ) ; next (); } app.use ( sanitizeBody ) ;
```

**Você pode conectar bibliotecas como xss-filters, validator, ou sanitize-htmldependendo das suas necessidades.**

## Dicas extras: casos extremos do mundo real aos quais você deve estar atento.

- Ataques de espaço em branco : caracteres ocultos, como \u200B(espaço de largura zero), podem passar despercebidos por expressões regulares.
- Explorações do Unicode : Domínios Punycode e emoji podem enganar os usuários ( xn--ataques).
- JSON aninhado : Os atacantes podem ocultar payloads em até 10 níveis de profundidade. Sempre normalize a profundidade.
- Ataque de negação de serviço por expressão regular (ReDoS) : Padrões excessivamente complexos podem causar falhas no seu aplicativo. Teste suas expressões regulares.
- Envio de arquivos : Sempre higienize os nomes dos arquivos e use bibliotecas como [nome da biblioteca] multerpara limitar o tamanho e os tipos MIME.


## Guia Rápido 

Aqui está um guia rápido para o tratamento seguro de entradas em Node.js:

→ Validar tipos e formatos
→ Higienizar usando bibliotecas confiáveis
​​→ Escapar a saída em modelos
→ Limitar comprimentos e profundidades
→ Prevenir injeções
→ Centralizar a limpeza de entrada
→ Testar casos extremos