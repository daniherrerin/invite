document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let current = 0;

  const data = {
    food: "",
    activity: "",
    excitement: 5
  };

  function showStep(i) {
    steps.forEach((step, index) => {
      step.style.display = index === i ? "block" : "none";
    });
  }

  function next() {
    if (current < steps.length - 1) {
      current++;
      showStep(current);
    }
  }

  showStep(current);

  document.getElementById("yes-button").onclick = next;
  document.getElementById("click-me-button").onclick = next;

  document.getElementById("no-button").onclick = () => {
    alert("You’ll regret this 😌");
  };

  function handleSelection(type) {
    document.querySelectorAll(`.${type}`).forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll(`.${type}`).forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        data[type] = btn.dataset.value;
      };
    });
  }

  handleSelection("food");
  handleSelection("activity");

  document.querySelectorAll(".next-step").forEach(btn => {
    btn.onclick = () => {
      if (current === steps.length - 2) {
        document.getElementById("summary").innerHTML = `
          <h2>✨ Your Date ✨</h2>
          <p><strong>Food:</strong> ${data.food || "Surprise 😏"}</p>
          <p><strong>Activity:</strong> ${data.activity || "Something fun 💃"}</p>
          <p><strong>Excitement:</strong> ${data.excitement}/10</p>
        `;
      }
      next();
    };
  });

  const slider = document.getElementById("excitement-slider");
  const level = document.getElementById("excitement-level");

  slider.oninput = () => {
    data.excitement = slider.value;
    level.textContent = slider.value;
  };
});
