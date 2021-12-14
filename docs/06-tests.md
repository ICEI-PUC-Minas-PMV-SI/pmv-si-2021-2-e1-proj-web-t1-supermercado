# Plano de Testes de Software
<span style="color:red">Pré-requisitos: <a href="02-especification.md"> Especificação do Projeto</a></span>, <a href="04-interface.md"> Projeto de Interface</a>

## Cenários de Teste

Pré-requisitos:
Computador com acesso a internet;
Navegador com versão compatível com tecnologia html5

CT.01 - Acesso às páginas "Home" e "Sobre Nós"

Procedimentos:
1. Acessar o site através do link;
2. Clicar na página Sobre Nós na parte inferior da página.

Resultados esperados:
1. Ao acessar o link do site a página home deve ser aberta, a página deve apresentar as principais promoções da semana;
2. Ao clicar no botão Sobre Nós, a tela deve carregar os dados sobre os objetivos do site Compare Preços.

CT.02 - Acesso à página de Login

Procedimentos:
1. Acessar o site através do link;
2. Clicar no botão Entrar no canto direito superior;


Resultados esperados:
1. Ao clicar no botão Entrar, a página de Login deve ser carregada. A página contém os campos email e senha, além de a caixa de "Lembre-me" (para manter usuário logado), botões Acessar (para acesso à página do usuário), Aqui (para recuperar senha) e Cadastre-se (para novo usuário cadastrar-se).



CT.03 - Logando como usuário

Procedimentos:
1. Acessar o site através do link;
2. Clicar na no botão Entrar;
3. Sem ter os campos Email e Senha preenchidos, clicar em Acessar;
4. Com os campos email e senha preenchidos, clicar em Acessar.
 

Resultados esperados:
1. Ao clicar em Acessar, se nada for digitado, a página pedirá para preencher os campos email e senha.
2. Ao acessar a página de login, o usuário (cadastrado) de inserir dados nos campos Email e Senha e, ao clicar em Acessar, irá para Home; porém, no lugar de "Olá Visitante!", aparecerá nome do usuário e ele poderá acessar sua Lista de Desejos e o botão Sair, para deslogar.



CT.04 - Recuperando a Senha e Cadastrando-se

Procedimentos:
1. Acessar a página de Login através do site;
2. Clicar em Aqui (para recuperar senha);
3. Clicar em Cadastre-se

Resultados esperados:
1. Ao clicar em Aqui, o site abrirá uma pequena janela para que o email do usuário seja inserido, para receber a senha.
2. Ao clicar em Cadastre-se, o site abrirá uma pequena janela com os campos a serem preenchidos: Nome, Sobrenome, E-mail, Senha, Confirmação de Senha. A janela também conterá os botões de Salvar e Cancelar a operação de cadastro.

CT.05 - Lista de desejos

Procedimentos:
1. Logado, o usuário deverá clicar em Lista de desejos.

Resultados esperados:
1. Uma nova página deve ser aberta, na qual o usuário poderá adicionar ou retirar itens da lista de desejos.

CT.06 - Categorias

Procedimentos:
1. Nas páginas (exceto Login, Sobre nós e Lista de desejos) há sempre um menu horizontal com as principais categorias. Deve-se clicar em cada uma delas.

Resultados esperados:
1. Ao clicar em uma categoria específica, o site deverá abrir uma página que terá apenas produtos com aquela categoria.

CT.07 - Pesquisando

Procedimentos:
1. Na parte superior, há um campo de pesquisa e um botão com ícone de Lupa para realizar a ação de busca. Devemos digitar um termo e apertar tal botão.

Resultados esperados:
1. Ao clicar no botão Lupa com campos de pesquisa preenchido, o site deve retornar uma lista de resultados utilizando API do Google.
