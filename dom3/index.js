function updateStatus(response) {
    // Get the element by its ID
    const statusElement = document.getElementById('status');
    
    // Check the response and update the background color accordingly
    if (response === 'failed') {
        statusElement.style.backgroundColor = 'red';
        statusElement.textContent = 'Status: Failed';
    } else if (response === 'successful') {
        statusElement.style.backgroundColor = 'green';
        statusElement.textContent = 'Status: Successful';
    } else {
        statusElement.style.backgroundColor = ''; // Reset background color
        statusElement.textContent = 'Status: Not Updated';
    }
}
