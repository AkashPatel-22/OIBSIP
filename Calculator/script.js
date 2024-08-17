function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function backspace() {
  let currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}

function squareRoot() {
  try {
    let value = eval(document.getElementById("display").value);
    if (value >= 0) {
      document.getElementById("display").value = Math.sqrt(value);
    } else {
      document.getElementById("display").value = "Error";
    }
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
