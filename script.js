document.getElementById("bmr-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const goal = parseFloat(document.getElementById("goal").value);

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activity;
  const adjustedCalories = Math.round(tdee * (1 + goal));

  document.getElementById("result").innerHTML = `
    <p><strong>BMR:</strong> ${Math.round(bmr)} ккал/день</p>
    <p><strong>TDEE (під потреби):</strong> ${Math.round(tdee)} ккал/день</p>
    <p><strong>Цільова калорійність:</strong> ${adjustedCalories} ккал/день</p>
  `;
});
