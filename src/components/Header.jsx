
function Header({ total, pendentes, concluidas }) {
  return (
    <header className="app-header">
      <div className="window-chrome">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="window-title">lista de tarefas</span>
      </div>

      <div className="header-content">
        <h1>
          <span className="prompt">$</span> Tarefas<span className="accent">Totais</span>()
        </h1>
        <p className="subtitle">gerenciador de tarefas para quem apenas vive no terminal</p>

        <div className="stats">
          <div className="stat">
            <span className="stat-value">{total}</span>
            <span className="stat-label">total</span>
          </div>
          <div className="stat">
            <span className="stat-value" style={{ color: 'var(--medium)' }}>{pendentes}</span>
            <span className="stat-label">pendentes</span>
          </div>
          <div className="stat">
            <span className="stat-value" style={{ color: 'var(--low)' }}>{concluidas}</span>
            <span className="stat-label">concluídas</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header