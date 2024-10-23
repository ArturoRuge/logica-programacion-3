function calcular(){
    const number = parseInt(document.getElementById("number").value);
    const container = document.getElementById("container");
    let factorial = 1;

    for(i=1; i<=number; i++){
        factorial *= i;
    }
    container.innerText = factorial;

}