document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let step = 0;

  const state = {
    food: null,
    plan: null,
    excitement: 5
  };

  const show = i => {
    steps.forEach((s, index) => {
      s.style.display = index === i ? "block" : "none";
    });
  };

  show(step);

  document.getElementById("yes").onclick = () => {
    step++;
    show(step);
  };

  document.getElementById("no").onclick = () => {
    document.querySelector(".wizard").innerHTML = `
      <h2>Too bad 😌</h2>
      <p>You’ll never know what you missed.</p>
    `;
  };

  document.getElementById("continue").onclick = () => {
    step++;
    show(step);
  };

  document.querySelectorAll(".food").forEach(card => {
    card.onclick = () => {
      document.querySelectorAll(".food").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      state.food = card.dataset.value;
    };
  });

  document.querySelectorAll(".plan").forEach(card => {
    card.onclick = () => {
      document.querySelectorAll(".plan").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      state.plan = card.dataset.value;
    };
  });

  document.querySelectorAll(".next").forEach(btn => {
    btn.onclick = () => {
      if (step === 2 && !state.food) return alert("Choose food first 😉");
      if (step === 3 && !state.plan) return alert("Choose a plan 😉");

      if (step === steps.length - 2) {
        document.getElementById("summary").innerHTML = `
          <h2>✨ Your Date ✨</h2>
          <p><strong>Food:</strong> ${state.food}</p>
          <p><strong>Plan:</strong> ${state.plan}</p>
          <p><strong>Excitement:</strong> ${state.excitement}/10</p>
        `;
      }

      step++;
      show(step);
    };
  });

  const slider = document.getElementById("slider");
  const level = document.getElementById("level");

  slider.oninput = () => {
    state.excitement = slider.value;
    level.textContent = slider.value;
  };
});
