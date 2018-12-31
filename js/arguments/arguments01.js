function bstring(){
    const args = Array.prototype.slice.call(arguments);
    let tempSize = 0;
    let tempString = "";
    for (let i = 0; i < arguments.length; i++){
              console.log("For" + i + " " + tempString + " " + args[i]);
          if(args[i].length > tempSize){
            tempString = args[i];
                      tempSize = tempString.length; 
            console.log("if " + i + " " + tempString + " " + args[i]);
          }
    }
    console.log(tempString);
  }