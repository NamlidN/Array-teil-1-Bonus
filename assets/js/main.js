let arrayOutput = [];
let outputP = document.getElementById("out");
let outputPOP = " ";


function hin() {
    let input = document.getElementById("input").value;
    console.log(input);
    arrayOutput.push("<li>" + input + "</li>");
    console.log(arrayOutput);

    outputP.innerHTML = arrayOutput.join(' ');



}


function zur() {
    arrayOutput.pop();
    outputP.innerHTML = arrayOutput.join(' ');
} 
