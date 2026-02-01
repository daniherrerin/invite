* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #ffdde1, #ee9ca7);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  width: 100%;
  padding: 20px;
}

.wizard-container {
  background: white;
  max-width: 360px;
  margin: auto;
  padding: 28px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,.15);
}

.step {
  display: none;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 {
  margin-top: 0;
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  border: none;
  border-radius: 999px;
  padding: 12px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: all .2s ease;
}

button:active {
  transform: scale(.95);
}

.primary {
  background: #ff5e78;
  color: white;
}

.secondary {
  background: #f2f2f2;
}

.full {
  width: 100%;
  margin-top: 20px;
}

.option {
  width: 100%;
  margin: 10px 0;
  background: #ffe1e6;
}

.option.selected {
  background: #ff5e78;
  color: white;
}

input[type="range"] {
  width: 100%;
  margin: 20px 0;
}

#summary {
  text-align: center;
}

#summary h2 {
  margin-bottom: 15px;
}
