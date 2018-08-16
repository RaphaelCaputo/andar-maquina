
function tempoAndar(arr) {
    console.log(arr);
    // Escolhe o melhor andar
    let andarMaquina = melhorAndar(arr);
    let arrayIndex = arr.indexOf(andarMaquina);
    console.log("Melhor andar: " + (arrayIndex + 1));

    let melhor = arrayIndex;
    let i = melhor;
    let length = arr.length;
    let multiplierx = 1 ;
    let multipliery = 1 ;
    let x = 1;
    let y = 1;
    let count = 0;
    let minutos = 1;
    let result = 0;


    // Calcula os andares acima do melhor andar
    for(i; i<length; i++) {
        minutos = arr[i] * multiplierx;
        // console.log("Pessoas: " + arr[i] + " Minutos: " + minutos + " Count: " + count);
        result = result + minutos;
        multiplierx = x * 2;
        x++;
        count++;
    }

    // Se ainda houver andares restantes abaixo
    if(count<length) {
        
        
        // Inverte o array para fazer calcular os andares de baixo
        let reverse = arr.slice(0).reverse();
        let rLength = reverse.length;
        let rIndex = reverse.indexOf(andarMaquina);
        // console.log(reverse);

        for(rIndex; rIndex<rLength; rIndex++) {
            minutos = reverse[rIndex] * multipliery;
            // console.log("Pessoas: " + reverse[rIndex] + " Minutos: " + minutos + " Count: " + count);
            result = result + minutos;
            multipliery = y * 2;
            y++;
            count++;
        }
    }
    // Subtrai os minutos do andar escolhido 2x se passar pelo loop 2x se nao subtrai 1x
    if(count>length) {
        result = result - (andarMaquina*2);
    }
    else {
        result = result - andarMaquina;
    }
    console.log("Saida: " + result);
    
}

// Ordena a função array.sort()
function compararNumeros(a, b) {
    return a - b;
  }

// Escolhe o melhor andar
function melhorAndar(arr) {
    let arrayAux = [];
    // Cria um array auxiliar
    for(let i=0; i<arr.length;i++) {
        arrayAux.push(arr[i]);
    }

    // Ordena e retorna o andar com maior numero de pessoas
    // console.log("Array Auxiliar: " + arrayAux);
    let sortedArray =  arrayAux.sort(compararNumeros);
    let length = sortedArray.length-1;
    return sortedArray[length];
}

let array = [10, 20, 30];
tempoAndar(array);