//вставляем нумерование строк в code-panel

class LineNumbers {
  lineNumberBlock: NodeListOf<HTMLDivElement> = document.querySelectorAll('.line-number');
  
  defineLinesQuantity() : number {
    const lineNumberHeight: number = this.lineNumberBlock[0].clientHeight-20;
    return Math.floor(lineNumberHeight / 16);
  }

  insertLineNumbers(blockPart : 0|1) : void {
    let lineNumber  = 1;
    let htmlToInsert  = '';
    const linesQuantity : number = this.defineLinesQuantity()
    while (lineNumber <= linesQuantity ) {
      htmlToInsert = `${htmlToInsert}${lineNumber}<br>`;
      lineNumber+=1;
    }
   
    this.lineNumberBlock[blockPart].innerHTML = htmlToInsert;
  }
}

export default LineNumbers;