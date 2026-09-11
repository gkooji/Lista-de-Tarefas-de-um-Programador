
const FILTERS = [
  { value: 'todas', label: 'all()' },
  { value: 'pendentes', label: 'pending()' },
  { value: 'concluidas', label: 'done()' },
]


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