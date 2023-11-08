let word1 = "abcdefg"
let word2 = "opqrs"

let arr1 = []
let arr2 = []
let arr3 = []

let test1 = []
let test2 = []
let test3 = []

let len1 = word1.length
let len2 = word2.length
document.getElementById("test").addEventListener("click", myFunction, );
document.getElementById("test").addEventListener("click", functionLeet, );


function myFunction() {
  document.getElementById("test").innerHTML = "YOU CLICKED ME!";
}

function functionLeet(){

  for (let i = 0; i < len1; i++) {
    test1.push(i)
    arr1.push(word1[i])
  }

  for (let i = 0; i < len2; i++) {
    test2.push(i)
    arr2.push(word2[i])
  }

  if (len1 <= len2){
    let remainLen2 = len2 - len1

    for (let i = 0; i < len1; i++) {
      arr3.push(word1[i])
      arr3.push(word2[i])
    }
    // console.log(remainLen2)
    for (let i = 0; i < len1; i++) {
      arr2.shift(i)
    }

    for (let i = 0; i < remainLen2; i++) {
      arr3.push(arr2[i])
    }
  }
  if (len1 > len2){
    let remainLen1 = len1 - len2

    for (let i = 0; i < len2; i++) {
      arr3.push(word1[i])
      arr3.push(word2[i])
    }
    // console.log(remainLen2)
    for (let i = 0; i < len2; i++) {
      arr1.shift(i)
    }

    for (let i = 0; i < remainLen1; i++) {
      arr3.push(arr1[i])
    }
  }
  let list = arr3.toString()
  let output = list.replaceAll(',', '');
  // return arr3

  console.log(test1);
  console.log(arr1);  
  console.log(test2);
  console.log(arr2); 
  console.log(arr3);
  console.log(list)
  console.log(output)
  return output
} 

