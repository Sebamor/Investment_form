let currentQuestion = 1;
const totalQuestions = 5;

function updateProgressBar() {
    const progress = document.getElementById('progress');
    progress.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
}

function nextQuestion() {
    const currentDiv = document.getElementById(`question${currentQuestion}`);
    const inputs = currentDiv.querySelectorAll('input, select');
    let valid = true;

    // Validate all inputs in the current question
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    // Special check for the checkbox on the last question
    if (currentQuestion === totalQuestions) {
        const receiveCallsCheckbox = document.getElementById('receiveCalls');
        const checkboxLabel = receiveCallsCheckbox.nextElementSibling;
        if (!receiveCallsCheckbox.checked) {
            valid = false;
            checkboxLabel.classList.add('invalid');
        } else {
            checkboxLabel.classList.remove('invalid');
        }
    }

    if (valid) {
        currentDiv.style.display = 'none';
        currentQuestion++;
        const nextDiv = document.getElementById(`question${currentQuestion}`);
        if (nextDiv) {
            nextDiv.style.display = 'block';
            updateProgressBar();
        }
    }
}

document.getElementById('investmentForm').addEventListener('submit', (event) => {
    
    
    // Check all required fields for final submission
    const inputs = event.target.querySelectorAll('input, select');
    let valid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    // Special check for the checkbox on the last question
    const receiveCallsCheckbox = document.getElementById('receiveCalls');
    const checkboxLabel = receiveCallsCheckbox.nextElementSibling;
    if (!receiveCallsCheckbox.checked) {
        valid = false;
        checkboxLabel.classList.add('invalid');
    } else {
        checkboxLabel.classList.remove('invalid');
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});
