import { useState } from 'react'

// Níveis de prioridade disponíveis para as tarefas.
const PRIORITIES = [
  { value: 'alta', label: 'alta' },
  { value: 'media', label: 'média' },
  { value: 'baixa', label: 'baixa' },
]

// Estrutura inicial (vazia) do formulário. Ficar fora do componente
// evita recriar o objeto a cada render.
const EMPTY_FORM = {
  nome: '',
  data: '',
  descricao: '',
  prioridade: 'media',
}

/**
 * TaskForm
 * -----------------------------------------------------------------------
 * Formulário controlado (controlled component): cada campo tem seu valor
 * lido do estado `form` e qualquer digitação dispara `onChange`, que
 * atualiza esse estado. Isso é o padrão do React para formulários.
 *
 * A prop `onAddTask` é um CALLBACK: uma função que o componente pai
 * (App) passou para cá. O TaskForm não sabe (nem precisa saber) o que
 * acontece com a tarefa depois — ele só "avisa" o pai chamando a função
 * recebida. Esse é o principal jeito de um filho se comunicar com o pai
 * em React, já que os dados fluem de cima para baixo (props) e os
 * eventos fluem de baixo para cima (callbacks).
 */
function TaskForm({ onAddTask }) {
  // useState guarda todos os campos do formulário em um único objeto.
  const [form, setForm] = useState(EMPTY_FORM)
  const [erro, setErro] = useState('')

  // Handler genérico: usa o atributo "name" do input para saber qual
  // campo do objeto `form` atualizar (evita escrever um handler por campo).
  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault() // evita o recarregamento padrão da página

    // Validação simples: nome e data são obrigatórios.
    if (!form.nome.trim() || !form.data) {
      setErro('preencha ao menos o nome e a data da tarefa.')
      return
    }

    // Monta o objeto da nova tarefa. O "id" usa Date.now() + random
    // para ter uma chave única sem precisar de biblioteca externa.
    const novaTarefa = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      nome: form.nome.trim(),
      data: form.data,
      descricao: form.descricao.trim(),
      prioridade: form.prioridade,
      concluida: false,
      criadaEm: new Date().toISOString(),
    }

    // Chama o callback recebido do componente pai (App), delegando a
    // ele a responsabilidade de atualizar a lista real de tarefas.
    onAddTask(novaTarefa)

    // Limpa o formulário e o erro após o envio.
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
            {/* PRIORITIES.map transforma o array de configuração em
                elementos <option> — outro uso do método map */}
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