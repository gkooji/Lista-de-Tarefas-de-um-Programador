// Filtros de visualização da lista de tarefas.
const FILTERS = [
  { value: 'todas', label: 'all()' },
  { value: 'pendentes', label: 'pending()' },
  { value: 'concluidas', label: 'done()' },
]

/**
 * TaskFilters
 * -----------------------------------------------------------------------
 * Componente "burro" (sem estado próprio): apenas exibe os botões de
 * filtro e delega o clique para o pai via callback `onChangeFilter`.
 * Guardar o filtro ativo em App.jsx (e não aqui) é o que permite que
 * TaskList também saiba, sem precisar duplicar o estado.
 */
function TaskFilters({ filtroAtivo, onChangeFilter, contadores }) {
  return (
    <nav className="filters" aria-label="Filtros de tarefas">
      {FILTERS.map((filtro) => (
        <button
          key={filtro.value}
          type="button"
          className={`filter-btn ${filtroAtivo === filtro.value ? 'active' : ''}`}
          onClick={() => onChangeFilter(filtro.value)}
        >
          {filtro.label}
          <span className="filter-count">{contadores[filtro.value]}</span>
        </button>
      ))}
    </nav>
  )
}

export default TaskFilters