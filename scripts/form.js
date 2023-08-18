const scriptURL = 'https://script.google.com/macros/s/AKfycbzqfpSkCBHdQ0gMRMVbdIsO6lz8kMZMfnd43ZWLTv4xqErhk-Su9Tay3OO6-Eh48xLYqw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      alert('Formulario enviado exitosamente'); // Usa alert() para mostrar el mensaje
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
})