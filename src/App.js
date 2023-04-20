import logo from './logo.svg';
import './App.css';
function toggleNavbarPerfecto() {
  var contenedor = document.querySelector('.navbar__items2');
  var alturaActual = contenedor.offsetHeight;
  var alturaDeseada = 0;
  var items = contenedor.querySelectorAll('.n_item');

  if (!contenedor.classList.contains('open')) {
    // Mostrar los elementos antes de medir la altura
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('close');
    }
    // Establecer la altura a auto para medir la altura
    contenedor.style.height = 'auto';
    alturaDeseada = contenedor.scrollHeight;
    // Establecer la altura a cero para la transición
    contenedor.style.height = '0';
    // Esperar un momento para que la transición se pueda ver
    setTimeout(function() {
      contenedor.style.height = alturaDeseada + 'px';
    }, 10);
  } else {
    contenedor.style.height = '0';
    contenedor.addEventListener('transitionend', function() {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add('close');
      }
    }, { once: true });
  }

  contenedor.classList.toggle('open');
}

function App() {
  return (
  
  <div>
    <div class="navbar">
      <div class="navbar__01">
        <div class="navbar__title">
          <p class="">Mis locales</p>
        </div>

        <div class="navbar__items">
          <div class="n_item active">Mis Locales</div>
          <div class="n_item">Roles</div>
          <div class="n_item">Mi Personal</div>
          <div class="n_item">Reclutamiento</div>
          <div class="n_item">Servicios Prestados</div>
        </div>

        <div class="navbar__notify">🔔</div>

        <div class="navbar__data">
          <div class="user__data">
            <p class="user__name">Carlos Aquino</p>
            <p class="user__rol">Administrador General</p>
          </div>

          <div class="navbar__image">
            <img
              class="n__image"
              src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=yqhDz48CzADqRw&pid=ImgRaw&r=0"
            />
          </div>
        </div>

        <div class="navbar__button" id="myButton" onclick="toggleNavbarPerfecto()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbar__items2" class="navbar__items2">
        <div class="n_item close active"><p>Mis Locales</p></div>
        <div class="n_item close"><p>Roles</p></div>
        <div class="n_item close"><p>Mi Personal</p></div>
        <div class="n_item close"><p>Reclutamiento</p></div>
        <div class="n_item close"><p>Servicios Prestados</p></div>
      </div>

      <div class="navbar__01">
        <p>
          A continuación se visualizan los locales previamente creados para
          poder colocar las área que usted a definido en cada uno de los
          locales.
        </p>
      </div>
    </div>
  </div>

  );
}

export default App;
