import TaskItem from './TaskItem'

/**
 * TaskList
 * -----------------------------------------------------------------------
 * Aqui usamos dois métodos de array centrais no React:
 *
 * 1) FILTER — a partir da lista completa de tarefas e do filtro ativo
 *    ("todas" | "pendentes" | "concluidas"), geramos um novo array
 *    apenas com as tarefas que passam na condição. `filter` nunca
 *    modifica o array original, ele retorna um array novo — essencial
 *    em React, onde o estado deve ser tratado como imutável.
 *
 * 2) MAP — depois de filtrar, transformamos cada objeto "tarefa" em um
 *    componente <TaskItem />. É assim que o React costuma renderizar
 *    listas: iterar os dados com map e devolver JSX para cada item.
 *    A prop `key` é obrigatória e deve ser um valor único e estável
 *    (usamos o id da tarefa) para o React otimizar a renderização.
 */
function TaskList({ tarefas, filtro, onToggle, onRemove }) {
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'pendentes') return !tarefa.concluida
    if (filtro === 'concluidas') return tarefa.concluida
    return true // filtro === 'todas'
  })

  if (tarefasFiltradas.length === 0) {
    return (
      <div className="empty-state">
        <p className="comment">// nenhuma tarefa encontrada neste filtro</p>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tarefasFiltradas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          tarefa={tarefa}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

export default TaskList