//Event function
let results=7
function mark(){ 
    let input1 = document.getElementById('answerOne').Value;
    input1 = input1.tolowercase();
if(input1 == "toronto") { 
    console.log('right 1');
}else{ 
    console.log('wrong 1');
    results--;
}

   let input2 = document.getElementById('answertwo'). value;
if(input2 == "asia") { 
    console.log('right 2');
}else{ s
    console.log('wrong2');
  }
  let input3 = document.getElemebtById('answerthree').value;
  input3= input3.tolowercase();
if(input3 == 'mariana trench'){ 
      console.log('right 3');
}else { 
    console.log('wrong 3');
    results--;
}

  let input4 = document.getElementById('answerfour').value;
  input4 == input4.toowercase();
if(input4 == "africa"){
  console.log('right 4');
} else{
    console.log('wrong 4');
    results--;
}

  let input5= Number(document.getElementById('answerfive').value);
  input5 == input5.tolowercase();
if(input5 == '54'){
  console.log('right 5');
}else{ 
    console.log ('wrong5');
    results--;
}
  let input6= document.getElementById('answersix').value;
  input6 == input6.tolowercase();
if(input6 == "arizona"){
    console.log('right 6');
}else{ 
    console.log('wrong 6');
    results--;
}

  let input7= document.getElementById('answerseven').value;
  input7 == input7.tolowercase();
if(input7== "mount everest"){
    console.log('right 7');
}else{ 
    console.log('wrong 7');
    results--;
}
document.getElementById("submitbtn").innerHTML = submit;
let percent= (results/7) * 100
document.getElementById('pecent').innerHTML = percent;
}
