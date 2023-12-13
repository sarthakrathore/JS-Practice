// function isPalindrome(str) {
//     let i = 0;
//     let j = str.length - 1;
  
//     while (i < j) {
//       if (str[i] !== str[j]) {
//         return false;
//       }
  
//       i++;
//       j--;
//     }
  
//     return true;
//   }
  
//   const str = "nayan";
//   console.log(isPalindrome(str)); // Output: true



// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("");
//     console.log(reversedStr);
//     return str === reversedStr;
//   }
  
//   console.log(isPalindrome("racecar")); // Output: true



  


// function palindrom(str){

//     let reversestr=str.split("").reverse().join("")
//     return str===reversestr

// }
// console.log(palindrom("nayan"));



function palindrom(str) {

    let i=0
    let j=str.length-1

    while (i<j) {

        if(str[i]!==str[j]){
            return false
        }
        else{
            return true
        }

        i++
        j--
        
    }

    
}

console.log(palindrom("nayans"));






  
  