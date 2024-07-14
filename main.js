
// 1 - Projeto LabScore
function media(array){
    let notaFinal = 0;

    for(let i =0; i<array.length; i++){
        notaFinal += array[i]
    }

    return notaFinal / array.length;
}

let notas = [10, 10, 8, 1];

console.log(media(notas));

// 2 - Projeto LabScore
function validacaoMedia(media){
    document.write("<h1>Resultado da media</h1>");
    if(media >= 7){
        document.write("Parabéns você passou na média !" + "<br>");
    } else {
        document.write("Infelizmente você está de recuperação."+ "<br>");
    };
}

validacaoMedia(media(notas));

// 3 - Projeto LabScore
function imprimirNomes(arrayDeNomes){
    document.write("<h1>Nomes</h1>");

    arrayDeNomes.forEach(nome => {
        document.write(nome + "<br>");
    });
}
nomes = ["Alice", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", "Larissa", "Marcelo"];

imprimirNomes(nomes);

// 4 - Projeto LabScore
function taboada8(){
    document.write("<h1>Taboada do 8</h1>");
    
    for(let x =0; x<=10; x++){
        document.write(x+ " : " + +8 + " x " + x + " = "+ 8*x + "<br>")
    }
}

taboada8();

// 5 - Projeto LabScore

function coletaDados(){
    document.write("<h1>Exercicio 5 cadastro do usuario por window prompt</h1>");

    let nome = window.prompt("Qual o seu nome?")
    let idade = window.prompt("Qual a sua idade?")
    let serie = window.prompt("Qual a sua série?")
    let escola = window.prompt("Qual o nome da sua escola?")
    let materiaFavorita = window.prompt("Qual a sua matéria favorita?")

    
    if (!window.confirm("Confirma o nome:" + nome)){
        window.alert("os dados não foram confirmados")
        return
    }
    if (!window.confirm("Confirma a idade:" + idade)){
        window.alert("os dados não foram confirmados")
        return
    }
    if (!window.confirm("Confirma a série:" + serie)){
        window.alert("os dados não foram confirmados")
        return
    }
    if (!window.confirm("Confirma a escola:" + escola)){
        window.alert("os dados não foram confirmados")
        return
    }
    if (!window.confirm("Confirma a matéria favorita?" + materiaFavorita)){
        window.alert("os dados não foram confirmados")
        return
    }
    document.write("Nome: " + nome + "<br>" +"Idade: " + idade + "<br>" +"Série: " + serie + "<br>" +"Escola: " + escola + "<br>" +"Matéria Favorita: " + materiaFavorita + "<br>");
}

coletaDados()

// 6 - Projeto LabScore
document.write("<h1>Media de Materias</h1>");

class Materia{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }

}


function crirarMateria(){
    let nomeDaMateria = window.prompt("Qual o nome da materia?")
    let notasDaMateria = []
    while(true){
        notasDaMateria[0] = parseInt(window.prompt("nota 1: "))
        notasDaMateria[1] = parseInt(window.prompt("nota 2: "))
        notasDaMateria[2] = parseInt(window.prompt("nota 3: "))
        notasDaMateria[3] = parseInt(window.prompt("nota 4: "))
        break
    }
    return new Materia(nomeDaMateria, notasDaMateria)
}

let materia = crirarMateria()
console.log(materia.notas)
let mediaDaMateria = media(materia.notas)
console.log(mediaDaMateria)
document.write(mediaDaMateria +"<br>")

// 7 - Projeto LabScore

function maiorNota(array){
    let notaMaisAlta = 0
    for (i = 0; i< array.length ; i++){
        if (notaMaisAlta <= array[i]){
            notaMaisAlta = array[i]
        }
    }
    document.write("Nota mais alta foi:" + notaMaisAlta)
    console.log("Nota mais alta foi:" + notaMaisAlta)
}

maiorNota(materia.notas)