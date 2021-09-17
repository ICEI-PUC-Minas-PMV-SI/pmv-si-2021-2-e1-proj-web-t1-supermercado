# Especificações do Projeto

Como já foi observado, a necessidade de buscar preços melhores dos produtos essenciais está cada vez mais comum. Com isso, optou-se por desenvolver uma ferramenta que compare os preços dos principais produtos, que compõem a cesta básica, dos supermercados localizados em Belo Horizonte. 

Essa ferramenta será um site responsivo, de interface intuitiva, leve, de fácil acesso para qualquer tipo de usuário. 



## Personas

- Laura tem 25 anos, classe média e recentemente precisou se mudar da casa dos seus pais para cursar a graduação em administração em outra cidade. Ela gosta de adquirir novas experiências e ler livros. Agora, sozinha, ganhando a ajuda de um salário mínimo e mais a economia que juntou durante alguns anos assumirá diversas responsabilidades. Devido ao seu novo estilo de vida, ela decidiu parar de "comer fora" com frequência, pois precisará controlar melhor os seus gastos. E para o seu primeiro passo, decidiu pesquisar o preço dos alimentos do seu cotidiano como: arroz, feijão, banana, entre outros. Normalmente, Laura procurava por sites de loja da sua cidade para ver se havia ou não o produto que ela queria para não dar "viagem perdida".


## Histórias de Usuários

- Como usuário, gostaria de identificar o local com endereço completo e os preços mais baratos de produtos alimentícios de forma online para economizar tempo.

- Como um "bom comprador", preciso cadastrar uma "lista de desejos" (Wish List) para receber notificações de produtos que entraram em promoção.

-  Como administrador preciso manter atualizados a relação e os preços dos produtos; endereço dos supermercados; integração entre formulários HTML, Banco de dados, API e Linguagem de programação; enviar promoções para os usuários cadastrados e permitir que o usuário exclua sua conta. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

- Usuário

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|Cadastro de usuário  | MÉDIA|
|RF-002|Envio de promoção por e-mail  | MÉDIA|
|RF-003|Remoção do cadastro do usuário  | MÉDIA|
|RF-004|Buscador de produtos  |ALTA|
|RF-005|Cadastro de lista de produtos favoritos   | MÉDIA|
|RF-006|Exibir na tela os resultados da busca com base no produto selecionado |ALTA|

- Administrador da página

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-007|Cadastro de produtos  | ALTA |
|RF-008|Cadastro de supermercados | ALTA|
|RF-009|Atualização de produtos, preços e endereços  | MÉDIA|
|RF-010|Exclusão de produtos   | MÉDIA|
|RF-011|Exclusão do cadastro dos usuários| MÉDIA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Responsivo para dispositivos móveis  | ALTA|
|RNF-002| Suporte a dispositivos iOS e Android  | MÉDIA|
|RNF-003| Disponível em conexões de baixa velocidade |MÉDIA|
|RNF-004| Respeitar o tempo máximo de 15 segundos nas requisições | MÉDIA|
|RNF-005| Buscar preços de produtos em sites de supermercados via api  |ALTA|
|RNF-006| Buscar preços de produtos em banco de dados |ALTA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de back-end        |
|03| Limitar a equipe de desenvolvimento a apenas os membros do projeto|
|04| Restrições tecnológicas|
|05| Ausência de investimento financeiro|
|06| Incompatibilidade com frameworks front-end|



Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
