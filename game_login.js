function adduser(){
    var player1name=document.getElementById("player1").value;
    var player2name=document.getElementById("player2").value;
      localStorage.setItem("player1",player1name);
      localStorage.setItem("player2",player2name);
      window.location="game_page.html";
}

function send(){
  number1=document.getElementById("number1").value;
  number2=document.getElementById("number2").value;
  actual_number=parseInt(number1)*parseInt(number2);
  question_number= "<h4>" + number1 + " X " + number2  + "</h4>";
  input_box="<br>Answer : <input type='text' id='input_check_box'>";
  check_button="<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
  row=question_number+input_box+check_button;
  document.getElementById("output").innerHTML=row;
  document.getElementById("number1").value="";
  document.getElementById("number2").value="";
}

function check(){}