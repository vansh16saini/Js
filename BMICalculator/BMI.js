const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please Give a valid height";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please Give a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
});
