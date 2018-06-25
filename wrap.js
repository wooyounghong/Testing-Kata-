const wrap = (line, maxLen) => {
  if(maxLen === undefined){return line}
  if(line === ""){return line}

  let answer = ""
  for(var i=0; i<line.length; i++){
    if(i%maxLen===0){
      if(i===0){
        continue;
      } else if(i<line.length-1) {
       answer+=line.slice(i-maxLen,i)+"\n"
      } else {
        answer+=line.slice(i-maxLen,i+1)+"\n"
      }
    }
  }
  return answer.slice(0, answer.length-1);

};




module.exports = wrap;
