document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let current = 0;

  const data = {
    food: "",
    activity: "",
    excitement: 5
  };

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });
  }

  function nextStep() {
    if (current < steps.length - 1) {
      current++;
      showStep(current);
    }
  }

  showStep(current);

  // STEP 1
  document.getElementById("yes-button").addEventListener("click", nextStep);
  document.getElementById("no-button").addEventListener("click", () => {
    alert("You know you want to 😏");
  });

  // STEP 2
  document.getElementById("click-me-button").addEventListener("click", nextStep);

  // FOOD SELECTION
  document.querySelectorAll(".food").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".food").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      data.food = btn.dataset.value;
    });
  });

  // ACTIVITY SELECTION
  document.querySelectorAll(".activity").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".activity").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      data.activity = btn.dataset.value;
    });
  });

  // NEXT BUTTONS
  document.querySelectorAll(".next-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (current === steps.length - 2) {
        document.getElementById("summary").innerHTML = `
          <h2>✨ Your Date ✨</h2>
          <p><strong>Food:</strong> ${data.food || "Surprise 😏"}</p>
          <p><strong>Activity:</strong> ${data.activity || "Something fun 💃"}</p>
          <p><strong>Excitement:</strong> ${data.excitement}/10</p>
        `;
      }
      nextStep();
    });
  });

  // SLIDER
  const slider = document.getElementById("excitement-slider");
  const level = document.getElementById("excitement-level");

  slider.addEventListener("input", () => {
    data.excitement = slider.value;
    level.textContent = slider.value;
  });
});
