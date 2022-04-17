/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

// Step 1 - Create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.background = bgColor;
    output.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}
// Step 2 - Random Color Geanerator Function

function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//Step 3 - Collect all necessary references

//Step 4 - Handle The click event
