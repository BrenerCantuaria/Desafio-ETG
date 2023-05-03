# Desafio criando rotas e consumindo API

Esse projeto react js foi desenvolvido como requisito técnico para vaga de estágio, usando vite para construção, por usar o carregamento de módulos permitindo uma compilação mais rápida e com menos sobrecarga de processamento. 

# ROTAS 
Para a utilização de rotas dentro da aplicação fiz o uso do react-router-dom pois ela possibilita a naveção do usuário dentro de uma página web ou de seus componentes react sem necessariamente ser feita uma solicitação ao servidor, dessa maneira o usuário consegue navegar entre as duas páginas principais da aplicação, que  até  o momento atende aos requisitos passados pelo recrutador, contando apenas com duas rotas a página inicial que conta com um breve descrição e um botão que leva a segunda página  permintido onde através da requisição a api é retornado as informções.

# API 
PokeApi é uma API pública que conta diversos dados da franquia Pokémon, por ser uma API completa permite o acesso a muitas informções sendo algumas delas, a espécies, habilidades, movimentos, evoluções etc. É a uma oportunidade de aprender a manipular esses dados. Para fazer a requisição ao servidor fiz o uso do fetch API, que é uma maneira de fazer requisições HTTP para algum servidor por essa função retornar uma promise se faz necessário o uso await para esperar a resolução ou rejeição da promise, separei em um pasta o código para uma melhor estruturação do projeto dessa maneira eu consigo chamar no local desejado a requisição ao servidor da API. Essa API trabalha recebendo endpoints e retornando as informações da requisição, então adicionei ao código uma template string que através do envio do formulário recebe o valor digitado e mandado como endpoint para a API.  


# Minhas dificuldades em rotas

Por se algo novo é recente tive dificulade em entender como funcinanva a estrutura de código que se comporta como um roteador de páginas, por se tratar de uma aplição react percebi que o devemos primeiramente fazer a instalação de uma nova biblioteca para cuidar espeficicamente das rotas dentro da aplicação, mas depois de um breve estudo consegui entender como funciona a estrutura básica de rotas de uma aplicação react.

# Minhas dificuldades na API

A princípio não tive dificuldades em fazer a requisição HTTP para o servidor da PokeAPI, uma vez que já tinha estudado sobre o assunto. A dificuldade surgiu após estar com o dados em mãos e não conseguir passar eles para o componente. Durante a codificação busquei várias maneiras de passar esses dados para um componente react, mas não estava obtendo sucesso, pois foi o react trabalha com uma maneira diferente com renderização de componetes na tela. Para solucionar essa dificuldade criei uma nova função assíncrona que executa somente quando o formulário é enviado.

