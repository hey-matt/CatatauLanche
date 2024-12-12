
let total = 0;
const carrinho = document.querySelector('.carrinho');
const totalElement = document.querySelector('#total');
const limparCarrinhoButton = document.querySelector('#limpar-carrinho');
document.querySelectorAll('.adicionar').forEach(button => {
    console.log(button);
    console.log(button.getAttribute('data-preco'));
    button.addEventListener('click', () => {
      try {
        const preco = Number(button.getAttribute('data-preco').replace(',', '.'));
        total += preco;
        totalElement.textContent = total.toFixed(2);
        carrinho.style.display = 'block';
      } catch (error) {
        console.error(error);
      }
    });
  });


limparCarrinhoButton.addEventListener('click', () => {
    total = 0;
    totalElement.textContent = total.toFixed(2);
    carrinho.style.display = 'none';
});