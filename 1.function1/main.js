function reverseString(message){
  var temp;
  var len = message.length;
  var res="";
  for(var i=len-1;i>=0;i--){
    res += message[i];
	
  }
  return res;
}
var res = reverseString('hello'); // should return 'olleh'
console.log(res);
