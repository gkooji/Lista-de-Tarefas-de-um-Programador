// Níveis de prioridade disponíveis para as tarefas.
const PRIORITIES = [
  { value: 'alta', label: 'alta' },
  { value: 'media', label: 'média' },
  { value: 'baixa', label: 'baixa' },
]

// Formata a data (YYYY-MM-DD do input) para o padrão brasileiro dd/mm/aaaa.
function formatarData(dataISO) {
  if (!dataISO) return ''
  const [ano, mes, dia] = dataISO.split('-')
  return `${dia}/${mes}/${ano}`
}

/**
 * TaskItem
 * -----------------------------------------------------------------------
 * Representa uma única linha da lista. Recebe a tarefa e dois CALLBACKS
 * (`onToggle` e `onRemove`), que na verdade são funções repassadas por
 * TaskList — que por sua vez as recebeu de App. Essa cadeia de callbacks
 * é comum em React: cada componente só conhece a função que precisa
 * chamar, sem saber como o estado é atualizado por trás.
 */
function TaskItem({ tarefa, onToggle, onRemove }) {
  const prioridadeInfo = PRIORITIES.find((p) => p.value === tarefa.prioridade)

  return (
    <li className={`task-item ${tarefa.concluida ? 'done' : ''}`}>
      <button
        type="button"
        className="checkbox"
        onClick={() => onToggle(tarefa.id)}
        aria-label={tarefa.concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
        title={tarefa.concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
      >
        {tarefa.concluida ? '[x]' : '[ ]'}
      </button>

      <div className="task-body">
        <div className="task-top-row">
          <span className="task-name">{tarefa.nome}</span>
          <span className={`priority-tag priority-${tarefa.prioridade}`}>
            @{prioridadeInfo?.label ?? tarefa.prioridade}
          </span>
        </div>

        {tarefa.descricao && <p className="task-desc">{tarefa.descricao}</p>}

        <span className="task-date">// prazo: {formatarData(tarefa.data)}</span>
      </div>

      <button
        type="button"
        className="btn-remove"
        onClick={() => onRemove(tarefa.id)}
        aria-label="Remover tarefa"
        title="Remover tarefa"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem