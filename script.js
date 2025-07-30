
document.getElementById("bmr-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = parseFloat(document.getElementById("goal").value);

    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activity;
    const goalCalories = Math.round(tdee * goal);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>🔥 Результати:</h3>
        <p><strong>BMR (базовий обмін):</strong> ${Math.round(bmr)} ккал</p>
        <p><strong>TDEE (з урахуванням активності):</strong> ${Math.round(tdee)} ккал</p>
        <p><strong>Цільова калорійність:</strong> ${goalCalories} ккал</p>
    `;
});
