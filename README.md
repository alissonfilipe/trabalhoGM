# Memória Alloc

Projeto para implementação de algoritmos de alocação de memória: FIRST-FIT, NEXT-FIT, BEST-FIT e WORST-FIT.

## Estrutura do Projeto
trabalhoGM <br>
├── data <br>
│ ├── memoria.txt <br>
│ ├── processos.txt <br>
├── output <br>
│ ├── first_fit.txt <br>
│ ├── next_fit.txt <br>
│ ├── best_fit.txt <br>
│ ├── worst_fit.txt <br>
├── src <br>
│ ├── index.js <br>
│ ├── memoryAllocator.js <br>
│ ├── fileHandler.js <br>
├── package.json <br>
└── README.md <br>


## Como Executar

1. Instale o Node.js em seu sistema, se ainda não o tiver.
2. Clone este repositório.
3. Navegue até a pasta do projeto.
4. Execute `npm install` para instalar as dependências (não há dependências externas no momento).
5. Execute `npm start` para executar o projeto.

## Arquivos de Entrada

- `data/memoria.txt`: Arquivo com a representação das partições de memória.
- `data/processos.txt`: Arquivo com a lista de processos a serem alocados.

## Arquivos de Saída

Os arquivos de saída serão gerados na pasta `output` para cada algoritmo:

- `first_fit.txt`
- `next_fit.txt`
- `best_fit.txt`
- `worst_fit.txt`
