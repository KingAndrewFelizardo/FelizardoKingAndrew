const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var counter=0
console.log("EVEN NUMBERS:")
while (counter<arr.length){
    answer=counter%2
    if (answer==1){
        console.log(arr[counter])
        counter++
    }
    else{
        counter++
    }
}
var counter2=0
console.log("ODD NUMBERS:")
while (counter2<arr.length){
    answer=counter2%2
    if (answer==0){
        console.log(arr[counter2])
        counter2++
    }
    else{
        counter2++
    }
}