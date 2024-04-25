//your JS code here. If required.
    const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');
incrementButton.addEventListener('click', () => {
        // Get the current value of the counter
        const currentValue = parseInt(counterParagraph.textContent);
        
        // Display an alert with the current value
        alert('Current counter value: ' + currentValue);
        
        // Increment the counter value by 1
        const newValue = currentValue + 1;
        
        // Update the counter paragraph with the new value
        counterParagraph.textContent = newValue;
    });