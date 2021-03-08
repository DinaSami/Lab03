console.log("its built by DINA SAMI");
  alert("Welcome to our restaurant!");

  let result = confirm("Is this the first time you visit us?");
  console.log(result);
  
  function tryPrompt(){
    // Try prompt
    
    var choose = prompt("Do you like our service?");
    if(choose == "yes")
    {
        alert("Thanks!")
    }
    else if(choose == "no")
    {
        alert("Give us ur suggestion to improve!")
    }
  }
  tryPrompt();
  

  function tryLoop(){
// Try Loop
var answer = prompt("What star rating would you give us (1-3)?")
 
while(answer != "1" && answer != "2" && answer != "3")
{
answer = prompt("What star rating would you give us (1-3)?");
}

// Try IF
var input = '';
if(answer == "1")
{
input = '<img src="star.jpg" width="100"/>';
}
else 
{
input = '<img src="star.jpg" width="100"/>';
}

// Try Loop
var counter = '';
for(var i = 0;i < answer;i++)
{
    counter = counter + input;
}
document.write(counter)
}

tryLoop();


