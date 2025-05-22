'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');
  label.classList.add('field-label');
  input.parentNode.insertBefore(label, input);

  let placeholder = input.getAttribute('name');

  placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

  input.setAttribute('placeholder', placeholder);
});
