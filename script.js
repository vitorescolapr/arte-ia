const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com a polícia apreendendo a moto do seu amigo do grau.",
        alternativas: [
            {
                texto: "Isso é triste",
                afirmacao: "No início, ficou com medo de ser o próximo a ser preso. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ainda bem que aconteceu isso, pois pode servir de alerta. "
            }
        ]
    },
    {
        enunciado: "Você recebe uma mensagem para apoiar um abaixo-assinado para criar um espaço legalizado para o grau na cidade.",
        alternativas: [
            {
                texto: "Assina e ajuda a divulgar o projeto.",
                afirmacao: "Consegue reunir apoio de muitos motociclistas e simpatizantes da causa. "
            },
            {
                texto: "Ignora, pois acha perigoso dar grau mesmo em espaço legal.",
                afirmacao: "Prefere que o grau continue sendo combatido pelas autoridades. "
            }
        ]
    },
    {
        enunciado: "Um vereador propõe um projeto de lei para regulamentar o grau como esporte urbano. Você é convidado para uma audiência pública. Qual sua posição?",
        alternativas: [
            {
                texto: "Defende o projeto, afirmando que isso pode dar oportunidades para jovens e valorizar a cultura periférica.",
                afirmacao: "Seu discurso comoveu até quem era contra, e você virou uma referência no assunto. "
            },
            {
                texto: "Se opõe ao projeto, dizendo que isso só trará mais acidentes e problemas no trânsito.",
                afirmacao: "Conseguiu convencer parte da população de que regulamentar seria perigoso. "
            }
        ]
    },
    {
        enunciado: "Um grupo de jovens quer fazer uma competição de grau legalizada. Pedem sua ajuda com organização. Você...",
        alternativas: [
            {
                texto: "Ajuda com tudo, desde logística até a segurança.",
                afirmacao: "O evento foi um sucesso, com mídia, segurança e participação recorde. "
            },
            {
                texto: "Recusa, achando que isso pode gerar mais confusão na cidade.",
                afirmacao: "Sem sua ajuda, o evento teve pouca estrutura e acabou sendo malvisto. "
            }
        ]
    },
    {
        enunciado: "Finalmente, o futuro do grau na cidade será decidido em uma votação popular. Qual campanha você faz?",
        alternativas: [
            {
                texto: "Cria vídeos, panfletos e fala com a comunidade sobre os benefícios de um espaço seguro para o grau.",
                afirmacao: "A mobilização foi histórica e a maioria votou a favor da regulamentação. "
            },
            {
                texto: "Campanha para reforçar que grau deve continuar proibido.",
                afirmacao: "Muitos apoiaram sua ideia e decidiram manter o grau fora da lei. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
