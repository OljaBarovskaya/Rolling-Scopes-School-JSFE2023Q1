class Listeners {
  
  setBurgerMenuListener() : void{
    const burgerMenu = document.querySelector('.burger-menu') as HTMLDivElement;
    const sideMenu = document.querySelector('.side-menu') as HTMLDivElement;
    const html : HTMLElement = document.documentElement;

    burgerMenu.addEventListener('click', ()=>{
      sideMenu.style.display = "block";
      html.style.overflow = 'hidden';
      function setDelay (): void {
        sideMenu.classList.remove('side-menu_right');
      }
    setTimeout(setDelay, 300);
    
    })
    const closeButton = document.querySelector('.close-button') as HTMLImageElement;
    closeButton.addEventListener('click',()=>{
      sideMenu.classList.add('side-menu_right');
      function setDelay () : void {
        sideMenu.style.display = "none";
        html.style.overflow = 'auto';
      }
      setTimeout(setDelay, 300);
    })

  }    
  
  // function(){
  //   получить текущий уровень
  //   установить слушатель
  // }

  // setHelpListener(currentLevel:number){
  //   const helpButton = document.querySelector('.button-help') as HTMLButtonElement;

  //   const showHint = function(){
  //     helpButton.insertAdjacentHTML('afterend', tasksData[currentLevel-1].helpContent);
  //     helpButton.remove();

      //при изменении уровня убираем слушателя с кнопки help
      // const arrows = document.querySelectorAll('.pagination');
      // arrows[0].addEventListener('click', () => {
      //   helpButton.removeEventListener('click', showHint);
      // } );
      // arrows[1].addEventListener('click', () => {
      //   helpButton.removeEventListener('click', showHint);
      // });
      // const levelsList = document.querySelectorAll('.levels-list__item');
      // levelsList.forEach((item, index) => 
      // levelsList[index].addEventListener('click', () => {
      //   helpButton.removeEventListener('click', showHint);
      // })
      // )
      // arrows[0].addEventListener('click', () => {
      //   helpButton.removeEventListener('click', showHint);
      // } );

  //   }
  //   helpButton.addEventListener('click', showHint);
  // }

}

export default Listeners;