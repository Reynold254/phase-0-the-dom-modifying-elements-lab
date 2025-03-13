// Remove the existing <main> element
document.querySelector("main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its ID to "victory"
newHeader.id = "victory";

// Set its text content
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

// Append the new <h1> to the body
document.body.appendChild(newHeader);
