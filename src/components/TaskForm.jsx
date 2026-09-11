import { useState } from 'react'


const PRIORITIES = [
  { value: 'alta', label: 'alta' },
  { value: 'media', label: 'média' },
  { value: 'baixa', label: 'baixa' },
]


const EMPTY_FORM = {
  nome: '',
  data: '',
  descricao: '',
  prioridade: 'media',
}


function TaskForm({ onAddTask }) {

  const [form, setForm] = useState(EMPTY_FORM)
  const [erro, setErro] = useState('')


  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault() 

  
    if (!form.nome.trim() || !form.data) {
      setErro('preencha ao menos o nome e a data da tarefa.')
      return
    }

    const novaTarefa = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      nome: form.nome.trim(),
      data: form.data,
      descricao: form.descricao.trim(),
      prioridade: form.prioridade,
      concluida: false,
      criadaEm: new Date().toISOString(),
    }


    onAddTask(novaTarefa)


    setForm(EMPTY_FORM)
    setErro('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="nome">
          <span className="comment">// nome</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="ex: corrigir bug no endpoint de login"
          value={form.nome}
          onChange={handleChange}
        />
      </div>

      <div className="form-row form-row-split">
        <div className="form-col">
          <label htmlFor="data">
            <span className="comment">// prazo</span>
          </label>
          <input
            id="data"
            name="data"
            type="date"
            value={form.data}
            onChange={handleChange}
          />
        </div>

        <div className="form-col">
          <label htmlFor="prioridade">
            <span className="comment">// prioridade</span>
          </label>
          <select
            id="prioridade"
            name="prioridade"
            value={form.prioridade}
            onChange={handleChange}
          >
            {PRIORITIES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="descricao">
          <span className="comment">// descrição (opcional)</span>
        </label>
        <textarea
          id="descricao"
          name="descricao"
          rows={2}
          placeholder="detalhes, contexto ou link do card no board"
          value={form.descricao}
          onChange={handleChange}
        />
      </div>

      {erro && <p className="form-error">⚠ {erro}</p>}

      <button type="submit" className="btn btn-primary">
        + adicionar tarefa
      </button>
    </form>
  )
}

export default TaskForm