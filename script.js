function comecar() {
    const numeros = document.getElementById("resultado");
    
    let numerosSorteados = [];
  
    while (numerosSorteados.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
  
      if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio);
      }
    }
      numerosSorteados.sort((a, b) => a - b);
  
    numeros.textContent = numerosSorteados.join(", ");
  }
  