function montarTabuada(numero) {

    return function (x, y) {
        for (x; x <= y; x++) {
            result = x * numero;
            console.log(`${x} X ${numero} = ${result}`);
        }
    }
}

const tabuada = montarTabuada(7);
tabuada(1, 10);