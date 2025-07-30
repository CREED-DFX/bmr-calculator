
document.getElementById('bmr-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = parseFloat(document.getElementById('goal').value);

    let bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activity;
    const targetCalories = tdee * goal;

    document.getElementById('result').innerHTML = 
        `BMR: ${Math.round(bmr)} ккал<br>` +
        `TDEE (з активністю): ${Math.round(tdee)} ккал<br>` +
        `Цільова калорійність: ${Math.round(targetCalories)} ккал`;
});
