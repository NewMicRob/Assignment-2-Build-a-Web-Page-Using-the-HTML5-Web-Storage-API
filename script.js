// Makes the constants and gets them by the Id
const userInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Sets up the listeners for when the buttons are clicked and loads the stored name.
document.addEventListener('DOMContentLoaded', storedName);
saveButton.addEventListener('click', saveName); 
clearButton.addEventListener('click', clearName);

/* Function for the save button, when pressed it stores the username that 
was input for later use and displays it in the <p>  alerts the user that 
the input was saved*/
function saveName() {
    localStorage.setItem('username', userInput.value);
    if(userInput) {
        displayName.innerHTML = `${userInput.value}`;
        //alert('Username has been saved');
    }
}

// Function to get the stored name from the storage and keep username on refresh
function storedName() {
    const storedInput = localStorage.getItem('username');
    if (storedInput) {
        userInput.value = storedInput;
        displayName.innerHTML = `${storedInput}`;
    }
}

/* Function for clear button when pressed it will remove the text from the 
input box as well as delete the input from the storage, alerts the user that 
the input username was deleted*/
function clearName() {
    localStorage.removeItem('username');
    userInput.value = '';
    //alert('User name has been deleted');
    if (clearName) {
        displayName.innerHTML = '';
    }
}