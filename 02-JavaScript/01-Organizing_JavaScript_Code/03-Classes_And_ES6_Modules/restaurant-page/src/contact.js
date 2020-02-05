const createContactTitle = () => {
  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('contact-subtitle');
  contactTitle.innerText = 'Contact us';

  return contactTitle;
};

const createLabel = ({ id, text }) => {
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.classList.add(id, 'contact-form-label');
  label.innerText = text;

  return label;
};

const createFormField = ({ type, id }) => {
  const formField = document.createElement('input');
  formField.setAttribute('type', type);
  formField.setAttribute('name', id);
  formField.classList.add('contact-form-field');

  return formField;
};

const createSubmitButton = () => {
  const submitButton = document.createElement('button');
  submitButton.classList.add('submit-button');
  submitButton.setAttribute('type', 'button');
  submitButton.innerText = 'Send';

  return submitButton;
};

const createContactForm = () => {
  const form = document.createElement('form');
  form.classList.add('contact-form');

  // fullName
  form.appendChild(createLabel({ id: 'full-name', text: 'Your name' }));
  form.appendChild(createFormField({ type: 'text', id: 'full-name' }));

  // email
  form.appendChild(createLabel({ id: 'email-adress', text: 'Your E-mail' }));
  form.appendChild(createFormField({ type: 'email', id: 'email-adress' }));

  // subject
  form.appendChild(createLabel({ id: 'subject', text: 'Subject' }));
  form.appendChild(createFormField({ type: 'text', id: 'subject' }));

  // message
  form.appendChild(createLabel({ id: 'message', text: 'Message' }));
  form.appendChild(createFormField({ type: 'text', id: 'message' }));

  return form;
};

export const createContactSection = () => {
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact-container');
  contactSection.appendChild(createContactTitle());
  contactSection.appendChild(createContactForm());
  contactSection.appendChild(createSubmitButton());

  return contactSection;
};

export { createContactSection as default };
