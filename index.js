// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // 1) Remove the 'main#main' node
    const mainElement = document.getElementById("main");
    mainElement.remove();
  
    // 2) Create a new 'h1' element with the id 'victory'
    const newHeader = document.createElement("h1");
    newHeader.id = "victory";
  
    // 3) Set the 'newHeader' variable to point to the 'h1#victory' node
    const victoryHeader = document.getElementById("victory");
    const body = document.querySelector("body");
  
    // 4) Update the 'h1#victory' node with the desired text
    newHeader.textContent = "Doris is the champion";
  
    // Append the updated 'h1' to the body
    body.appendChild(newHeader);
  });
  