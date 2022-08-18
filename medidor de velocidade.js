verificarVelocidade(130);
// aqui em cima será a velocidade do carro

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  // criei uma const pra ficar mais fácil de achar a velocidade máxima
  // e coloquei um valor nela.
  const KmPorPonto = 5;
  // aqui declarei a divisao de pontos que irei usar na operação abaixo
  if (velocidade <= velocidadeMaxima)
  // aqui eu disse se a velocidade for maior ou igual a velocidade maxima
  //imprimirá ok
    console.log('Ok');
  else {
    const Pontos = Math.floor((velocidade - velocidadeMaxima)/KmPorPonto);
    // math.flor e um comando pra arredondar números decimais
    // criei aqui a continha: velocidade do carro - a velocidade máxima
    // dividido por 5
    if(Pontos >= 12)
      console.log('Carteira Suspensa');
      // se infelizmente o alcoolatra passou dos 12 ou chegou nos 12 pontos em limite
      //imprimirá que ele perdeu a carteira
    else 
      console.log('Pontos',Pontos); 
      // caso contrário irá imprimir os pontos que ele levou.
  }
  
}