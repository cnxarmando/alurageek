const contact = document.querySelector('[data-contact]');

contact.onload = () => {
  const contentContact = document.createElement('div');
  contentContact.classList.add('container__contact');
  const content = `
    <div class="contact__logo">
      <img class="contact__logo--image" src="./assets/img/header/control.svg" alt="" />
      <h1 class="contact__logo--title"><span class="title--blue">Alura</span>Geek</h1>
    </div>
    <div class="contact__menu">
      <ul>
        <li class="menu__item"><a href="#">Quem somos nós</a></li>
        <li class="menu__item"><a href="#">Política de privacidade</a></li>
        <li class="menu__item"><a href="#">Programa fidelidade</a></li>
        <li class="menu__item"><a href="#">Nossas lojas</a></li>
        <li class="menu__item"><a href="#">Quero ser franqueado</a></li>
        <li class="menu__item"><a href="#">Anuncie aqui</a></li>
      </ul>
    </div>
    <div class="contact__form">
      <h2 class="form__title">Fale conosco</h2>
      <form action="" method="post">
        <fieldset></fieldset>
        <input class="form__input" type="text" name="nome" id="nome"
        maxlength="30" placeholder="Nome"/>
        <textarea class="form__textarea" name="mensagem" id="mensagem"
        maxlength="300" placeholder="Mensagem"></textarea>
        <button class="form__button" type="submit">Enviar mensagem</button>
      </form>
    </div>  
  `;
  contentContact.innerHTML = content;
  contact.appendChild(contentContact);
};

contact.onload();
    