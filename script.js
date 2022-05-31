function sortear() {
    let sorteados = document.getElementById('num').value;
    if (sorteados == 0){
        alert('Digite quantos números você deseja sortear!');
    } else {
    let sorteio = Math.round(Math.random() * sorteados);
    document.getElementById('sorteado').innerHTML = sorteio;}
}
let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})