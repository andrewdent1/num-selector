document.addEventListener('DOMContentLoaded', () => {
    let number = 1;
    let targetNumber = null;
    let masterClickCount = 0;
    let masterConfirmClicks = 0;

    const selectedNumberElement = document.getElementById('selected-number');
    const statusElement = document.getElementById('status');
    const upButton = document.getElementById('up-btn');
    const downButton = document.getElementById('down-btn');
    const masterButton = document.getElementById('master-btn');

    // Function to update the displayed number
    function updateNumberDisplay() {
        selectedNumberElement.textContent = `Selected Number: ${number}`;
    }

    // Increase number when 'Up' is pressed
    upButton.addEventListener('click', () => {
        if (targetNumber === null && number < 20) {
            number++;
            updateNumberDisplay();
        }
    });

    // Decrease number when 'Down' is pressed
    downButton.addEventListener('click', () => {
        if (targetNumber === null && number > 1) {
            number--;
            updateNumberDisplay();
        }
    });

    // Handle 'Master' button clicks
    masterButton.addEventListener('click', () => {
        if (targetNumber === null) {
            masterConfirmClicks++;
            if (masterConfirmClicks < 3) {
                statusElement.textContent = `Press the Master Button ${3 - masterConfirmClicks} more times to confirm.`;
            } else {
                targetNumber = number;
                statusElement.textContent = `Number confirmed! Press the Master Button ${targetNumber} times to finish.`;
                masterConfirmClicks = 0;
            }
        } else {
            masterClickCount++;
            if (masterClickCount < targetNumber) {
                statusElement.textContent = `${masterClickCount}/${targetNumber} Master button presses.`;
            } else {
                statusElement.textContent = "Task Completed!";
                masterButton.disabled = true;
            }
        }
    });
});
