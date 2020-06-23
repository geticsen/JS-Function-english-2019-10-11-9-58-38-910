function countWords(message){
  //message = message.replace(/,/g," ");
  message = message.split(" ");
  console.log(message);
  return message.length;
}
console.log(countWords('Good morning, I love JavaScript.')); 
