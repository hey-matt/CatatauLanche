
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
let clickCount = 0;

document.getElementById('easter-egg-menu').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert(`Estado da mídia. . . . . . . . . . . . . .  : mídia desconectada
Sufixo DNS específico de conexão. . . . . . :

Adaptador de Rede sem Fio Conexão Local* 2:

   Estado da mídia. . . . . . . . . . . . . .  : mídia desconectada
   Sufixo DNS específico de conexão. . . . . . :

Adaptador de Rede sem Fio Wi-Fi:

   Sufixo DNS específico de conexão. . . . . . : ifto.local
   Endereço IPv6 de link local . . . . . . . . : fe80::8427:d9f9:6cde:13bc%5
   Endereço IPv4. . . . . . . .  . . . . . . . : 20.20.8.165
   Máscara de Sub-rede . . . . . . . . . . . . : 255.255.0.0
   Gateway Padrão. . . . . . . . . . . . . . . : 20.20.20.254`);
        clickCount = 0; // Reseta o contador após exibir o menu
    }
    if (clickCount === 6) {
        alert();
    }
});
