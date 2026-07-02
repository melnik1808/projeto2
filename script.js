function escolha(caminho){

const texto = document.getElementById("texto");
const imagem = document.getElementById("imagem");
const opcoes = document.getElementById("opcoes");

if(caminho=="esquerda"){

imagem.src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=900";

texto.innerHTML=
"Você encontrou uma antiga cachoeira escondida. Atrás dela existe uma passagem secreta.";

opcoes.innerHTML=`
<button onclick="finalBom()">Entrar</button>
<button onclick="inicio()">Voltar</button>
`;

}

else{

imagem.src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900";

texto.innerHTML=
"Seguindo o rio, você chega a uma ponte de madeira bastante antiga.";

opcoes.innerHTML=`
<button onclick="finalRuim()">Atravessar</button>
<button onclick="inicio()">Voltar</button>
`;

}

}

function finalBom(){

document.getElementById("texto").innerHTML=
"Parabéns! Você encontrou o tesouro perdido da floresta!";

document.getElementById("opcoes").innerHTML=
`<button onclick="inicio()">Jogar novamente</button>`;

}

function finalRuim(){

document.getElementById("texto").innerHTML=
"A ponte quebrou e você precisou voltar para casa sem descobrir o segredo.";

document.getElementById("opcoes").innerHTML=
`<button onclick="inicio()">Tentar novamente</button>`;

}

function inicio(){

location.reload();

}