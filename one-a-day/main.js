//MakeUpperCase
function makeUpperCase(str) {
return str.toUpperCase()
}



//7 kyu
//Fizz Buzz

function fizzbuzz(n){
  let arr = []
  for(let i = 1; arr.length < n; i++){
  if(i% 3 === 0 && i % 5 === 0){
    arr.push('FizzBuzz')
  }else if( i % 3 === 0){
    arr.push('Fizz')
  }else if( i % 5 === 0){
    arr.push('Buzz')
  }else {
    arr.push(i)
  }
  
}
  return arr
}

//Beginner - Lost Without a Map

function maps(x){
  return x.map(john => john * 2)
  }

  //Beginner Series #2 Clock



  function past(h, m, s){
    s = s * 1000
    m =  m * 1000 * 60
    h = h * 1000 * 60 * 60
   return s + m + h
   
 }

 //Is n divisible by x and y?

 function isDivisible(n, x, y) {
  if(n % x === 0 && n % y === 0 ){
    return true
  }else{
    return false
  }
}