let burgerMenu = document.querySelector('.burger-menu');
let html = document.documentElement;
let navMenu = document.querySelector('.nav-menu')

let body = document.body;

//создаёт див для затемнения 
let divForBackground = document.createElement('div');
divForBackground.className = "transparent-background";
function createDarkBackground (){
    body.prepend(divForBackground);
}

let linksNavigation = document.querySelectorAll(".navigation-link");

function toggleNavMenu() {
    if (!burgerMenu.classList.contains('burger-menu-vertical')) {
        navMenu.style.display = 'flex';
        navMenu.classList.add('nav-menu-side');

        function activateNavMenu (){
            navMenu.classList.add('nav-menu-active');
        } 

        setTimeout(activateNavMenu,200)
      
        html.style.overflow = 'hidden';
        
        burgerMenu.classList.add("burger-menu-vertical");

        createDarkBackground ();
    } else {
        navMenu.classList.remove('nav-menu-active');
        function disactivateNavMenu (){
            navMenu.style.display = 'none';
        } 
        setTimeout(disactivateNavMenu,1000);      
        navMenu.classList.add('nav-menu-side');
        html.style.overflow = 'visible';

        burgerMenu.classList.remove("burger-menu-vertical");

        divForBackground.remove();
    }    
}

burgerMenu.addEventListener('click', toggleNavMenu);
divForBackground.addEventListener('click', toggleNavMenu);
linksNavigation[0].addEventListener('click', toggleNavMenu);
linksNavigation[1].addEventListener('click', toggleNavMenu);
linksNavigation[2].addEventListener('click', toggleNavMenu);
linksNavigation[3].addEventListener('click', toggleNavMenu);

// поп-ап
let cardKatrine = document.querySelector('.Katrine');
let cardJennifer = document.querySelector('.Jennifer');
let cardWoody = document.querySelector('.Woody');
let cardSophia = document.querySelector('.Sophia');
let cardTimmy = document.querySelector('.Timmy');
let cardCharly = document.querySelector('.Charly');
let cardScarlett = document.querySelector('.Scarlett');
let cardFreddie = document.querySelector('.Freddie');

function renewSelectors(){
cardKatrine = document.querySelector('.Katrine');
cardJennifer = document.querySelector('.Jennifer');
cardWoody = document.querySelector('.Woody');
cardSophia = document.querySelector('.Sophia');
cardTimmy = document.querySelector('.Timmy');
cardCharly = document.querySelector('.Charly');
cardScarlett = document.querySelector('.Scarlett');
cardFreddie = document.querySelector('.Freddie');
}

async function insertPetsDescription() {  
    const petsDescription = 'data.json';
    const res = await fetch(petsDescription);
    const data = await res.json(); 
    let obj=data[neededCard];
    console.log(data[neededCard]);
    document.body.insertAdjacentHTML('afterbegin', `<div class="container-for-modal">
    <div class="close-button">
    <img src="../../assets/img/Vector.svg" alt="close button">
    </div>
    </div>
    <div class="modal-window">
    <img class="modal-image" src=${obj.img} alt="modul-pet">
    <div class="modal-pet-description">
        <div class="modal-main-information">
            <h3 class="modal-heading">${obj.name}</h3>
            <h4 class="modal-pet">${obj.type} - ${obj.breed}</h4>
        </div>
        <p class="modal-text-description">${obj.description}</p>
        <ul class="modal-list">
            <li class="age"><span><strong>Age:</strong> ${obj.age}</span></li>
            <li class="inoculations"><span><strong>Inoculations:</strong> ${obj.inoculations}</span></li>
            <li class="diseases"><span><strong>Diseases:</strong> ${obj.diseases}</span></li>
            <li class="parasites"><span><strong>Parasites:</strong>${obj.parasites}</span></li>
        </ul>
    </div>
</div>`);
let containerModal = document.querySelector('.container-for-modal');
containerModal.addEventListener('click', hideModal);
}

function chooseCard(y){
    neededCard=y-1;
}
    

function showModal1(){
  createDarkBackground();
  chooseCard(1);
  insertPetsDescription();
  html.style.overflow = 'hidden';
}

function showModal2(){
    createDarkBackground();
    chooseCard(2);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}

function showModal3(){
    createDarkBackground();
    chooseCard(3);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}

function showModal4(){
    createDarkBackground();
    chooseCard(4);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}

function showModal5(){
    createDarkBackground();
    chooseCard(5);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}

function showModal6(){
    createDarkBackground();
    chooseCard(6);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}

function showModal7(){
    createDarkBackground();
    chooseCard(7);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}

function showModal8(){
    createDarkBackground();
    chooseCard(8);
    insertPetsDescription();
    html.style.overflow = 'hidden';
}




function hideModal(){
    let containerModal = document.querySelector('.container-for-modal');
    let modalWindow = document.querySelector('.modal-window');
    divForBackground.remove();
    containerModal.remove();
    modalWindow.remove();
    html.style.overflow = 'visible';
}


function createPetcardListeners(){
    if(cardKatrine){cardKatrine.addEventListener('click', showModal1)}
    if(cardJennifer){cardJennifer.addEventListener('click', showModal2)}
    if(cardWoody){cardWoody.addEventListener('click', showModal3)}
    if(cardSophia){cardSophia.addEventListener('click', showModal4)}
    if(cardTimmy){cardTimmy.addEventListener('click', showModal5)}
    if(cardCharly){cardCharly.addEventListener('click', showModal6) }
    if(cardScarlett){cardScarlett.addEventListener('click', showModal7)}
    if(cardFreddie){cardFreddie.addEventListener('click', showModal8)}
    divForBackground.addEventListener('click', hideModal)
    }
    
    function removePetcardListeners(){
        if(cardKatrine){cardKatrine.removeEventListener('click', showModal1)}
        if(cardJennifer){cardJennifer.removeEventListener('click', showModal2)}
        if(cardWoody){cardWoody.removeEventListener('click', showModal3)}
        if(cardSophia){cardSophia.removeEventListener('click', showModal4)}
        if(cardTimmy){cardTimmy.removeEventListener('click', showModal5)}
        if(cardCharly){cardCharly.removeEventListener('click', showModal6) }
        if(cardScarlett){cardScarlett.removeEventListener('click', showModal7)}
        if(cardFreddie){cardFreddie.removeEventListener('click', showModal8)}
        divForBackground.removeEventListener('click', hideModal)
        }

createPetcardListeners()



//пагинация

let petArr = [0, 1, 2, 3, 4, 5, 6, 7]
let randomPetArr8=[];

petArr.sort(()=>Math.random()-0.5);
let firstSubArr = [petArr[0],petArr[1], petArr[2]];
let secondSubArr = [petArr[3],petArr[4], petArr[5]];
let thirdSubArr = [petArr[6],petArr[7]];

randomPetArr8[0]=[0, 1, 2, 3, 4, 5, 6, 7];
randomPetArr8[1]=petArr;
randomPetArr8[2]=[firstSubArr,secondSubArr,thirdSubArr];
randomPetArr8[3]=[firstSubArr.slice(),secondSubArr.slice(),thirdSubArr];
randomPetArr8[4]=[firstSubArr.slice(),secondSubArr.slice(),thirdSubArr];
randomPetArr8[5]=[firstSubArr.slice(),secondSubArr.slice(),thirdSubArr];

for (let i=2; i<6; i++){
    for (j=0; j<3; j++){
        randomPetArr8[i][j].sort(()=>Math.random()-0.5);
    }
}

for (let i=2; i<6; i++){
    randomPetArr8[i]=randomPetArr8[i][0].concat(randomPetArr8[i][1],randomPetArr8[i][2]);
}

let fullPetArr=randomPetArr8[0].concat(randomPetArr8[1],randomPetArr8[2],randomPetArr8[3],randomPetArr8[4],randomPetArr8[5]);


let randomPetArr6 = [];
function formArr6 (){
    let arrElementNumber=0;
    for(let i=0;i<8;i++){
        randomPetArr6[i]=[];
    for(let j=0;j<6;j++){
randomPetArr6[i][j] = fullPetArr[arrElementNumber];
arrElementNumber++;
    }
}

}
formArr6();

let randomPetArr3 = [];
function formArr3 (){
    let arrElementNumber=0;
    for(let i=0;i<16;i++){
        randomPetArr3[i]=[];
    for(let j=0;j<3;j++){
randomPetArr3[i][j] = fullPetArr[arrElementNumber];
arrElementNumber++;
    }
}
}
formArr3();

console.log(randomPetArr3);



let nextPageButton = document.querySelector(".icon-show-next-page");
let lastPageButton=document.querySelector(".icon-show-last-page");
let previousPageButton=document.querySelector(".icon-show-previous-page");
let firstPageButton=document.querySelector(".icon-show-first-page");
let pageNumber=1;
let pagesAmount;

function determinePagesAmount (){
    if(window.innerWidth<=730){pagesAmount=16} else {
        if (window.innerWidth<= 1160){pagesAmount=8} else
        pagesAmount=6;
    }
}


//функции активации/декактивации кнопок
function makeButtonDisabled(buttonName){
    if(buttonName === nextPageButton){
        buttonName.removeEventListener('click', nextPage);
    }
    if(buttonName === lastPageButton){
        buttonName.removeEventListener('click', lastPage);
    }
    if(buttonName === previousPageButton){
        buttonName.removeEventListener('click', previousPage);
    }
    if(buttonName === firstPageButton){
        buttonName.removeEventListener('click', firstPage);
    }
    buttonName.classList.add('icon-button-inactive');
    buttonName.classList.remove('icon-button-active');
    buttonName.firstElementChild.setAttribute('disabled','');
}

function makeButtonActive(buttonName){
    if(buttonName === nextPageButton){
        buttonName.addEventListener('click', nextPage);
    }
    if(buttonName === lastPageButton){
        buttonName.addEventListener('click', lastPage);
    }
    if(buttonName === previousPageButton){
        buttonName.addEventListener('click', previousPage);
    }
    if(buttonName === firstPageButton){
        buttonName.addEventListener('click', firstPage);
    }
    buttonName.classList.remove('icon-button-inactive');
    buttonName.classList.add('icon-button-active');
    buttonName.firstElementChild.removeAttribute('disabled','');
}

// функции, срабатывающие на событиях переключения кнопок
function nextPage (){
    determinePagesAmount ();
    if (pageNumber===1){
    makeButtonActive(previousPageButton);
    makeButtonActive(firstPageButton);
    }

    if(pageNumber===(pagesAmount-1)){
        makeButtonDisabled(nextPageButton);
        makeButtonDisabled(lastPageButton);
    }
        pageNumber++;
        removePetcardListeners();
        changePage ();
}

function lastPage (){
    determinePagesAmount ();
    if (pageNumber===1){
        makeButtonActive(previousPageButton);
        makeButtonActive(firstPageButton);
        }
        pageNumber=pagesAmount;
        removePetcardListeners();
        changePage ();
        makeButtonDisabled(nextPageButton);
        makeButtonDisabled(lastPageButton);
}

function previousPage (){
    determinePagesAmount ();
    if (pageNumber===pagesAmount){
    makeButtonActive(nextPageButton);
    makeButtonActive(lastPageButton);
    }
    if(pageNumber===2){
        makeButtonDisabled(previousPageButton);
        makeButtonDisabled(firstPageButton);
    }
    pageNumber--;
    removePetcardListeners();
    changePage ();
}

function firstPage (){
    determinePagesAmount ();
    if (pageNumber===pagesAmount){
        makeButtonActive(nextPageButton);
        makeButtonActive(lastPageButton);
        }
    pageNumber=1;
    removePetcardListeners();
    changePage ();
    makeButtonDisabled(previousPageButton);
    makeButtonDisabled(firstPageButton);
}

//функция изменения карточек на странице
async function changePage (){  
    const petsDescription = 'data.json';
    const res = await fetch(petsDescription);
    const data = await res.json(); 
    
 let card=document.querySelectorAll('.card');
 let pageNumberButton=document.querySelector('.page-number-button');
 pageNumberButton.textContent=`${pageNumber}`;
 if(window.innerWidth<=730){
    for (let i=0; i<3; i++){
        let petImg=card[i].children[0];
        petImg.setAttribute('src', `${data[randomPetArr3[pageNumber-1][i]].img}`);
        let petP=card[i].children[1];
        petP.textContent=`${data[randomPetArr3[pageNumber-1][i]].name}`;
        card[i].className=(`card card-${i+1} ${data[randomPetArr3[pageNumber-1][i]].name}`);
     }
     } else {
        if(window.innerWidth<= 1160 ){
            for (let i=0; i<6; i++){
                let petImg=card[i].children[0];
                petImg.setAttribute('src', `${data[randomPetArr6[pageNumber-1][i]].img}`);
                let petP=card[i].children[1];
                petP.textContent=`${data[randomPetArr6[pageNumber-1][i]].name}`;
                card[i].className=(`card card-${i+1} ${data[randomPetArr6[pageNumber-1][i]].name}`);
         }
        } else {
        for (let i=0; i<8; i++){
            let petImg=card[i].children[0];
            petImg.setAttribute('src', `${data[randomPetArr8[pageNumber-1][i]].img}`);
            let petP=card[i].children[1];
            petP.textContent=`${data[randomPetArr8[pageNumber-1][i]].name}`;
            card[i].className=(`card card-${i+1} ${data[randomPetArr8[pageNumber-1][i]].name}`);
         }
     }
}
renewSelectors();
createPetcardListeners();
}
console.log(window.innerWidth)

nextPageButton.addEventListener('click', nextPage);
lastPageButton.addEventListener('click', lastPage);










