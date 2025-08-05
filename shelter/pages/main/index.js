// burger-menu
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
        html.style.overflow = 'scroll';

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
let neededCard;

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
    console.log(petsDescription);
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
    html.style.overflow = 'scroll';
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



// слайдер
let arrCurrent=[];
let arrNext=[3,4,5];
let arrPrevious=[6,7,0];
let arrExtra=[]

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function determineArrCurrent(){
    let a = Math.floor(getRandomNumber(0, 8));
    let b;
    function chooseB(){
         b = Math.floor(getRandomNumber(0, 8));
    if (b !== a){return b} else chooseB();}
    chooseB();
    function chooseD(){
        d = Math.floor(getRandomNumber(0, 8));
   if ((d !== a) && (d !== b)){return d} else chooseD();}
   chooseD();

console.log(a);
console.log(b);
console.log(d);
    if(window.innerWidth<=730){
     arrCurrent[0]=a;   
    } else {
        if(window.innerWidth<=1160){
            arrCurrent[0]=a; 
            arrCurrent[1]=b;  
           } else {
            arrCurrent[0]=a; 
            arrCurrent[1]=b; 
            arrCurrent[2]=d;
           }
    }
    console.log(arrCurrent)    
}
determineArrCurrent();

let sliderButton = document.querySelectorAll('.icon-button-aside');
let sliderLeft=sliderButton[0];
let sliderRight=sliderButton[1];

async function moveRight(){  
    removePetcardListeners();
        const petsDescription = 'data.json';
        const res = await fetch(petsDescription);
        const data = await res.json(); 
      console.log(arrCurrent);

     let card=document.querySelectorAll('.card');
     
     //if(window.innerWidth<=730){
        // for (let i=0; i<3; i++){
        //     let petImg=card[i].children[0];
        //     petImg.setAttribute('src', `${data[randomPetArr3[pageNumber-1][i]].img}`);
        //     let petP=card[i].children[1];
        //     petP.textContent=`${data[randomPetArr3[pageNumber-1][i]].name}`;
        //  }
        //  } else {
        //     if(window.innerWidth<= 1160 ){
        //         for (let i=0; i<6; i++){
        //             let petImg=card[i].children[0];
        //             petImg.setAttribute('src', `${data[randomPetArr6[pageNumber-1][i]].img}`);
        //             let petP=card[i].children[1];
        //             petP.textContent=`${data[randomPetArr6[pageNumber-1][i]].name}`;
        //      }
        //     } else {
            for (let i=0; i<3; i++){
                let petImg=card[i].children[0];
                petImg.setAttribute('src', `${data[arrNext[i]].img}`);
                let petP=card[i].children[1];
                petP.textContent=`${data[arrNext[i]].name}`;
                card[i].className=(`card card-${i+1} ${data[arrNext[i]].name}`);
             }
    arrExtra=arrCurrent.slice();
    arrCurrent.splice(0,3);
    arrCurrent=arrNext.slice();
    arrNext.splice(0,3);
    arrNext=arrPrevious.slice();
    arrPrevious.splice(0,3);
    arrPrevious=arrExtra.slice();

        //  }
    
    //}
    renewSelectors();
createPetcardListeners();
}

async function moveLeft(){  
    removePetcardListeners();
    const petsDescription = 'data.json';
    const res = await fetch(petsDescription);
    const data = await res.json(); 
  console.log(arrCurrent);

 let card=document.querySelectorAll('.card');
 
 //if(window.innerWidth<=730){
    // for (let i=0; i<3; i++){
    //     let petImg=card[i].children[0];
    //     petImg.setAttribute('src', `${data[randomPetArr3[pageNumber-1][i]].img}`);
    //     let petP=card[i].children[1];
    //     petP.textContent=`${data[randomPetArr3[pageNumber-1][i]].name}`;
    //  }
    //  } else {
    //     if(window.innerWidth<= 1160 ){
    //         for (let i=0; i<6; i++){
    //             let petImg=card[i].children[0];
    //             petImg.setAttribute('src', `${data[randomPetArr6[pageNumber-1][i]].img}`);
    //             let petP=card[i].children[1];
    //             petP.textContent=`${data[randomPetArr6[pageNumber-1][i]].name}`;
    //      }
    //     } else {
        for (let i=0; i<3; i++){
            let petImg=card[i].children[0];
            petImg.setAttribute('src', `${data[arrPrevious[i]].img}`);
            let petP=card[i].children[1];
            petP.textContent=`${data[arrPrevious[i]].name}`;
            card[i].className=(`card card-${i+1} ${data[arrPrevious[i]].name}`);
         }
arrExtra=arrCurrent.slice();
arrCurrent.splice(0,3);
arrCurrent=arrPrevious.slice();
arrPrevious.splice(0,3);
arrPrevious=arrNext.slice();
arrNext.splice(0,3);
arrNext=arrExtra.slice();

    //  }

//}
renewSelectors();
createPetcardListeners();
}


sliderLeft.addEventListener('click', moveLeft)
sliderRight.addEventListener('click', moveRight)