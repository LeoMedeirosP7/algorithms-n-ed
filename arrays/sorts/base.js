(
  function(global) {
    class BaseSorting {
      arrayValues = [];
      currentArray = [];
    
      constructor() {
        this.currentArray = document.getElementsByClassName('currentArrayValue')[0];
        this.arrayValues = document.getElementsByClassName('currentArrayValue')[0].innerText.split(' ');
      }
    
      #highlight(args = {}) {
        console.log('highlight method');
      }
    
      #iterate(args = {}) {
        console.log('iterate method: ', args);
      }
    
      execute() {}
    }

    global.BaseSorting = BaseSorting;
  }
)(window);