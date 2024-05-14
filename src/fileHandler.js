const fs = require('fs').promises;

class Particao {
    constructor(tipo, enderecoInicial, tamanho) {
        this.tipo = tipo;
        this.enderecoInicial = enderecoInicial;
        this.tamanho = tamanho;
        this.proximo = null;
    }
}

const lerArquivoMemoria = async(filePath) => {
    const data = await fs.readFile(filePath, 'utf8');
    const linhas = data.split('\n').filter(linha => linha.trim() !== '');
    let cabeca = null;
    let atual = null;

    linhas.forEach(linha => {
        const [tipo, enderecoInicial, tamanho] = linha.split(' ');
        const novaParticao = new Particao(tipo, parseInt(enderecoInicial), parseInt(tamanho));

        if (!cabeca) {
            cabeca = novaParticao;
            atual = cabeca;
        } else {
            atual.proximo = novaParticao;
            atual = novaParticao;
        }
    });

    return cabeca;
};

const lerArquivoProcessos = async(filePath) => {
    const data = await fs.readFile(filePath, 'utf8');
    return data.split('\n').filter(linha => linha.trim() !== '').map(Number);
};

const escreverSaida = async(filePath, memoria, naoAlocados) => {
    let resultado = '';
    let atual = memoria;
    while (atual) {
        resultado += `${atual.tipo} ${atual.enderecoInicial} ${atual.tamanho}\n`;
        atual = atual.proximo;
    }

    if (naoAlocados.length > 0) {
        resultado += `PROCESSOS NÃO ALOCADOS (TAMANHOS): ${naoAlocados.join(', ')}\n`;
    }

    await fs.writeFile(filePath, resultado, 'utf8');
};

module.exports = { lerArquivoMemoria, lerArquivoProcessos, escreverSaida };