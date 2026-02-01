document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let step = 0;

  const state = {
    food: null,
    plan: null,
    excitement: 7
  };

  const showStep = index => {
    steps.forEach((s, i) => {
      s.style.display = i === index ? "block" : "none";
    });
  };

  showStep(step);

  // STEP 1
  document.getElementById("yes").addEventListener("click", () => {
    step++;
    showStep(step);
  });

  document.getElementById("no").addEventListener("click", () => {
    document.querySelector(".wizard").innerHTML = `
      <h2>😢</h2>
      <p>Bueno… al menos lo intenté.</p>
    `;
  });

  // STEP 2
  document.getElementById("continue").addEventListener("click", () => {
    step++;
    showStep(step);
  });

  // FOOD SELECTION
  const foodInput = document.getElementById("customFood");

  document.querySelectorAll(".food").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".food").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      if (card.classList.contains("custom")) {
        foodInput.style.display = "block";
        foodInput.focus();
        state.food = null; // se decidirá al pulsar Siguiente
      } else {
        foodInput.style.display = "none";
        state.food = card.dataset.value;
      }
    });
  });

  // PLAN SELECTION
  const planInput = document.getElementById("customPlan");

  document.querySelectorAll(".plan").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".plan").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      if (card.classList.contains("custom")) {
        planInput.style.display = "block";
        planInput.focus();
        state.plan = null;
      } else {
        planInput.style.display = "none";
        state.plan = card.dataset.value;
      }
    });
  });

  // NEXT BUTTONS (AQUÍ ESTÁ LA CLAVE)
  document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {

      // FOOD VALIDATION
      if (step === 2) {
        const selectedFood = document.querySelector(".food.selected");

        if (!selectedFood) {
          return alert("Elige una opción de comida 💕");
        }

        if (selectedFood.classList.contains("custom")) {
          if (!foodInput.value.trim()) {
            return alert("Escribe qué te apetece comer ✍️");
          }
          state.food = foodInput.value.trim();
        }
      }

      // PLAN VALIDATION
      if (step === 3) {
        const selectedPlan = document.querySelector(".plan.selected");

        if (!selectedPlan) {
          return alert("Elige un plan 😘");
        }

        if (selectedPlan.classList.contains("custom")) {
          if (!planInput.value.trim()) {
            return alert("Escribe el plan ✍️");
          }
          state.plan = planInput.value.trim();
        }
      }

      // SUMMARY
      if (step === steps.length - 2) {
        document.getElementById("summary").innerHTML = `
          <h2>Eva 💖</h2>
          <p>Entonces…</p>
          <p><strong>¿Quieres salir conmigo este San Valentín?</strong> 💌</p>
          <p><strong>Comida:</strong> ${state.food}</p>
          <p><strong>Plan:</strong> ${state.plan}</p>
          <p><strong>Ganas:</strong> ${state.excitement}/10</p>
        `;
      }

      step++;
      showStep(step);
    });
  });

  // SLIDER
  const slider = document.getElementById("slider");
  const level = document.getElementById("level");

  slider.addEventListener("input", () => {
    state.excitement = slider.value;
    level.textContent = slider.value;
  });
});
