function Send(){
    number1 = document.getElementById("Word1").value;
    number2 = document.getElementById("Word2").value;
    answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br>Answer : <input type = 'text' id = 'input_check'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("player1_name").value = "";
    document.getElementById("player2_name").value = "";
}