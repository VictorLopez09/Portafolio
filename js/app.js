const btn = document.getElementById('button-send');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_lstld0k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      form.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
      form.reset();
    });
});