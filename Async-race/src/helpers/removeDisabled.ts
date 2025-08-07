function removeDisabled(carContainer: HTMLElement | Document, buttons: string[]): void {
  buttons.forEach((item: string): void => {
    const button = carContainer.querySelector(`.${item}`) as HTMLButtonElement;
    button.removeAttribute('disabled');
  });
}

export default removeDisabled;
