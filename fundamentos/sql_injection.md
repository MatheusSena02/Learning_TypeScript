# SQL Injection

## Conceito 

Um ataque de injeção de SQL consiste na inserção ou "injeção" de uma consulta SQL através dos dados de entrada do cliente para a aplicação. Uma exploração bem-sucedida de injeção de SQL pode ler dados sensíveis do banco de dados, modificar dados do banco de dados (inserir/atualizar/excluir), executar operações administrativas no banco de dados (como desligar o SGBD), recuperar o conteúdo de um determinado arquivo presente no sistema de arquivos do SGBD e, em alguns casos, emitir comandos para o sistema operacional. Ataques de injeção de SQL são um tipo de ataque de injeção, no qual comandos SQL são injetados na entrada do plano de dados para afetar a execução de comandos SQL predefinidos.

## Modelagem de Ameaças

- Os ataques de injeção de SQL permitem que os invasores falsifiquem identidades, manipulem dados existentes, causem problemas de repúdio, como anular transações ou alterar saldos, permitam a divulgação completa de todos os dados do sistema, destruam os dados ou os tornem indisponíveis de alguma outra forma, ou se tornem administradores do servidor de banco de dados;
- A injeção de SQL é muito comum em aplicações PHP e ASP devido à prevalência de interfaces funcionais mais antigas. Devido à natureza das interfaces programáticas disponíveis, aplicações J2EE e ASP.NET são menos propensas a serem facilmente exploradas por meio de injeções de SQL;
- A gravidade dos ataques de injeção de SQL é limitada pela habilidade e imaginação do atacante e, em menor grau, por contramedidas de defesa em profundidade, como conexões com privilégios reduzidos ao servidor de banco de dados, entre outras. Em geral, considera-se que a injeção de SQL é um ataque de alto impacto;

## Exemplos

O código C# a seguir constrói e executa dinamicamente uma consulta SQL que busca itens que correspondam a um nome especificado. A consulta restringe os itens exibidos àqueles em que o proprietário corresponde ao nome de usuário do usuário autenticado no momento.

<br>

```c#
string userName = ctx.getAuthenticatedUserName();
string query = "SELECT * FROM items WHERE owner = '"
                + userName + "' AND itemname = '"
                + ItemName.Text + "'";
sda = new SqlDataAdapter(query, conn);
DataTable dt = new DataTable();
sda.Fill(dt);
```

<br>

**A consulta que este código pretende executar é a seguinte** :

```sql
SELECT * FROM items
WHERE owner =
AND itemname = ;
```

<br>

No entanto, como a consulta é construída dinamicamente concatenando uma string de consulta base constante e uma string de entrada do usuário, ela só se comporta corretamente se itemNamenão contiver um caractere de aspas simples. Se um atacante com o nome de usuário wiley inserir a string "name' OR
'a'='a"para itemName, a consulta se tornará a seguinte: 

```sql
SELECT * FROM items
WHERE owner = 'wiley'
AND itemname = 'name' OR 'a'='a';
```

<br>

A adição da `OR 'a'='a'` condição faz com que a cláusula WHERE seja sempre avaliada como verdadeira, tornando a consulta logicamente equivalente à consulta muito mais simples: <br>

`SELECT * FROM items;` <br>

Essa simplificação da consulta permite que o atacante ignore a exigência de que a consulta retorne apenas itens pertencentes ao usuário autenticado; a consulta agora retorna todas as entradas armazenadas na tabela de itens, independentemente do proprietário especificado.