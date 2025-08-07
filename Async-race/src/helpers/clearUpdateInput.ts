export default function clearUpdateInput(): void {
  const carNameUpdateInput = document.querySelector('.car-name-update-input') as HTMLInputElement;
  carNameUpdateInput.value = '';

  const carColorUpdateInput = document.querySelector('.color-update-input') as HTMLInputElement;
  carColorUpdateInput.value = '#0C3AC4';
}
