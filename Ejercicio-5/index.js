function fibonacciDividers(maximo){

    let fibuArray = []; 
    let result = '';
    let init = 0;
    let index = 2;
  
    fibuArray[0] = 1;
    fibuArray[1] = 1;


    while (init < maximo) {
        fibuArray[index] = fibuArray[index - 1] + fibuArray[index - 2];
        let divisores = searchDivider(fibuArray[index]);

        if (divisores.length > maximo) {
            result = 'EL numero fibonacci '+ fibuArray[index] +' contiene mas de ' + maximo + ' divisores.';
            break;
        }
        console.error(fibuArray[index])

        index++;
        init++;
    }
    
    return result;
}
  
function searchDivider(valor){

    let init = 0;
    const numsdivisores = [];

    while (init <= valor) {
        if (valor%init==0) {
            numsdivisores.push(init);
        }
        init++;
    }

    return numsdivisores;
}
  

console.log(fibonacciDividers(100));