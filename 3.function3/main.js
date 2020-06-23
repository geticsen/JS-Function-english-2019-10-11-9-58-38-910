function alphabetSort(message){
  message = message.split("");
  var str="";
  var temp;
  for(var i=0;i<message.length;i++){
	  for(var j=0;j<message.length;j++){
		if(message[i]<message[j]){
			temp = message[i];
			message[i] = message[j];
			message[j] =temp;
		}
	  }
  }
  for(var j=0;j<message.length;j++){
	str+= message[j];
  }
  return str;
}
var str = "hello";
console.log(alphabetSort(str));
