
const btn = document.querySelectorAll('.btn');
const resultado = document.getElementById('resultado');
const pontos = document.getElementById('pontuacoes');
const loginInput = document.getElementById('loginInput');
const loginBtn = document.getElementById('loginBtn');
const divLogin = document.querySelector('.login');
const options = document.querySelectorAll('.options');
let score = 0;
let nome = "";

loginBtn.addEventListener('click', function () {
 nome = loginInput.value.trim();
 if (nome !== "") {
  divLogin.style.display = 'none';
  options.forEach(function (option) {
   if (option.id === 'option-1') {
    option.style.display = 'flex';
   }
  });
  exibirResultado(nome, score);
 }
});

options.forEach(function (option) {
 if (option.id !== 'option-1') {
  option.style.display = 'none';
 }
});

btn.forEach(button => {
 button.addEventListener('click', function () {
  const atualOption = this.closest('.options');
  const proximaOption = atualOption.nextElementSibling;

  const value = parseInt(this.getAttribute('value'));
  if (!isNaN(value)) {
   score += value;
   exibirResultado(nome, score);
  }

  if (proximaOption) {
   atualOption.style.display = 'none';
   proximaOption.style.display = 'flex';
  } else {
   atualOption.style.display = 'none';
   pontos.style.display = 'block';
  }
 });
});

function exibirResultado(nome, score) {
 resultado.innerText = `A pontuação de ${nome} é: ${score}`;
}

