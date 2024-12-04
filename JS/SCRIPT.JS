//Ini File Javascript

const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit)
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";  
}

function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert ("Masukkan data yang valid");
        return;
    }
    const heightInMeters = height / 100; //cm -> m
    const bmi = weight / Math.pow(heightInMeters, 2);
    const desc = interpretBMI (bmi);

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc;
    descText.innerHTML = `Berat Badan Anda <strong>${desc}</strong>`;
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "kurang";
    } else if (bmi < 25) {
        return "ideal";
    } else if (bmi < 30) {
        return "berlebih";
    } else {
        return "obesitas";
    }
}