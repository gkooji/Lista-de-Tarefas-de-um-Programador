import TaskItem from './TaskItem'


function TaskList({ tarefas, filtro, onToggle, onRemove }) {
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'pendentes') return !tarefa.concluida
    if (filtro === 'concluidas') return tarefa.concluida
    return true 
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