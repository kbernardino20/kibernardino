const scriptURL = 'https://script.google.com/macros/s/AKfycbx_L5kS1B7Xx7BEvcLO0YjevjNqIMBREpihYpYqMHM4NrQqKqiFoY3GfM2Gj5EvkQxsGQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your message is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})