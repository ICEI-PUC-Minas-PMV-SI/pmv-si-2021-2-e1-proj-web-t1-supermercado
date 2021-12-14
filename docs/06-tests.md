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
4. Ao clicar em Acessar, se nada for digitado, a página pedirá para preencher os campos email e senha.
5. Com os campos email e senha preenchidos, ao clicar em Acessar, irá para Home; porém, no lugar de "Olá Visitante!", aparecerá nome do usuário e ele poderá acessar sua Lista de Desejos e o botão Sair, para deslogar.


Resultados esperados:
1. Ao acessar a página de login, o usuário (cadastrado) de inserir dados nos campos Email e Senha.
2. Ao clicar no botão entrar, a p página contém os campos email e senha, além de a caixa de "Lembre-me" (para manter usuário logado), botões Acessar (para acesso à página do usuário), Aqui (para recuperar senha) e Cadastre-se (para novo usuário cadastrar-se). Transparência serão apresentados botões correspondentes aos anos 2018, 2019, 2020 e 2021;
3. Ao clicar no botão a tela abrirá o arquivo .pdf com o documento de prestação de contas correspondente.


CT.04 - Acesso a dados bancários para realizar doação 

Procedimentos:
1. Acessar o site através do link;
2. Clicar na página Doe.

Resultados esperados:
1. Ao acessar o link do site a página home deve ser aberta, a página deve apresentar as principais informações da organização;
2. Ao clicar em Doe será carregada a tela com todos os dados bancários do LARBEM para doação.


CT.05 - Validar estrutura Mobile-First do site

Procedimentos:
1. Acessar o site através do link utilizando computador;
2. Acessar o site através do link utilizando smartphone.

Resultados esperados:
1. Ao acessar o link do site a página home deve ser aberta, a página deve apresentar as principais informações da organização;
2. Layout do site deve se adaptar automaticamente dependendo do aparelho utilizado para acesso.
Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
