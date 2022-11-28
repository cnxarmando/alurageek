(() => {
let login
let senha

function capturarDados() {
  login = document.querySelector('#email').value
  senha = document.querySelector('#password').value
    console.log(login, senha)
  validarDados()
}
capturarDados()

class DadosEntrada {
  constructor(login, senha) {
    this.login = login
    this.senha = senha
  }
}

let usuario1 = new DadosEntrada(login = 'conex@email.com', senha = '123456')

function validarDados() {
  if (login == usuario1.login && senha == usuario1.senha) {
    alert('Login realizado com sucesso')
  } else {
    alert('Login ou senha inválidos')
  }
}})()

