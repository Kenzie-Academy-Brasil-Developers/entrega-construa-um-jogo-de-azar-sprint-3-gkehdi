function jogar(){

    return Math.floor(Math.random ()*3); 
}
const button = document.querySelector("#botao");
const answer=document.querySelector("#answer");

button.addEventListener("click", function(){
let numAleatorio = jogar();
let phrase = "";

if(numAleatorio === 0){
    
    phrase = "yes!";
}
if (numAleatorio === 1){

    phrase = "No!"
} 
if (numAleatorio ===2){

    phrase = "Depends on you!"

}

answer.innerHTML = phrase;

});













// let msg = document.createElement("p");
// msg.setAttribute("src", "p");
// document.getElementById("resposta").appendChild("msgum");
// document.getElementById("resposta").innerHTML = ("oioioi!!!!");
// break;


// function iniciar() {

//     let play = Math.floor(Math.random() * 10);
    
//     switch (play) {

//         case 0:

        // let msg = document.createElement("p");
        // msg.setAttribute("src", "p");
        // document.getElementById("resposta").appendChild("msgum");
        // document.getElementById("resposta").innerHTML = ("oioioi!!!!");
        // break;
    //     let message = document.createElement("div");
    //     message.id("message")
    //     let answer = document.getElementById("message");
    //     answer.appendChild(message);
    //     answer.innerHTML("Você vai ser muito rico");
    //     break;
    // }

// }
// }