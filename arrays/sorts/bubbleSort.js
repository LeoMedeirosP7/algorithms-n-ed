async function bubbleSort() {
  let isSorted = false;
  let isArrayChanged = false;

  let currentArray = document.getElementsByClassName('currentArrayValue')[0];

  const arrayValues = Array.from(currentArray.innerText.split(' '));

  // execute
  while(!isSorted) {
    isArrayChanged = false;

    if (arrayValues.length <= 1) {
      isSorted = true;
      continue;
    }

    for (let index = 0; index < arrayValues.length - 1; index += 1) {
      // bold-highlight used values
      currentArray.innerHTML = '';
      arrayValues.forEach((item, i) => {
        if (i === index) {
          currentArray.innerHTML = `${currentArray.innerHTML} <div class="bold-highlight">&nbsp${item}&nbsp</div>`;
          return;
        }

        if (index + 1 === i) {
          currentArray.innerHTML = `${currentArray.innerHTML} <div class="bold-highlight">&nbsp${item}&nbsp</div>`;
          return;
        }

        currentArray.innerHTML = `${currentArray.innerHTML} ${item}`;
      });

      // iterate
      await new Promise((resolve) => {
        setTimeout(() => {
          if (Number(arrayValues[index]) > Number(arrayValues[index + 1])) {
            let aux = arrayValues[index];
    
            arrayValues[index] = arrayValues[index + 1];
    
            arrayValues[index + 1] = aux;
    
            isArrayChanged = true;
          }
          currentArray.innerHTML = arrayValues.toString().replaceAll(',', ' ');
          resolve();
        }, 1000);
      });
    }

    if (!isArrayChanged) {
      isSorted = true;
    }
  }
}
