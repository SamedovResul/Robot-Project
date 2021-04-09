const text = document.querySelectorAll('.text')
const question = document.querySelector('.question')
const questionArray = ['Bunlardan hansı robot növüdür?']
question.innerHTML = questionArray
const answerArray = {
    One:[ 'Cərrah robot', 'Gülən robot','Ayı robot' ,'Kol robot'],
    Two:[ 'Ovçu robot', 'İnsanabənzər robot','Dovşan robot' ,'Milçəkqapan robot'],
    Three:[ 'Balıqçı robot', 'Tülkü robot ', 'Bələdçi robot' ,'Ağac robot'],
}


const questions =   Math.floor(Math.random() * 3);
console.log()
let answer = 0
let trueAnswer;
for (let i = 0; i < text.length; i++) {
    console.log(text[i])
    if(0 == questions){
        text[0].innerHTML = answerArray.One[0]
        text[1].innerHTML = answerArray.One[1]
        text[2].innerHTML = answerArray.One[2]
        text[3].innerHTML = answerArray.One[3]
        trueAnswer = "Cərrah robot" 
    }else if(1 == questions){
        text[0].innerHTML = answerArray.Two[0]
        text[1].innerHTML = answerArray.Two[1]
        text[2].innerHTML = answerArray.Two[2]
        text[3].innerHTML = answerArray.Two[3]
        trueAnswer = "İnsanabənzər robot" 
    }else if(2 == questions){
        text[0].innerHTML = answerArray.Three[0]
        text[1].innerHTML = answerArray.Three[1]
        text[2].innerHTML = answerArray.Three[2]
        text[3].innerHTML = answerArray.Three[3]
        trueAnswer = "Bələdçi robot"
    }
}
let value;
trueAnswercss = 
$(document).ready(function () {
    $(".quiz-option").click(function () {
        $(".quiz-option").css('border', 'none')
        value = $(this).children("label").text()
        trueAnswercss = $(this)
        $(this).css("border", '1px solid black')
        console.log(value);
    });
    $(".click").click(function(){
        if (value == trueAnswer) {
            console.log(true)
            $(".click").fadeOut(0.1)
            $(".warning").fadeOut(0.1);
            $(".gamelink").fadeIn(1000);
            trueAnswercss.css("background-color", "green")
            console.log(trueAnswer)
        } else {
            $(".gamelink").fadeOut();
            $(".warning").fadeIn();
        }
    })
});