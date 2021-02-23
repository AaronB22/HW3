
var generateBtn = document.querySelector("#generate");


var uppercaseGen = Math.round(Math.random()*24)+1;
generateBtn.addEventListener("click", writePassword);


function writePassword(){
  console.clear()
  document.getElementById('password').innerHTML=""
  var caseValue= 0;
  var specialValue = 0;
  var integerValue = 0;
  
  var characterAmount =  window.prompt("Number of Characters ( 8 to 128)")
  var casePrompt = window.prompt("Would you like Uppercase, Lowercase, or Both? (Uppercase,Lowercase,Both)")
  
  
  var specialPrompt = window.prompt("Special Characters?")
  var integerPrompt= window.prompt ('Would you like number in your password?')
  if (characterAmount<8){
    var characterAmount = window.prompt("Not enough characters. Needs to be atleast 8 character (128 max)")
  }
  
  if (characterAmount>128){
    var characterAmount = window.prompt("Too many characters. Needs to be no more than 128 characters (8 min)")}

    document.getElementById('generate').innerHTML= "Generate Another Password"
  for (var x=0; x<characterAmount; x++){
      
      
      var uppercaseFun= function(){
        var uppercase = Math.floor(Math.random()*(90-65 + 1))+65;
        var pw = String.fromCharCode(uppercase)
        document.getElementById("password").innerHTML+=  pw;
        console.log(pw)
        
        }
       
      
      var lowercaseFun = function()
      {
        var lowercase = Math.floor(Math.random()*(122-97 + 1))+97;
        var pw = String.fromCharCode(lowercase)
        document.getElementById("password").innerHTML+=  pw;
        console.log(pw)
        
        
      }
  
      var bothCaseFun = function(){
        var character = Math.floor(Math.random()*2)+1;
        if (character===1){
          uppercaseFun()
          
        }
        if (character===2){
          lowercaseFun()
          
        }
      
      }
      
      var specialFun = function(){
        var special =Math.floor(Math.random()*(63-58)+58);
        var pw =String.fromCharCode(special)
        document.getElementById("password").innerHTML+=  pw;
        console.log(pw)
        
        
      }
      
      var integerFun= function (){
        var integer=Math.floor(Math.random()*(57-48)+48)
        var pw = String.fromCharCode(integer)
        document.getElementById("password").innerHTML+=  pw;
        console.log(pw)
      }
    if (casePrompt === "Uppercase"){
       var caseValue = 1}

     
       
       if (casePrompt ==="Lowercase"){
         var caseValue = 3}
         
         
    if (casePrompt=== "Both"){
           var caseValue = 4}

      if (caseValue===0){
    while(caseValue === 0){
      if (caseValue === 0){
        var casePrompt=  window.prompt("Must have a letter. Would you like Uppercase, Lowercase, or Both? (Uppercase,Lowercase,Both)");
        console.log('inLoop')
        break;
      }
   }}
    
         
    

          
           
           if (specialPrompt ==="Yes"){
             var specialValue = 7}
             
             if (specialPrompt==="No") {
               var specialValue = 0}
               
               
               if (integerPrompt=== "Yes"){
                 var integerValue = 12
               }      
               
              if (integerPrompt=== "No"){
                var integerValue = 0
              }
              
               
            var  characterValue = specialValue+integerValue+caseValue;
            
            console.log(characterValue)
    if (characterValue===1){
      uppercaseFun()
      
    
    }
    if (characterValue===3){
    lowercaseFun()
    
   }
    if (characterValue=== 4){
     bothCaseFun()
    }
    
  if (characterValue===8){
    var character = Math.floor(Math.random()*2)+1;
    if (character===1){
      uppercaseFun()
    }
    if (character===2){
      specialFun()
    }
  }
    
    if (characterValue=== 10){
      var character = Math.floor(Math.random()*2)+1;
      if (character===1){
        lowercaseFun
      }
      if (character===2){
        specialFun
      }
    }
    if (characterValue===11){
      var character = Math.floor(Math.random()*2)+1;
      if (character===1){
        bothCaseFun()
      }
      
    }


   
    
    if (characterValue===13){
      var character = Math.floor(Math.random()*2)+1;
      if (character===1){
        
      }
    }
    if (characterValue===15){
      var character = Math.floor(Math.random()*2)+1;
      if (character===1){
        lowercaseFun()
      }
      if (character===2){
        integerFun()
      }
    }
    if (characterValue===16){
      var character = Math.floor(Math.random()*2)+1;
      if (character===1){
         bothCaseFun()
      }
      if (character===2){
        integerFun()
    }}
    if (characterValue===20){
      var character = Math.floor(Math.random()*3)+1;
      if (character===1){
        uppercaseFun()
      }
      if (character===2){
        specialFun()
      }
      if (character===3){
        integerFun()
      }
    }
    if (characterValue===22){
      var character = Math.floor(Math.random()*3)+1;
      if (character===1){
        lowercaseFun()
      }
      if (character===2){
        specialFun()
      }
      if (character===3){
        integerFun()
        ;}}

       if (characterValue===23){
        var character = Math.floor(Math.random()*3)+1;
        if (character===1){
          bothCaseFun()
        }
        if (character===2){
          specialFun()
        }
        if (character===3){
          integerFun()
        }}}} 
      
        

    
  