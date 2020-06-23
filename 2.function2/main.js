function palindrome(message){
  var len = message.length;
  var isPalindrome =true;
  for(var i=0;i<len/2;i++){
    if(message[i]!=message[len-1-i]){
	  isPalindrome=false;
	}
  }
  return isPalindrome;
}

console.log(palindrome('hello')); 
console.log(palindrome('cabac')); 
