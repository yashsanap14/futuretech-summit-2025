// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Step 3: Register a 'click' event listener
themeButton.addEventListener('click', toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById('rsvp-button');
let count = 3;

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    let nameInput = document.getElementById('name');
    let stateInput = document.getElementById('home-state');
    
    let name = nameInput.value;
    let state = stateInput.value;
    
    let newParticipant = document.createElement('p');
    newParticipant.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;
    
    let participantsDiv = document.querySelector('.rsvp-participants');
    participantsDiv.appendChild(newParticipant);
    
    // Update the count
    let countElement = document.getElementById('rsvp-count');
    countElement.remove();
    
    count = count + 1;
    
    let newCountElement = document.createElement('p');
    newCountElement.id = 'rsvp-count';
    newCountElement.textContent = `⭐ ${count} people have RSVP'd to this event!`;
    
    participantsDiv.appendChild(newCountElement);
    
    // Clear the form
    nameInput.value = '';
    stateInput.value = '';
    document.getElementById('email').value = '';

    event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here
rsvpButton.addEventListener('click', addParticipant);