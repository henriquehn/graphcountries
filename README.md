# Teste coma API Graph Countries
Esse projeto foi desenvolvido como um teste utilizando [GraphQL](https://graphql.org/) com a API [Graph Countries](https://github.com/lennertVanSever/graphcountries).
## Decisões de projeto
* Por questão de famiiaridade, optou-se pela utilização do REACT para o desenvolvimento do teste;
* Para manter a coerência do código e diminuir a ocorrência de erros de tipo, optou-se pelo uso do TypeScript; 
* O projeto foi dividido em três pastas principais:
* * assets: Contém artefatos diversos, como imagens e arquivos de estilo gerais;
* * components: Contém os componentes criados para a composição do sistema;
* * pages: contém as páginas principais do sistema;
* Para cada componente criado foi criada uma subpasta dentro de [components];
* Cada pasta de componente tem o nome componente que está contido nela e o código principal do componente está no documento index.tsx;
* As interfaces criadas para declarar as propriedades do componente foram mantidas na mesma pasta do componente ao qual pertence, cada uma em arquivo separado com o mesmo nome da respectiva interface;
* As definições gerais de estilo foram armazenadas em [assets/styles/global.css];
* As definições específicas de estilo de cada componente (quando for o caso) foram armazenadas na mesma pasta do respectivo componente com o nome styles.css;
## Estrutura do sistema
O sistema foi dividido em duas páginas principais.
Na raíz do aplicativo (/), foi criada uma landing page com uma breve descrição e um link para a lista com os cards dos países.
Na página CardList (/), foi criada uma página que permite visualizar todos os países ou filtrar os resultados pelo nome.
## Funcionamento do filtro
Para iniciar o filtro, o usuário deverá clicar no ítem da lupa, expandindo a caixa de pesquisa.
Ao digitar na caixa de pesquisa, o sistema irá mostrar apenas os países cujo nome contenha a exata sequência de catracteres digitada, seguindo os seguintes critérios:
* A busca ocorrerá por qualquer parte do nome do país;
* Não será considerado o nome em língua nativa;
* Não existe diferenciação entre maiúsculas e minúsculas;
* Existe diferenciação entre caracteres acentuados e não acentuados;
* Espaços em branco não são ignotados.
