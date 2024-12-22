// Confirm before submitting a new message
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const confirmation = confirm('Are you sure you want to submit this message?');
    if (!confirmation) e.preventDefault();
  });
}
