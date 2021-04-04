function calcularDiasEnvio(distancia){

    const valor = Math.round(distancia/100);

    let n1 = 0, n2 = 1, nexValor, diasEnvio;

    for (let i = 1; i <= valor; i++) {
        diasEnvio = n1;
        nexValor = n1 + n2;
        n1 = n2;
        n2 = nexValor;
    }

    diasEnvio = `El tiempo de entrega de la entrega ${diasEnvio} días`;
    
    return diasEnvio;
}


console.log(calcularDiasEnvio(640))