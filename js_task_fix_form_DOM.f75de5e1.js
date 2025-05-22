'use strict';
const inputs = document.querySelectorAll('input');
inputs.forEach((input)=>{
    const label = document.createElement('label');
    label.setAttribute('for', input.getAttribute('id'));
    label.textContent = input.getAttribute('name');
    label.classList.add('field-label');
    input.parentNode.insertBefore(label, input);
    let placeholder = input.getAttribute('name');
    placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);
    input.setAttribute('placeholder', placeholder);
});

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map
