function sort(method = '') {
  const initSorting = {
    bubbleSort: () => new window.BubbleSort(),
  };

  
  if (!initSorting[method]) {
    return;
  }
  
  const sorter = initSorting[method]();

  sorter.execute();
}
