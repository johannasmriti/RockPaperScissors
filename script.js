//Age in Days
function ageInDays(){
    var birthYear = prompt('What year where you born?!');
    var ageInD = (2020-birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInD+" days old.");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Rock, Paper, Scissors
function rpsGame(choice){
    var humanChoice,botChoice;
    //console.log(choice);
    humanChoice=choice;
    //console.log('Your choice : '+humanChoice);
    botChoice=numToChoice(randomrpsInt());
    //console.log('Bot choice : '+botChoice);
    result=decideWinner(humanChoice,botChoice); //[0,1],[1,0],[0.5],[0.5]
    //console.log('Result : '+result);
    message = finalMessage(result); //says if you won or lost or tied
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
    console.log(message['color']);
}

function randomrpsInt(){
    return Math.floor(Math.random() * 3);
}

function numToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice,botChoice){
    var dataBase = {
        'rock': {'scissors': 1,'rock': 0.5,'paper':0},
        'scissors': {'scissors': 0.5,'rock': 0,'paper':1},
        'paper': {'scissors': 0,'rock': 1,'paper':0.5},
    }
    var yourScore = dataBase[humanChoice][botChoice];
    var compScore = dataBase[botChoice][humanChoice];
    return [yourScore,compScore];
}

function finalMessage([yourScore,compScore]){
    if(yourScore==0){
        return{'fmessage': 'You Lost :(','color':'red'};
    }
    else if(yourScore==1){
        return{'fmessage': 'You Won :)','color':'green'};
    }
    else{
        return{'fmessage': 'Issa Tie!','color':'yellow'};
    }
}
function rpsFrontEnd(humanChoice,botChoice,message){
    var imgData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //imgData('rock');
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML="<img src='" +imgData[humanChoice]+"' height= 150 width=150 style='box-shadow: 0px 10px 50px rgb(0,0,0,0.7);'>";
    messageDiv.innerHTML="<h1 style='color: " + message['color'] + "; font-size:60px; padding:30px; '>"+message['fmessage'] + "</h1>";
    botDiv.innerHTML="<img src='" +imgData[botChoice]+"' height= 150 width=150 style='box-shadow: 0px 10px 50px rgb(0,0,0,0.7);'>";

    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);
}