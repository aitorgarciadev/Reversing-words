function reverseWords() {
  const inputString = document.getElementById("inputString").value;
  const outputString = document.getElementById("outputString");

  const reversedWords = inputString.trim().split(/\s+/).reverse().join(" ");

  outputString.textContent = reversedWords;
}
