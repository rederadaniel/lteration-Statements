document.addEventListener("DOMContentLoaded", () => {
  const inputContainer = document.getElementById("inputs");
  for (let i = 0; i < 10; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `num${i}`;
    input.placeholder = `#${i + 1}`;
    inputContainer.appendChild(input);
  }
});

function checkNumbers() {
  let sum = 0;
  let result = "";
  let allFilled = true;
  const errorElement = document.getElementById("error");
  const outputElement = document.getElementById("output");

  for (let i = 0; i < 10; i++) {
    const input = document.getElementById(`num${i}`);
    let num = input.value.trim();

    if (num === "" || isNaN(num)) {
      allFilled = false;
      continue;
    }

    num = parseInt(num);
    result += `${num} is ${num % 2 === 0 ? "Even" : "Odd"}\n`;
    sum += num;
  }

  if (!allFilled) {
    errorElement.textContent = "⚠️ Please fill all fields with valid numbers!";
    outputElement.style.display = "none";
    return;
  }

  errorElement.textContent = "";
  outputElement.textContent = `${result}\nTotal Sum: ${sum}`;
  outputElement.style.display = "block";
}
