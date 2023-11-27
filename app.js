const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Corregido el selector para coincidir con la clase 'name'
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...'; // Corregido el texto de carga
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Parsear la respuesta a JSON
    console.log(data);
    $n.textContent = data.name; // Eliminado el uso de comillas simples
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {
    handleError(err); // Llamar a la función de manejo de errores en caso de error
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; // Corregido para mostrar el mensaje de error
}

displayUser('stolinski').catch(handleError);
