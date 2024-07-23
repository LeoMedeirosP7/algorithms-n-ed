function addValue() {
  let currentArray = document.getElementsByClassName('currentArrayValue')[0];

  let currentArrayValue = document.getElementById('newValue').value;

  if (!currentArrayValue || !Number(currentArrayValue)) {
    alert("it's not a number")
  } else {
    currentArray.innerHTML = `${currentArray.innerText} ${currentArrayValue}`;
  }

  document.getElementById('newValue').value = '';
}
