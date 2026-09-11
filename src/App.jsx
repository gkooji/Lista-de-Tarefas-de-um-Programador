import { useState, useCallback } from 'react'
import useLocalStorage from './useLocalStorage'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import TaskList from './components/TaskList'


function App() {

  const [tarefas, setTarefas] = useLocalStorage('dev-todo:tarefas', [])


  const [filtro, setFiltro] = useState('todas')


  const handleAddTask = useCallback((novaTarefa) => {

    setTarefas((prev) => [novaTarefa, ...prev])
  }, [setTarefas])


  const handleToggleTask = useCallback((id) => {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    )
  }, [setTarefas])


  const handleRemoveTask = useCallback((id) => {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id))
  }, [setTarefas])


  const total = tarefas.length
  const concluidas = tarefas.filter((t) => t.concluida).length
  const pendentes = total - concluidas

  const contadoresFiltro = {
    todas: total,
    pendentes,
    concluidas,
  }

  return (
    <div className="app-shell">
      <Header total={total} pendentes={pendentes} concluidas={concluidas} />

      <main className="app-main">
        <TaskForm onAddTask={handleAddTask} />

        <section className="task-section">
          <TaskFilters
            filtroAtivo={filtro}
            onChangeFilter={setFiltro}
            contadores={contadoresFiltro}
          />

          <TaskList
            tarefas={tarefas}
            filtro={filtro}
            onToggle={handleToggleTask}
            onRemove={handleRemoveTask}
          />
        </section>
      </main>

      <footer className="app-footer">
        <span className="comment">// dados salvos automaticamente no localStorage do navegador</span>
      </footer>
    </div>
  )
}

export default App