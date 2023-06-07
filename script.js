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
  const input3 = document.getElementById('input3').value;
  const input4 = document.getElementById('input4').value;
  const input5 = document.getElementById('input5').value;
  const input6 = document.getElementById('input6').value;
  const input7 = document.getElementById('input7').value;
  const input8 = document.getElementById('input8').value;
  const input9 = document.getElementById('input9').value;
  const input10 = document.getElementById('input10').value;
 

  const output = `Como miembro del equipo de marketing de <span class="input1">${input1}</span> , estás buscando mejorar la efectividad de tus estrategias mediante pruebas A/B. Necesitas desarrollar sugerencias concretas sobre las iteraciones y pruebas que se pueden realizar para obtener aprendizajes significativos en tus esfuerzos de marketing.

La idea es que en 3 entregas, se aprenda **QUE** comunicar, desde **que punto de vista** y **como** comunicarlo de manera mas efectiva gracias a pruebas A/B testing. Tu trabajo es que con la información a continuación generes 3 diferentes pruebas A/B testing. Especificar el periodo de testeo de cada prueba, y la cantidad de pruebas necesarias dentro de ese periodo.

Cliente: <span class="input1">${input1}</span> 

Especificaciones de audiencia objetivo: <span class="input2">${input2}</span> 

Key messages: <span class="input3">${input3}</span> 

OBJETIVO CREATIVO: <span class="input4">${input4}</span> 

OBJETIVO PERFORMANCE: <span class="input5">${input5}</span> 

Como has pensado comunicarlo:

- Ángulos? <span class="input6">${input6}</span>
- Tono? <span class="input7">${input7}</span>
- Recurso Comunicacional (Como)? <span class="input8">${input8}</span>

Con que recursos Visuales:

- Ejecucion (Ad)? <span class="input9">${input9}</span>
- Fondo? <span class="input10">${input10}</span>

Lo que deberías hacer es cambiar algún atributo especifico para poder hacer una variación y plantear un testeo. Necesitamos que cambies por test A/B solo **una** cosa.

Tus sugerencias deben ser coherentes con la audiencia objetivo, los key messages y los objetivos creativos y de performance. Tus sugerencias deben estar respaldadas por una lógica sólida que justifique por qué estas pruebas A/B pueden proporcionar mayor éxito con los objetivos especificados. Especificar cual sería el periodo de testeo para cada prueba, la cantidad de pruebas necesarias, es decir generar un calendario por ejemplo con la primer prueba A/B testing con una frecuencia de 1 prueba semanal, o hacerla dia a dia por un mes.`;

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
const input5Elements = document.querySelectorAll('.input5');
input5Elements.forEach(function(element) {
  const input = document.getElementById('input5');
  input.classList.add('filled');
});

const input6Elements = document.querySelectorAll('.input6');
input6Elements.forEach(function(element) {
  const input = document.getElementById('input6');
  input.classList.add('filled');
});

const input7Elements = document.querySelectorAll('.input7');
input7Elements.forEach(function(element) {
  const input = document.getElementById('input7');
  input.classList.add('filled');
});

const input8Elements = document.querySelectorAll('.input8');
input8Elements.forEach(function(element) {
  const input = document.getElementById('input8');
  input.classList.add('filled');
});

const input9Elements = document.querySelectorAll('.input9');
input9Elements.forEach(function(element) {
  const input = document.getElementById('input9');
  input.classList.add('filled');
});

const input10Elements = document.querySelectorAll('.input10');
input10Elements.forEach(function(element) {
  const input = document.getElementById('input10');
  input.classList.add('filled');
});

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
