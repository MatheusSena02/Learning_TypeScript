# Fundamentos para TypeScript

## Tipage Dinâmica e Tipagem Estática 

### Tipagem Dinâmica

Em linguagens com tipagem dinâmica : 
- O tipo da variável é associado ao seu valor e não é explicitamente declarado, ou seja, quem define o tipo da variável é o valor associado a ela;
- O tipo de uma variável pode ser alterado livremente durante a execução do código

```javascript
let age;

age = 21;
typeof age; // number

age = '21';
typeof age // string
```


### Tipagem Estática

Em linguagens com tipagem estática : 
- O tipo da variável é explicitamente declarado, ou seja, fortemente tipado com segurança de tipo;
- O tipo da variável **não** pode ser alterado no decorrer do código;
- Os valores associados à variável precisam respeitar seu tipo previamente definido;

```typescript
let age : number;

age = 21;
typeof age; // number

age = '21'; //Error : age must be of type number 
```

## Linguagens Estáticas

Linguagens estáticas utilizam compiladores, que são ferramentas responsáveis por verificar as variáveis presentes no código, seus tipos e seus valores, apontando eventuais erros, caso ocorra. <br>
Basicamente, vai ser uma ferramenta para verificar a conformidade do código, então se, por exemplo, for associada em uma variável de `string` um valor do tipo `number`, o compilador informará o erro na tipagem. <br>

*No nosso caso, o `TypeScript` utiliza o `TypeScript Compiler`* 

## O que é o TypeScript ? 

É uma linguagem desenvolvida com base no `JavaScript`, adicionando novas funcionalidades e a configuração de tipagem estática ao `JavaScript`.  <br>

> *Todo código TypeScript é convertido para seu equivalente JS pelo TypeScript Compiler. Pois navegadores não entedem TypeScript*

O `TypeScript` se torna muito útil por garantir algumas seguranças, como :
- Segurança na tipagem dos dados, inibindo erro por operações entre dados inconsistentes;
- Possibilita a compatibilidade entre o `JavaScript`moderno com sistemas legados, com o compilador compilando códigos com funcionalidades modernas (*import/export*) em código que funcione em navegadores mais antigos;

## Vantagens e Desvantagens do TypeScript

### Vantagens
- Possibilidade do uso de recursos avançados do `JavaScript`;
- Prevenção de erros de tipagem;
- Facilitação para identificar bugs;
- Possibilidade de compreensão melhor do código, tornando-o mais legível;

### Desvantagens
- Maior produção de código escrito;
- Necessita de uma curva de aprendizado;
- Requer compilação para `JavaScript`, o que adiciona um nível de complexidade para seu uso;

## Passo a Passo para começar a codar em TypeScript

1. Instale o *Node.JS* na sua máquina. Caso já esteja instalado, basta seguir para o próximo passo.
2. No seu terminal, execute o comando `npm install -g typescript`. Esse comando instala o pacote TypeScript globalmente no seu computador.