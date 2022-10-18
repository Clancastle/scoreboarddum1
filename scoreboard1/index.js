let board1 = document.getElementById('board1')
let board2 = document.getElementById('board2')

let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')

let score1 = 0
let score2 = 0

let log = 'null'

function add1() {
    score1 += 1
    board1.innerText = score1

    if (score1 > score2){
        document.getElementById("name1").style.color = "lightblue";
        document.getElementById("name2").style.color = "whitesmoke";
    } else {
        document.getElementById('name1').style.color = 'whitesmoke';
        document.getElementById("name2").style.color = "lightblue";
    }
}

function add2(){
    score1 += 2
    board1.innerText = score1if (score1 > score2)

    if (score1 > score2){
        document.getElementById("name1").style.color = "lightblue";
        document.getElementById("name2").style.color = "whitesmoke";
    } else {
        document.getElementById('name1').style.color = 'whitesmoke';
        document.getElementById("name2").style.color = "lightblue";
    }
}

function add3(){
    score1 += 3
    board1.innerText = score1

    if (score1 > score2){
        document.getElementById("name1").style.color = "lightblue";
        document.getElementById("name2").style.color = "whitesmoke";
    } else {
        document.getElementById('name1').style.color = 'whitesmoke';
        document.getElementById("name2").style.color = "lightblue";
    }
}



function add1i(){
    score2 += 1
    board2.innerText = score2

    if (score2 > score1){
        document.getElementById("name2").style.color = "lightblue";
        document.getElementById("name1").style.color = "whitesmoke";
    } else {
        document.getElementById('name2').style.color = 'whitesmoke';
        document.getElementById("name1").style.color = "lightblue";
    }
}

function add2i(){
    score2 += 2
    board2.innerText = score2

    if (score2 > score1){
        document.getElementById("name2").style.color = "lightblue";
        document.getElementById("name1").style.color = "whitesmoke";
    } else {
        document.getElementById('name2').style.color = 'whitesmoke';
        document.getElementById("name1").style.color = "lightblue";
    }
}

function add3i(){
    score2 += 3
    board2.innerText = score2

    if (score2 > score1){
        document.getElementById("name2").style.color = "lightblue";
        document.getElementById("name1").style.color = "whitesmoke";
    } else {
        document.getElementById('name2').style.color = 'whitesmoke';
        document.getElementById("name1").style.color = "lightblue";
    }
}
console.log(score1)

let game = document.getElementById('nh')


function game1(){
    let countstr = ' ' + score1  + ':' + score2
    
    score1 = 0
    score2 = 0 
    board2.innerText = score2
    board1.innerText = score1

    document.getElementById('save').innerText +=  countstr + ';'

    document.getElementById("name1").style.color = "whitesmoke";
    document.getElementById("name2").style.color = "whitesmoke";
    game.innerText = 'RESET'
}


