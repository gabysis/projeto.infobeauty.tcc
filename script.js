/* =========================================================
   InfoBeauty
   Funcionalidades principais do site
   ========================================================= */


/* ---------------------------------------------------------
   PRODUTOS
   --------------------------------------------------------- */

const productsList = [
    {
        name: "NIVEA Hidratante Facial em Gel 100g",
        category: "Pele",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
        description:
            "Hidratação facial com ácido hialurônico e pepino, com textura leve.",
        price: "R$ 27,90",
        url: "https://www.nivea.com.br/produtos/nivea-gel-hidratante-facial-423980040033.html",
        brand: "NIVEA"
    },

    {
        name: "Blush Compacto BC20 Divine HB61212",
        category: "Pele",
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=85",
        description:
            "Blush Ruby Rose de textura fina, acabamento acetinado e longa duração.",
        price: "R$ 14,25",
        url: "https://www.rubyrosemaquiagem.com.br/produto/3165-blush-compacto-bc20-divine-hb61212-rubyrose",
        brand: "Ruby Rose"
    },

    {
        name: "Paleta de Sombras Pretty HB1006",
        category: "Olhos",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
        description:
            "Paleta Ruby Rose com 22 sombras e primer para os olhos.",
        price: "Consulte",
        url: "https://www.rubyrosemaquiagem.com.br/produto/2154-paleta-de-sombras-pretty-hb1006-rubyrose",
        brand: "Ruby Rose"
    },

    {
        name: "Máscara para Cílios The Lash High HBE2007",
        category: "Olhos",
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=85",
        description:
            "Máscara preta com aplicador curvado para volume e definição.",
        price: "R$ 18,27",
        url: "https://www.rubyrosemaquiagem.com.br/produto/4527-mascara-para-cilios-the-lash-high-hbe2007-rubyrose",
        brand: "Ruby Rose"
    },

    {
        name: "NIVEA Hidratante Labial Hidra Color Rosé",
        category: "Lábios",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
        description:
            "Hidratação, cor e proteção solar para uso diário.",
        price: "R$ 12,00",
        url: "https://www.nivea.com.br/produtos/nivea-hidratante-labial-hidra-color-rose-40060001013300033.html",
        brand: "NIVEA"
    },

    {
        name: "NIVEA Hidratante Labial Hidra Color Coral",
        category: "Lábios",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
        description:
            "Bálsamo labial com cor, hidratação e proteção UVA/UVB.",
        price: "R$ 12,00",
        url: "https://www.nivea.com.br/produtos/nivea-hidratante-labial-hidra-color-coral-40060001013470033.html",
        brand: "NIVEA"
    },

    {
        name: "Paleta de Sombras Cosmic Mist HBE2204",
        category: "Olhos",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
        description:
            "Paleta Ruby Rose com acabamento para diferentes produções.",
        price: "R$ 25,00",
        url: "https://www.rubyrosemaquiagem.com.br/produto/3667-hbe2204-paleta-de-sombra-cosmic-mist-ruby-rose",
        brand: "Ruby Rose"
    },

    {
        name: "Máscara Curve & Volume HB8310L6",
        category: "Olhos",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
        description:
            "Máscara 2 em 1 com delineador, secagem rápida e longa duração.",
        price: "R$ 13,99",
        url: "https://www.rubyrosemaquiagem.com.br/produto/2732-mascara-de-cilios-curve-e-volume-hb8310l6-ruby-rose",
        brand: "Ruby Rose"
    }
];


/* ---------------------------------------------------------
   TUTORIAIS
   --------------------------------------------------------- */

const tutorialsList = [
    {
        title: "Automaquiagem básica dia a dia para iniciantes",
        tag: "01 · INICIANTES",
        videoId: "TpP8hyx_RMY"
    },

    {
        title: "Maquiagem olhos: aprenda o básico",
        tag: "02 · OLHOS",
        videoId: "d6nG6-kmszs"
    },

    {
        title: "Automaquiagem dos olhos para iniciantes",
        tag: "03 · OLHOS",
        videoId: "dFlMrAMSchs"
    }
];


/* ---------------------------------------------------------
   FUNÇÕES GERAIS
   --------------------------------------------------------- */

// Atalho para encontrar elementos pelo ID.
function getElement(id) {
    return document.getElementById(id);
}


// Recupera o usuário salvo no celular.
function getUser() {
    try {
        return JSON.parse(
            localStorage.getItem("infobeauty")
        );
    } catch (error) {
        return null;
    }
}


// Salva os dados do usuário no celular.
function saveUser(user) {
    localStorage.setItem(
        "infobeauty",
        JSON.stringify(user)
    );
}


// Verifica se as áreas protegidas estão liberadas.
function isUnlocked() {
    return (
        !!getUser() ||
        localStorage.getItem("infobeautyUnlocked") === "1"
    );
}


/* ---------------------------------------------------------
   NAVEGAÇÃO ENTRE ABAS
   --------------------------------------------------------- */

// Abre uma página do site.
function tab(pageId) {

    const protectedPages = [
        "products",
        "tutorials"
    ];

    // Produtos e tutoriais precisam de cadastro/login.
    if (
        protectedPages.includes(pageId) &&
        !isUnlocked()
    ) {
        protectedTab(pageId);
        return;
    }

    // Esconde todas as páginas.
    document.querySelectorAll(".page").forEach(
        function (page) {
            page.classList.remove("active");
        }
    );

    // Mostra a página escolhida.
    const selectedPage = getElement(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Volta para o início da página.
    window.scrollTo(0, 0);
}


// Controla o acesso às páginas protegidas.
function protectedTab(pageId) {

    if (!isUnlocked()) {

        alert(
            "Faça seu cadastro ou entre na sua conta para acessar esta aba."
        );

        tab("register");
        return;
    }

    tab(pageId);
}


/* ---------------------------------------------------------
   USUÁRIO E MENU
   --------------------------------------------------------- */

// Atualiza o menu de acordo com o login.
function renderUser() {

    const user = getUser();

    const loginButton =
        getElement("loginNav");

    const productsButton =
        getElement("productsNav");

    const tutorialsButton =
        getElement("tutorialsNav");

    const unlocked = isUnlocked();

    // Mostra ou esconde Produtos e Tutoriais.
    productsButton.classList.toggle(
        "nav-hidden",
        !unlocked
    );

    tutorialsButton.classList.toggle(
        "nav-hidden",
        !unlocked
    );

    // Usuário está logado.
    if (user) {

        const firstName =
            user.name.split(/\s+/)[0];

        loginButton.textContent =
            `Olá, ${firstName}`;

        loginButton.onclick = function () {

            getElement("welcome").textContent =
                `Olá, ${firstName}!`;

            tab("account");
        };

        return;
    }

    // Usuário não está logado.
    loginButton.textContent = "Entrar";

    loginButton.onclick = function () {
        tab("login");
    };
}


/* ---------------------------------------------------------
   CADASTRO
   --------------------------------------------------------- */

getElement("regForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            getElement("name").value.trim();

        const email =
            getElement("email").value
                .trim()
                .toLowerCase();

        const password =
            getElement("pass").value;

        const message =
            getElement("regMsg");


        // Verificação dos dados.
        if (
            name.length < 2 ||
            !email ||
            password.length < 4
        ) {

            message.textContent =
                "Preencha os dados corretamente. " +
                "A senha deve ter pelo menos 4 caracteres.";

            return;
        }


        // Salva o usuário.
        saveUser({
            name: name,
            email: email,
            pass: password
        });


        // Libera Produtos e Tutoriais.
        localStorage.setItem(
            "infobeautyUnlocked",
            "1"
        );


        // Atualiza o menu.
        renderUser();


        message.textContent =
            "Cadastro salvo neste celular! " +
            "Indo para o login...";


        // Limpa o formulário.
        getElement("regForm").reset();


        // Vai para o login.
        setTimeout(
            function () {
                tab("login");
            },
            700
        );
    }
);


/* ---------------------------------------------------------
   LOGIN
   --------------------------------------------------------- */

getElement("loginForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const user = getUser();

        const email =
            getElement("lemail").value
                .trim()
                .toLowerCase();

        const password =
            getElement("lpass").value;

        const message =
            getElement("loginMsg");


        // Verifica se existe cadastro.
        if (!user) {

            message.textContent =
                "Nenhum cadastro encontrado. " +
                "Faça seu cadastro primeiro.";

            return;
        }


        // Confere os dados.
        if (
            user.email !== email ||
            user.pass !== password
        ) {

            message.textContent =
                "E-mail ou senha incorretos.";

            return;
        }


        const firstName =
            user.name.split(/\s+/)[0];


        getElement("welcome").textContent =
            `Olá, ${firstName}!`;


        message.textContent =
            "Login realizado com sucesso!";


        renderUser();


        // Vai para a conta depois do login.
        setTimeout(
            function () {
                tab("account");
            },
            450
        );
    }
);


/* ---------------------------------------------------------
   SAIR DA CONTA
   --------------------------------------------------------- */

function logout() {

    localStorage.removeItem(
        "infobeauty"
    );

    localStorage.removeItem(
        "infobeautyUnlocked"
    );

    renderUser();

    tab("home");
}


/* ---------------------------------------------------------
   CATEGORIAS DOS PRODUTOS
   --------------------------------------------------------- */

const categories = [
    "Todos",
    "Pele",
    "Olhos",
    "Lábios"
];

let selectedCategory = "Todos";


// Cria os botões de categoria.
getElement("filters").innerHTML =
    categories
        .map(
            function (category, index) {

                const activeClass =
                    index === 0
                        ? "active"
                        : "";

                return `
                    <button
                        class="filter ${activeClass}"
                        onclick="setCategory('${category}', this)"
                    >
                        ${category}
                    </button>
                `;
            }
        )
        .join("");


/* ---------------------------------------------------------
   ALTERAR CATEGORIA
   --------------------------------------------------------- */

function setCategory(
    category,
    button
) {

    selectedCategory = category;


    // Remove o destaque das outras categorias.
    document
        .querySelectorAll(".filter")
        .forEach(
            function (filter) {
                filter.classList.remove(
                    "active"
                );
            }
        );


    // Destaca a categoria escolhida.
    button.classList.add("active");


    renderProducts();
}


/* ---------------------------------------------------------
   MOSTRAR PRODUTOS
   --------------------------------------------------------- */

function renderProducts() {

    const search =
        getElement("ps").value
            .trim()
            .toLowerCase();


    const filteredProducts =
        productsList.filter(
            function (product) {

                const matchesCategory =
                    selectedCategory === "Todos" ||
                    product.category === selectedCategory;


                const searchableText = `
                    ${product.name}
                    ${product.description}
                    ${product.brand}
                `.toLowerCase();


                const matchesSearch =
                    searchableText.includes(search);


                return (
                    matchesCategory &&
                    matchesSearch
                );
            }
        );


    const productsContainer =
        getElement("pg");


    // Nenhum resultado.
    if (
        filteredProducts.length === 0
    ) {

        productsContainer.innerHTML = `
            <div class="empty">
                Nenhum produto encontrado.
            </div>
        `;

        return;
    }


    // Cria os cards.
    productsContainer.innerHTML =
        filteredProducts
            .map(
                function (product) {

                    return `
                        <article class="product">

                            <div class="pic">
                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                    loading="lazy"
                                >
                            </div>

                            <div class="product-body">

                                <small>
                                    ${product.category.toUpperCase()}
                                    ·
                                    ${product.brand.toUpperCase()}
                                </small>

                                <h3>
                                    ${product.name}
                                </h3>

                                <p>
                                    ${product.description}
                                </p>

                                <div class="product-bottom">

                                    <strong>
                                        ${product.price}
                                    </strong>

                                    <a
                                        class="product-link"
                                        href="${product.url}"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Ver produto ↗
                                    </a>

                                </div>

                            </div>

                        </article>
                    `;
                }
            )
            .join("");
}


// Pesquisa enquanto digita.
getElement("ps").addEventListener(
    "input",
    renderProducts
);


// Pesquisa ao clicar na lupa.
getElement("ps")
    .nextElementSibling
    .addEventListener(
        "click",
        renderProducts
    );


/* ---------------------------------------------------------
   TUTORIAIS
   --------------------------------------------------------- */

function renderTutorials() {

    const search =
        getElement("ts").value
            .trim()
            .toLowerCase();


    const filteredTutorials =
        tutorialsList.filter(
            function (tutorial) {

                return tutorial.title
                    .toLowerCase()
                    .includes(search);
            }
        );


    const tutorialsContainer =
        getElement("tg");


    // Nenhum tutorial encontrado.
    if (
        filteredTutorials.length === 0
    ) {

        tutorialsContainer.innerHTML = `
            <div class="empty">
                Nenhum tutorial encontrado.
            </div>
        `;

        return;
    }


    // Cria os cards dos vídeos.
    tutorialsContainer.innerHTML =
        filteredTutorials
            .map(
                function (tutorial) {

                    return `
                        <article class="tutorial">

                            <iframe
                                src="https://www.youtube.com/embed/${tutorial.videoId}"
                                title="${tutorial.title}"
                                loading="lazy"
                                allow="
                                    accelerometer;
                                    autoplay;
                                    clipboard-write;
                                    encrypted-media;
                                    gyroscope;
                                    picture-in-picture;
                                    web-share
                                "
                                allowfullscreen
                            ></iframe>

                            <div>

                                <small>
                                    ${tutorial.tag}
                                </small>

                                <h3>
                                    ${tutorial.title}
                                </h3>

                                <p>
                                    Vídeo real do YouTube
                                    para acompanhar o
                                    passo a passo.
                                </p>

                                <a
                                    class="watch"
                                    href="https://www.youtube.com/watch?v=${tutorial.videoId}"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Abrir no YouTube ↗
                                </a>

                            </div>

                        </article>
                    `;
                }
            )
            .join("");
}


// Pesquisa de tutoriais.
getElement("ts").addEventListener(
    "input",
    renderTutorials
);


// Pesquisa ao clicar na lupa.
getElement("ts")
    .nextElementSibling
    .addEventListener(
        "click",
        renderTutorials
    );


/* ---------------------------------------------------------
   INICIALIZAÇÃO DO SITE
   --------------------------------------------------------- */

// Mostra os produtos.
renderProducts();

// Mostra os tutoriais.
renderTutorials();

// Atualiza o menu.
renderUser();
