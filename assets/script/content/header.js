const header = document.querySelector('[data-header]');

header.onload = () => {
  const contentHeader = document.createElement('div');
  contentHeader.classList.add('content__header');
  const content = `
    <div class="header__logo">
      <img
        class="header__image"
        src="../assets/img/header/control.svg"
        alt="Controle video game"
      />
      <h1 class="header__title"><span class="title--blue">Alura</span>Geek</h1>
    </div>
    <div class="header__search">
      <input
        type="search"
        name=""
        id=""
        placeholder="O que deseja encontrar?"
      />
      <button class="header__search--image">
        <img src="../assets/img/search.svg" alt="" />
      </button>
    </div>
    <div class="header__button">
        <button class="header__button--button"><a href="./content/login.html">Login</a></button>
    </div>       
  `;
  contentHeader.innerHTML = content;
  header.appendChild(contentHeader);
};

header.onload();
