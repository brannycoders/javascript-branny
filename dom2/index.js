// Function to add a new item to the list
function addItem() {
    // Get the unordered list element by its ID
    const ul = document.getElementById('#myList');
    
    // Create a new list item element
    const li = document.createElement('li');
    
    // Set the text content for the new list item
    li.textContent = 'New Item';

    // Append the new list item to the unordered list
    ul.appendChild(li);
}

// Get the button element by its ID
const button = document.getElementById('#addButton');

// Add an event listener to the button to call addItem function when clicked
button.addEventListener('click', addItem);
