const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}


function updateOutput() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
 

  const output = `Como miembro del equipo de marketing de <span class="input1">${input1}</span> , estás buscando mejorar la efectividad de tus estrategias mediante pruebas A/B. Necesitas desarrollar sugerencias concretas sobre las iteraciones y pruebas que se pueden realizar para obtener aprendizajes significativos en tus esfuerzos de marketing. Proporciona información detallada sobre al menos tres áreas clave en las que se puedan realizar pruebas A/B, así como los posibles resultados que se pueden medir y analizar para obtener aprendizajes valiosos. Asegúrate de incluir los siguientes elementos en tu respuesta: Descripción clara del área de marketing específica en la que se llevará a cabo la prueba A/B. Dos variantes o enfoques diferentes que se probarán. Objetivos claros y medibles que se buscan alcanzar con la prueba. Métricas clave que se medirán para analizar los resultados y obtener aprendizajes significativos. Recuerda proporcionar explicaciones detalladas sobre cada área de prueba A/B, así como la importancia de las métricas clave que se medirán. Tus sugerencias deben ser coherentes con la industria y los valores de la empresa, y estar respaldadas por una lógica sólida que justifique por qué estas pruebas A/B pueden proporcionar aprendizajes valiosos para la empresa..

Tener en cuenta que la empresa <span class="input2">${input2}</span> `;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

  // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });

  const input3Elements = document.querySelectorAll('.input3');
  input3Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });

  const input4Elements = document.querySelectorAll('.input4');
  input4Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });
}

// Event listeners for input fields
const inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}