(function (global) {
  class BubbleSort extends window.BaseSorting {
    #highlight(args = {}) {
      const { index: currentIndex } = args;

      this.currentArray.innerHTML = '';
      this.arrayValues.forEach((item, i) => {
        if (i === currentIndex) {
          this.currentArray.innerHTML = `${this.currentArray.innerHTML} <div class="bold-highlight">&nbsp${item}&nbsp</div>`;
          return;
        }
  
        if (currentIndex + 1 === i) {
          this.currentArray.innerHTML = `${this.currentArray.innerHTML} <div class="bold-highlight">&nbsp${item}&nbsp</div>`;
          return;
        }
  
        this.currentArray.innerHTML = `${this.currentArray.innerHTML} ${item}`;
      });
    }
  
    #iterate(args = {}) {
      const { index: currentIndex } = args;
  
      return new Promise((resolve) => {
        setTimeout(() => {
          if (Number(this.arrayValues[currentIndex]) > Number(this.arrayValues[currentIndex + 1])) {
            let aux = this.arrayValues[currentIndex];
    
            this.arrayValues[currentIndex] = this.arrayValues[currentIndex + 1];
    
            this.arrayValues[currentIndex + 1] = aux;
    
            args.isArrayChanged = true;
          }
  
          this.currentArray.innerHTML = this.arrayValues.toString().replaceAll(',', ' ');
          resolve();
        }, 1000);
      });
    }
  
    async execute() {
      let isSorted = false;
      const args = {
        isArrayChanged: false,
        index: 0,
      }
    
      // execute
      while(!isSorted) {
        args.isArrayChanged = false;
    
        if (this.arrayValues.length <= 1) {
          isSorted = true;
          continue;
        }
    
        for (args.index = 0; args.index < this.arrayValues.length - 1; args.index += 1) {
          // bold-highlight used values
          this.#highlight(args);
    
          // iterate
          await this.#iterate(args);
        }

    
        if (!args.isArrayChanged) {
          isSorted = true;
        }
      }
    }
  }

  global.BubbleSort = BubbleSort;
})(window);
