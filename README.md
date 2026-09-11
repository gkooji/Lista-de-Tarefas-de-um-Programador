# Lista de Tarefas do Programador

Projeto em **React + Vite** para gerenciamento de tarefas, com persistência em `localStorage` e visual inspirado em editor de código.

## Funcionalidades

- Cadastro de tarefas com **Nome, Data, Descrição e Prioridade** (alta/média/baixa).
- Marcar tarefa como concluída e remover tarefas.
- Filtros rápidos: `all()`, `pending()`, `done()`.
- Persistência automática no `localStorage` (os dados continuam lá mesmo depois de fechar o navegador).
- Código comentado nos pontos que usam **Hooks** (`useState`, `useEffect`, `useCallback`, hook customizado `useLocalStorage`), **métodos de array** (`map`, `filter`) e **callbacks** entre componentes.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```
src/
├── App.jsx                 # componente raiz: guarda o estado global das tarefas
├── index.css                # reset + tokens de cor/tipografia + todos os estilos do app
├── main.jsx                 # ponto de entrada do React
├── useLocalStorage.js       # hook customizado: useState + useEffect com persistência
└── components/
    ├── Header.jsx           # cabeçalho com contadores
    ├── TaskForm.jsx         # formulário de cadastro (componente controlado)
    ├── TaskFilters.jsx      # botões de filtro (todas/pendentes/concluídas)
    ├── TaskList.jsx         # aplica filter + map sobre a lista de tarefas
    └── TaskItem.jsx         # renderiza uma tarefa individual
```

Projeto feito por Guilherme Kooji Kubota FIAP RM:570541
Repositório GITHUB: https://github.com/gkooji/Lista-de-Tarefas-de-um-Programador
Link Vercel: https://lista-tarefas-one-pi.vercel.app/