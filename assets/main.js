document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Cerrar' : 'Menú';
    navigation.classList.toggle('is-open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menú';
    navigation.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menú';
      navigation.classList.remove('is-open');
      toggle.focus();
    }
  });
}
