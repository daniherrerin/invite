document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let step = 0;

  const state = {
    food: null,
    plan: null,
    excitement: 7,
    foodCustom: false,
    planCustom: false
  };

  const show = i => {
    steps.forEach((s, index) => {
      s.style.display = index === i ? "block" : "none";
    });
  };

  show(step);

  // STEP 1
  document.getElementById("yes").onclick = () => {
    step++;
    show(step);
  };

  document.getElementById("no").onclick = () => {
    document.querySelector(".wizard").innerHTML = `
      <h2>😢</h2>
      <p>Bueno… al menos lo intenté.</p>
    `;
  };

  document.getElementById("continue").onclick = () => {
    step++;
    show(step);
  };

  // FOOD
  const foodInput = document.getElementById("customFood");

  document.querySelectorAll(".food").forEach(card => {
    card.onclick = () => {
      document.querySelectorAll(".food").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      if (card.classList.contains("custom")) {
        state.foodCustom = true;
        foodInput.style.display = "block";
        foodInput.focus();
      } else {
        state.foodCustom = false;
        foodInput.style.display = "none";
        state.food = card.dataset.value;
      }
    };
  });

  // PLAN
  const planInput = document.getElementById("customPlan");

  document.querySelectorAll(".plan").forEach(card => {
    card.onclick = () => {
      document.querySelectorAll(".plan").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      if (card.classList.contains("custom")) {
        state.planCustom = true;
        planInput.style.display = "block";
        planInput.focus();
      } else {
        state.planCustom = false;
        planInput.style.display = "none";
        state.plan = card.dataset.value;
      }
    };
  });

  // NEXT BUTTONS
  document.querySelectorAll(".next").forEach(btn => {
    btn.onclick = () => {

      // FOOD VALIDATION
      if (step === 2) {
        if (state.foodCustom) {
          if (!foodInput.value.trim()) {
            return alert("Escribe qué te apetece comer 💕");
          }
          state.food = foodInput.value.trim();
        } else if (!state.food) {
          return alert("Elige algo de comer 💕");
        }
      }

      // PLAN VALIDATION
      if (step === 3) {
        if (state.planCustom) {
          if (!planInput.value.trim()) {
            return alert("Escribe el plan 😘");
          }
          state.plan = planInput.value.trim();
        } else if (!state.plan) {
          return alert("Elige un plan 😘");
        }
      }

      // SUMMARY
      if (step === steps.length - 2) {
        document.getElementById("summary").innerHTML = `
          <h2>Eva 💖</h2>
          <p>Entonces…</p>
          <p>¿Quieres salir conmigo este <strong>San Valentín</strong>? 💌</p>
          <p><strong>Comida:</strong> ${state.food}</p>
          <p><strong>Plan:</strong> ${state.plan}</p>
          <p><strong>Ganas:</strong> ${state.excitement}/10</p>
        `;
      }

      step++;
