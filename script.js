document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  const selections = {
    food: "",
    activity: "",
    excitement: 5
  };

  function showStep(step) {
    steps.forEach((s, i) => {
      s.style.display = i === step ? "block" : "none";
    });
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }

  showStep(currentStep);

  document.getElementById("yes-button").addEventListener("click", nextStep);

  document.getElementById("no-button").addEventListener("click", () => {
    alert("Maybe next time 😢");
  });

  document.getElementById("click-me-button").addEventListener("click", nextStep);

  document.querySelectorAll(".food").forEach(btn => {
    btn.addEventListener("click", () => {
      selections.food = btn.dataset.value;
    });
  });

  document.querySelectorAll(".activity").forEach(btn => {
    btn.addEventListener("click", () => {
      selections.activity = btn.dataset.value;
    });
  });

  document.querySelectorAll(".next-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep === steps.length - 2) {
        document.getElementById("summary").innerHTML = `
          <h2>✨ Your Date Plan ✨</h2>
          <p><strong>Food:</strong> ${selections.food || "Surprise 😏"}</p>
          <p><strong>Activity:</strong> ${selections.activity || "Something fun 💃"}</p>
          <p><strong>Excitement:</strong> ${selections.excitement}/10</p>
        `;
      }
      nextStep();
    });
  });

  const slider = document.getElementById("excitement-slider");
  const level = document.getElementById("excitement-level");

  slider.addEventListener("input", () => {
    selections.excitement = slider.value;
    level.textContent = slider.value;
  });
});
