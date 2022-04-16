/**
 * Project Requerments
 * Change The Color By Generating Random RGB Color By Clicking A Button
 */

// Step 1 - Create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.background = bgColor;
  });
}
// Step 2 - Random Color Geanerator Function

function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

//Step 3 - Collect all necessary references

//Step 4 - Handle The click event
