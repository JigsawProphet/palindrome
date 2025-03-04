const checkButton = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");
const textInput = document.getElementById("text-input");

const emptyText = () => {
  const providedText = textInput.value;
  if (providedText === "") {
    alert("Please input a value")
  } else{
  }
}

const checkText = () => {
  const providedText = textInput.value;
  const cleanText = providedText.replace(/[^a-zA-Z0-9]/g,"");
  const caseText = cleanText.toLowerCase();
  const textArray = [...caseText];
  const reverseArray = [...caseText].reverse();
  if (textArray.length !== reverseArray.length) return false;
  else {
    // Comparing each element of your array
    for (var i = 0; i < textArray.length; i++) {
      if (textArray[i] !== reverseArray[i]) {
        return false;
      }
    }
    return true;
  }
  
}

const resultMsg = () => {
  if(checkText()) {
    resultDisplay.innerText = `${textInput.value} is a palindrome`;
    resultDisplay.style.display = "block";
  } else {
    resultDisplay.innerText = `${textInput.value} is not a palindrome`;
    resultDisplay.style.display = "block";
  }
}

checkButton.addEventListener("click",emptyText);
checkButton.addEventListener("click",checkText);
checkButton.addEventListener("click", resultMsg);
 //compare string method?
