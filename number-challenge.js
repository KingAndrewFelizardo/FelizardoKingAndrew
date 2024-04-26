/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

function sum(){
    var no1=window.prompt("Enter the 1st number to add")
    var no2=window.prompt("Enter the 2nd number to add")
    var no3=window.prompt("Enter the 3rd number to add")
    no1=parseFloat(no1)
    no2=parseFloat(no2)
    no3=parseFloat(no3)
    var answer=no1+no2+no3
    alert(answer)
}
function minus(){
    var no1=window.prompt("Enter the 1st number to subtract")
    var no2=window.prompt("Enter the 2nd number to subtract")
    no1=parseFloat(no1)
    no2=parseFloat(no2)
    var answer=no1-no2
    alert(answer)
}
function multiply(){
    var no1=window.prompt("Enter the 1st number to multiply")
    var no2=window.prompt("Enter the 2nd number to multiply")
    no1=parseFloat(no1)
    no2=parseFloat(no2)
    var answer=no1*no2
    alert(answer)
}
function average(){
    var no1=window.prompt("Enter the 1st number to get average")
    var no2=window.prompt("Enter the 2nd number to get average")
    no1=parseFloat(no1)
    no2=parseFloat(no2)
    var answer=no1+no2
    var answer=answer/2
    alert(answer)
}