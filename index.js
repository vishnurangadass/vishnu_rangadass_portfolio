//Typing feature
const sentences = [
  "a Frontend Developer",
  "a UI Developer",
  "a ReactJS Developer"
];

// Variables for typing effect
let currentSentence = 0;
let currentChar = 0;
let isDeleting = false;

const textElement = document.getElementById("text");

// Typing effect logic
function type() {
  const sentence = sentences[currentSentence];

  // Add or remove characters
  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  // Update the text content
  textElement.textContent ="I am Vishnu Rangadass, " + sentence.substring(0, currentChar);

  // Adjust speed based on typing or deleting
  let typingSpeed = isDeleting ? 100 : 150;

  // Check if the sentence is fully typed or deleted
  if (!isDeleting && currentChar === sentence.length) {
    typingSpeed = 1000; // Pause before deleting
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentSentence = (currentSentence + 1) % sentences.length; // Move to next sentence
    typingSpeed = 500; // Pause before typing the next sentence
  }

  // Call the type function recursively
  setTimeout(type, typingSpeed);
}

// Start the typing effect
type();

const greeting = document.getElementById('greeting');
const greetMsg ="Hi there, ";
const currentTime = new Date().getHours();
  if (currentTime >= 0 && currentTime < 12) {
    greeting.textContent= greetMsg + "Good Morning!";
  } else if (currentTime >= 12 && currentTime < 16) {
    greeting.textContent=greetMsg + "Good Afternoon!";
  } else {
    greeting.textContent=greetMsg + "Good Evening!";
  }
  document.getElementById("year").textContent = new Date().getFullYear();


