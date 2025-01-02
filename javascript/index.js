document.querySelector('button').addEventListener('click', function() {
  const formSection = document.querySelector('.formulario');
  formSection.scrollIntoView({ behavior: 'smooth' });
});

function presionarBoton() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (!nombre || !email || !mensaje) {
    alert('Por favor, asegúrate de completar todos los campos');
    return;
  }

  alert(`¡Gracias por contactarnos! Los datos han sido registrados, te estaremos enviando un email a tu dirección: ${email}`);
  console.log({ nombre, email, mensaje });

  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensaje').value = '';
}
