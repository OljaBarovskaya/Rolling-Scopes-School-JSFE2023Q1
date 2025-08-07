export default function clearCreateInput(): void {
  const carNameInput = document.querySelector('.car-name-create-input') as HTMLInputElement;
  carNameInput.value = '';
  const carColorInput = document.querySelector('.color-create-input') as HTMLInputElement;
  carColorInput.value = '#0C3AC4';
}
