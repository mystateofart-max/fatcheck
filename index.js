function collectData() {
  const waist = Number(document.getElementById("forWaist").value);
  const neck = Number(document.getElementById("forNeck").value);
  const height = Number(document.getElementById("forHeight").value);

  const answer = calculateBodyFat(waist, neck, height);
  document.getElementById("result").textContent = answer;
}

function calculateBodyFat(waist, neck, height) {
  if (waist <= neck || waist <= 0 || neck <= 0 || height <= 0) {
    return "Invalid measurements";
  }

  const bodyFat =
    86.010 * Math.log10(waist - neck) -
    70.041 * Math.log10(height) +
    36.76;

  return bodyFat.toFixed(2);
}
