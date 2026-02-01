document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  function showStep(step) {
    steps.forEach((s, i) => {
      s.style.display = i === step ? "block" : "none";
    });
  }

  showStep(currentStep);

  // Botones respuesta Sí y No
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  yesButton.addEventListener("click", () => {
    currentStep++;
    showStep(currentStep);
  });

  noButton.addEventListener("click", () => {
    alert("Okay, maybe next time!");
  });

  // Botón CLICK ME
  const clickMeButton = document.getElementById("click-me-button");
  if (clickMeButton) {
    clickMeButton.addEventListener("click", () => {
      currentStep++;
      showStep(currentStep);
    });
  }

  // Slider emoción
  const excitementSlider = document.getElementById("excitement-slider");
  const excitementLevel = document.getElementById("excitement-level");

  if (excitementSlider && excitementLevel) {
    excitementSlider.addEventListener("input", () => {
      excitementLevel.textContent = excitementSlider.value;
    });
  }

  // Botones Next
  const nextButtons = document.querySelectorAll(".next-step");
  nextButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentStep++;
      if(currentStep >= steps.length) currentStep = steps.length -1;
      showStep(currentStep);
    });
  });
});
