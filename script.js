function calculateAge() {
  const name = document.getElementById('userName').value.trim();
  const birthYear = document.getElementById('birthYear').value;
  const resultDiv = document.getElementById('result');

  const currentYear = new Date().getFullYear();

  if (!name || !birthYear) {
    resultDiv.textContent = "Please fill in all fields!";
    resultDiv.style.color = "#d9534f";
    return;
  }

  if (birthYear > currentYear || birthYear < 1900) {
    resultDiv.textContent = "Please enter a valid birth year!";
    resultDiv.style.color = "#d9534f";
    return;
  }

  const age = currentYear - birthYear;
  resultDiv.style.color = "#2c3e50";
  resultDiv.innerHTML = `Hello <b>${name}</b>, you are <b>${age}</b> years old! 🎉`;
}
