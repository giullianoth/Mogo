# MoGo Project

Este projeto consiste numa página de um site fictício chamado Mogo, cujos serviços estão voltados para web design e marketing digital. Foi construído para fins acadêmicos, com o intuito de se aplicar as tecnologias e padrões do web design. O layout foi desenhado por [Laaqiq](https://www.instagram.com/laaqiq.design/).

*This project consists of a page from a fictitious website called Mogo, whose services are focused on web design and digital marketing. It was built for academic purposes, in order to apply web design technologies and standards. The layout was designed by [Laaqiq](https://www.instagram.com/laaqiq.design/).*

## Status do projeto | Project status

Projeto finalizado, sendo aberto a propostas de melhorias ou correções.

*Finalized project, being open to proposals for improvements or corrections.*

## Layout

Construído a partir do método *mobile-first*, o projeto é responsivo, ou seja, é adaptável aos mais variados tamanhos e resoluções de telas, conforme demonstrado a seguir.

*Built from the mobile-first method, the project is responsive, that is, it is adaptable to the most varied sizes and screen resolutions, as shown below.*

[imagem]

Você também pode conferir a página acessando este link: [https://mogo-nu.vercel.app/](https://mogo-nu.vercel.app/).

Observação: Por se tratar de um projeto para fins acadêmicos, os links contidos na página não funcionarão, exceto os dois últimos localizados no rodapé.

*You can also check the page by accessing this link: [https://mogo-nu.vercel.app/](https://mogo-nu.vercel.app/).*

*Note: As this is a project for academic purposes, the links on the page will not work, except for the last two located at the footer.*

## Tecnologias utilizadas | Technologies used

Foram utilizadas as seguintes tecnologias para a construção desta página:

*The following technologies were used to build this page:*

- HTML 5
- CSS 3
- JavaScript / jQuery
- Sass

Vale lembrar que foram aplicados o uso de tags semânticas ao HTML, para tornar a página com acessibilidade facilitada e seguir as boas práticas do desenvolvimento web.

O uso do preprocessador CSS (nesse caso o Sass) torna mais produtiva a aplicação das folhas de estilo, o que possibilita a manutenibilidade posteriormente.

*It is worth remembering that the use of semantic tags was applied to the HTML, to make the page easier to access and follow the good practices of web development.*

*Using the CSS preprocessor (in this case Sass) makes the application of stylesheets more productive, which enables later maintainability.*

## Como instalar | How to install

Para baixar e instalar o projeto no seu computador, siga os seguintes passos:

- Instale o editor VS Code (recomendo fortemente, mas se há outro editor do seu gosto, não tem problema) e abra o projeto nele.
- Instale a extensão "Live Sass Compiler", ela que vai converter seu Sass em CSS. Após instalado:
    - Clique no ícone de engrenagem, depois em "Configurações de extensão" e depois em "settins.json";
    - Em ```settings.json``` acrescente os seguintes parâmetros:
    ```json
    "liveSassCompile.settings.formats":[ 
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "assets/styles/css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "assets/styles/css"
        },
    ]
    ```
    - Depois, na parte inferior do editor, clique em "Watch Sass".
- Recomendo também instalar a extensão "Live server". Caso não queira, abra o arquivo ```index.html``` no navegador.
- Divirta-se!

*To download and install the project on your computer, follow these steps:*

- *Install the VS Code editor (I highly recommend it, but if there's another editor you like, no problem) and open the project in it.*
- *Install the "Live Sass Compiler" extension, which will convert your Sass into CSS. After installed:*
    - *Click on the gear icon, then on "Extension settings" and then on "settins.json";*
    - *In ```settings.json``` add the following parameters:*
    ```json
    "liveSassCompile.settings.formats":[ 
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "assets/styles/css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "assets/styles/css"
        },
    ]
    ```
    - *Then, at the bottom of the editor, click on "Watch Sass".*
- *I also recommend installing the "Live server" extension. If not, open the ```index.html``` file in your browser.*
- *Enjoy it!*

## Autor | Author

Feito com amor por este cara sonhador:

*Made with love by this dreamy guy:*

Giulliano Tharso