'use strict';

//Creating Tracker variables
var clickCount = 0;

//Arrays of card elements
let imageList = ['./assets/img1.jpg','./assets/img2.png','./assets/img3.jpg','./assets/img4.jpg','./assets/img5.png','./assets/img6.jpg','./assets/img7.jpg','./assets/img8.png'];
let alt = ['Alt 1', 'Alt 2', 'Alt 3', 'Alt 4', 'Alt 5','Alt 6', 'Alt 7', 'Alt 8'];
let descriptions = ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5', 'Description 6', 'Description 7', 'Description 8'];
let names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 6','Name 7', 'Name 8'];

//creating card array
let cards = [];

//Card consructor function
function Card(image,productName,productDesctription,alt){
    this.image = image;
    this.productName = productName;
    this.productDesctription = productDesctription;
    this.alt = alt;
}

//Card render function
Card.prototype.render = function (i) {
        let cardDiv = document.querySelector(`#card${i}`);

        let cardImg = document.createElement('img');
        let cardName = document.createElement('h2');
        let cardDesc = document.createElement('p');

        cardImg.setAttribute('src', this.image);
        cardImg.setAttribute('alt', this.alt);

        cardName.textContent = this.productName;
        cardDesc.textContent = this.productDesctription;

        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardDesc);
}


//Random number function to pick random card to display
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

//Creating Cards
//TODO
//Consolodate cration into push to array
let prod0 = new Card(imageList[0],names[0],descriptions[0],alt[0]);
let prod1 = new Card(imageList[1],names[1],descriptions[1],alt[1]);
let prod2 = new Card(imageList[2],names[2],descriptions[2],alt[2]);
let prod3 = new Card(imageList[3],names[3],descriptions[3],alt[3]);
let prod4 = new Card(imageList[4],names[4],descriptions[4],alt[4]);
let prod5 = new Card(imageList[5],names[5],descriptions[5],alt[4]);
let prod6 = new Card(imageList[6],names[6],descriptions[6],alt[4]);
let prod7 = new Card(imageList[7],names[7],descriptions[7],alt[4]);


//Pushing cards to card array
cards.push(prod0,prod1,prod2,prod3,prod4,prod5,prod6,prod7);

function itemNumber(){
    
}

//Initial render (random)
function rendCards(){

    let card1 = randomNumber(0, (cards.length-1));
    let card2 = randomNumber(0, (cards.length-1));
    let card3 = randomNumber(0, (cards.length-1));

    while (card1 == card2 || card1 == card3 || card2 == card3){
        card1 = randomNumber(0, (cards.length-1));
        card2 = randomNumber(0, (cards.length-1));
        card3 = randomNumber(0, (cards.length-1));
    }

    cards[card1].render(1);
    cards[card2].render(2);
    cards[card3].render(3);
}

rendCards();

//Creating event listeners for click
let cardButton1 = document.querySelector('#card1');
let cardButton2 = document.querySelector('#card2');
let cardButton3 = document.querySelector('#card3');

cardButton1.addEventListener('click', renderCard);
cardButton2.addEventListener('click', renderCard);
cardButton3.addEventListener('click', renderCard);

//Universal function
function renderCard(){
    if (clickCount < 25){


    for (let i = 1; i<4; i++){
        let cardReplace = document.querySelector(`#card${i}`);
        cardReplace.innerHTML = '';}
        
        let card1 = randomNumber(0, (cards.length-1));
        let card2 = randomNumber(0, (cards.length-1));
        let card3 = randomNumber(0, (cards.length-1));
    
        while (card1 == card2 || card1 == card3 || card2 == card3){
            card1 = randomNumber(0, (cards.length-1));
            card2 = randomNumber(0, (cards.length-1));
            card3 = randomNumber(0, (cards.length-1));
        }
    
        cards[card1].render(1);
        cards[card2].render(2);
        cards[card3].render(3);

        clickCount++;
        console.log(clickCount);
    }

    else {
        let mainContent = document.querySelector('.deck');

        mainContent.innerHTML = '';

        let content = document.createElement('h2');
        
        content.textContent = 'Test';

        mainContent.appendChild(content);
        }

    }