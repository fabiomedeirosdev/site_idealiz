/* =========================================================
   AGÊNCIA IDEALIZ
   JAVASCRIPT PURO
========================================================= */


/* =========================================================
   1. MENU SUAVE
========================================================= */

const links = document.querySelectorAll('a[href^="#"]');

const botaoMenu = document.querySelector(".menu-hamburguer");
const menuPrincipal = document.querySelector("body > header nav");

if (botaoMenu && menuPrincipal) {

    botaoMenu.addEventListener("click", () => {

        const menuAberto = menuPrincipal.classList.toggle("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuAberto);
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

    });

    menuPrincipal.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            menuPrincipal.classList.remove("menu-aberto");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        });

    });

}

links.forEach(link => {

    link.addEventListener("click", function (event) {

        const destino = this.getAttribute("href");

        if (destino === "#") {
            return;
        }

        const elemento = document.querySelector(destino);

        if (elemento) {

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   2. HEADER MUDANDO AO ROLAR A PÁGINA
========================================================= */

const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================================
   3. ANIMAÇÃO DOS ELEMENTOS AO ENTRAREM NA TELA
========================================================= */

const elementosAnimados = document.querySelectorAll(
    "section article, " +
    "#sobre > div > div, " +
    "#equipe > div > div, " +
    "#equipe + section > div > div"
);

const observador = new IntersectionObserver(

    (elementos) => {

        elementos.forEach(elemento => {

            if (elemento.isIntersecting) {

                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";

                observador.unobserve(elemento.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementosAnimados.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observador.observe(elemento);

});


/* =========================================================
   4. CONTADORES
========================================================= */

const contadores = document.querySelectorAll("#inicio strong");

let contadorIniciado = false;


function iniciarContadores() {

    if (contadorIniciado) {
        return;
    }

    contadorIniciado = true;

    contadores.forEach(contador => {

        const textoOriginal = contador.textContent;

        const numero = parseInt(
            textoOriginal.replace(/\D/g, "")
        );

        const prefixo = textoOriginal.includes("+")
            ? "+"
            : "";

        let valorAtual = 0;

        const incremento = Math.ceil(numero / 50);

        const intervalo = setInterval(() => {

            valorAtual += incremento;

            if (valorAtual >= numero) {

                valorAtual = numero;

                clearInterval(intervalo);

            }

            contador.textContent =
                prefixo + valorAtual +
                (textoOriginal.includes("%") ? "%" : "") +
                (textoOriginal.includes(" anos") ? " anos" : "");

        }, 30);

    });

}


/* =========================================================
   5. OBSERVAR O HERO
========================================================= */

const hero = document.querySelector("#inicio");

const observadorHero = new IntersectionObserver(

    (elementos) => {

        elementos.forEach(elemento => {

            if (elemento.isIntersecting) {

                iniciarContadores();

                observadorHero.unobserve(elemento.target);

            }

        });

    },

    {
        threshold: 0.4
    }

);

if (hero) {
    observadorHero.observe(hero);
}


/* =========================================================
   6. EFEITO NOS CARDS DE SERVIÇOS
========================================================= */

const cardsServicos =
    document.querySelectorAll("#servicos article");


cardsServicos.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


/* =========================================================
   7. BOTÕES DOS SERVIÇOS
========================================================= */

const botoesServicos =
    document.querySelectorAll("#servicos article > a");


botoesServicos.forEach(botao => {

    botao.addEventListener("click", function (event) {

        event.preventDefault();

        const card = this.closest("article");

        const servico =
            card.querySelector("h3").textContent;

        const mensagem =
            `Olá! Gostaria de saber mais sobre o serviço de ${servico}.`;

        const telefone = "5535999723747";

        const url =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});


/* =========================================================
   8. BOTÃO "QUERO CRESCER AGORA"
========================================================= */

const botaoHero =
    document.querySelector("#inicio > div > div:first-child > a");


if (botaoHero) {

    botaoHero.addEventListener("click", function () {

        const telefone = "5535999723747";

        const mensagem =
            "Olá! Quero crescer minha empresa no digital e gostaria de conhecer as soluções da Agência Idealiz.";

        const url =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


/* =========================================================
   9. BOTÃO FALE CONOSCO
========================================================= */

const botaoContato =
    document.querySelector("body > header > div > a:last-child");


if (botaoContato) {

    botaoContato.addEventListener("click", function (event) {

        event.preventDefault();

        const telefone = "5535999723747";

        const mensagem =
            "Olá! Vim pelo site da Agência Idealiz e gostaria de mais informações.";

        const url =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


/* =========================================================
   10. BOTÃO TRABALHAR COM A IDEALIZ
========================================================= */

const botaoEquipe =
    document.querySelector("#equipe + section a");


if (botaoEquipe) {

    botaoEquipe.addEventListener("click", function (event) {

        event.preventDefault();

        const telefone = "5535999723747";

        const mensagem =
            "Olá! Tenho interesse em trabalhar com a Agência Idealiz.";

        const url =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


/* =========================================================
   11. BOTÃO WHATSAPP PRINCIPAL
========================================================= */

const whatsapp =
    document.querySelector("#contato a");


if (whatsapp) {

    whatsapp.addEventListener("click", function () {

        const telefone = "5535999723747";

        const mensagem =
            "Olá! Gostaria de falar com a equipe da Agência Idealiz.";

        const url =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


/* =========================================================
   12. DESTAQUE DO MENU CONFORME A SEÇÃO
========================================================= */

const secoes = document.querySelectorAll("main section[id]");

const menuLinks =
    document.querySelectorAll("body > header nav a");


const observadorMenu = new IntersectionObserver(

    (elementos) => {

        elementos.forEach(elemento => {

            if (elemento.isIntersecting) {

                const id =
                    elemento.target.getAttribute("id");

                menuLinks.forEach(link => {

                    link.style.color = "";

                    if (link.getAttribute("href") === `#${id}`) {

                        link.style.color = "#9a5cff";

                    }

                });

            }

        });

    },

    {
        threshold: 0.45
    }

);


secoes.forEach(secao => {

    observadorMenu.observe(secao);

});


/* =========================================================
   13. ANIMAÇÃO DO BOTÃO WHATSAPP
========================================================= */

if (whatsapp) {

    setInterval(() => {

        whatsapp.style.transform = "scale(1.03)";

        setTimeout(() => {

            whatsapp.style.transform = "scale(1)";

        }, 300);

    }, 4000);

}


/* =========================================================
   14. ANO AUTOMÁTICO DO RODAPÉ
========================================================= */

const copyright =
    document.querySelector("footer > div:last-child p");


if (copyright) {

    const anoAtual = new Date().getFullYear();

    copyright.textContent =
        `© ${anoAtual} Agência Idealiz. Todos os direitos reservados. Desenvolvido por @FabioMendesDev`;

}


/* =========================================================
   15. MENSAGEM NO CONSOLE
========================================================= */

console.log(
    "Agência Idealiz — site carregado com sucesso."
);