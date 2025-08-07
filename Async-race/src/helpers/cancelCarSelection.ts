import clearUpdateInput from './clearUpdateInput';

export default function cancelCarSelection(): void {
  clearUpdateInput();

  const carUpdateButton = document.querySelector('.button-update-car') as HTMLButtonElement;
  carUpdateButton.className = 'button-update-car';
}
