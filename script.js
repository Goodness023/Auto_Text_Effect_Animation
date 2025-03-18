// Select the span element where the career titles will be displayed
const textEl = document.getElementById("text");

// Array of different career options that will be animated
const careers = ["YouTuber", "Freelancer", "Web Developer", "Trainer"];

let careersIndex = 0; //Tracks the current career being displayed
let characterIndex = 0; //Tracks the number of characters displayed
let isDeleting = false; //Determined if text is being deleted

function updateText() {,
  // Get the current career text from the careers array using the current index
  const currentText = careers[careersIndex]; // Get the current career text

  // Update the displayed text by slicing characters
  textEl.innerHTML = currentText.slice(0, characterIndex);

  // If text is not being deleted, increase character count
  if (!isDeleting) {
    characterIndex++;
  } else {
    characterIndex--; //If deleting decrease character count
  }

  // When the text is fully typed out
  if (characterIndex === currentText.length + 1) {
    isDeleting = true; //Start deleting after a pause
    setTimeout(updateText, 1000); // Pause before deleting
    return;

    // When the text is fully deleted
  } else if (characterIndex === 0 && isDeleting) {
    isDeleting = false; //Switch back to typing
    careersIndex = (careersIndex + 1) % careers.length; // Loop careers
  }

  // Set delay: Faster when deleting, slower when typing
  setTimeout(updateText, isDeleting ? 100 : 200);
}

// Start the text animation when the script loads
updateText(); // Start animation
