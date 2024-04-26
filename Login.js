function generate(){
    const length=10
    const possiblevalue="abcdefghijklmnopqrstuvwxyz"
    let password=""
    counter=0
    counter2=length(possiblevalue)
    while (counter<possiblevalue.length){
        password+=possiblevalue.charAt(math.floor(Math.random()*counter2));
        counter+=1;
    }
    document.getElementsByClassName('random').value=password;
}
Element.addEventListener("click",generate)
