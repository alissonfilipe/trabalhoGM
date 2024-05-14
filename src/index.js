const { lerArquivoMemoria, lerArquivoProcessos, escreverSaida } = require('./fileHandler');
const { firstFit, nextFit, bestFit, worstFit } = require('./memoryAllocator');

const memoriaFilePath = './data/memoria.txt';
const processosFilePath = './data/processos.txt';

(async() => {
    const memoria = await lerArquivoMemoria(memoriaFilePath);
    const processos = await lerArquivoProcessos(processosFilePath);

    const { memoriaAtualizada: memoriaFF, naoAlocados: naoAlocadosFF } = firstFit(memoria, processos);
    escreverSaida('./output/first_fit.txt', memoriaFF, naoAlocadosFF);

    const { memoriaAtualizada: memoriaNF, naoAlocados: naoAlocadosNF } = nextFit(memoria, processos);
    escreverSaida('./output/next_fit.txt', memoriaNF, naoAlocadosNF);

    const { memoriaAtualizada: memoriaBF, naoAlocados: naoAlocadosBF } = bestFit(memoria, processos);
    escreverSaida('./output/best_fit.txt', memoriaBF, naoAlocadosBF);

    const { memoriaAtualizada: memoriaWF, naoAlocados: naoAlocadosWF } = worstFit(memoria, processos);
    escreverSaida('./output/worst_fit.txt', memoriaWF, naoAlocadosWF);
})();