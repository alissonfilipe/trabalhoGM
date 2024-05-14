class Particao {
    constructor(tipo, enderecoInicial, tamanho) {
        this.tipo = tipo;
        this.enderecoInicial = enderecoInicial;
        this.tamanho = tamanho;
        this.proximo = null;
    }
}

const firstFit = (memoria, processos) => {
    const naoAlocados = [];
    processos.forEach(tamanho => {
        let atual = memoria;
        let alocado = false;
        while (atual) {
            if (atual.tipo === 'H' && atual.tamanho >= tamanho) {
                atual.tipo = 'P';
                atual.tamanho = tamanho;
                alocado = true;
                break;
            }
            atual = atual.proximo;
        }
        if (!alocado) naoAlocados.push(tamanho);
    });
    return { memoriaAtualizada: memoria, naoAlocados };
};

const nextFit = (memoria, processos) => {
    const naoAlocados = [];
    let ultimaPosicao = memoria;
    processos.forEach(tamanho => {
        let atual = ultimaPosicao;
        let alocado = false;
        do {
            if (atual.tipo === 'H' && atual.tamanho >= tamanho) {
                atual.tipo = 'P';
                atual.tamanho = tamanho;
                ultimaPosicao = atual.proximo || memoria;
                alocado = true;
                break;
            }
            atual = atual.proximo || memoria;
        } while (atual !== ultimaPosicao);
        if (!alocado) naoAlocados.push(tamanho);
    });
    return { memoriaAtualizada: memoria, naoAlocados };
};

const bestFit = (memoria, processos) => {
    const naoAlocados = [];
    processos.forEach(tamanho => {
        let atual = memoria;
        let melhorOpcao = null;
        while (atual) {
            if (atual.tipo === 'H' && atual.tamanho >= tamanho) {
                if (!melhorOpcao || atual.tamanho < melhorOpcao.tamanho) {
                    melhorOpcao = atual;
                }
            }
            atual = atual.proximo;
        }
        if (melhorOpcao) {
            melhorOpcao.tipo = 'P';
            melhorOpcao.tamanho = tamanho;
        } else {
            naoAlocados.push(tamanho);
        }
    });
    return { memoriaAtualizada: memoria, naoAlocados };
};

const worstFit = (memoria, processos) => {
    const naoAlocados = [];
    processos.forEach(tamanho => {
        let atual = memoria;
        let piorOpcao = null;
        while (atual) {
            if (atual.tipo === 'H' && atual.tamanho >= tamanho) {
                if (!piorOpcao || atual.tamanho > piorOpcao.tamanho) {
                    piorOpcao = atual;
                }
            }
            atual = atual.proximo;
        }
        if (piorOpcao) {
            piorOpcao.tipo = 'P';
            piorOpcao.tamanho = tamanho;
        } else {
            naoAlocados.push(tamanho);
        }
    });
    return { memoriaAtualizada: memoria, naoAlocados };
};

module.exports = { firstFit, nextFit, bestFit, worstFit };