# 🕒 Chronos Pomodoro

> Este projeto faz parte do conteúdo do **Curso de React JS 19 e Next.js 15** do
> instrutor **Luiz Otávio Miranda**.

O **Chronos Pomodoro** é uma aplicação web de produtividade desenvolvida com
**React + TypeScript** e empacotada com **Vite**, que implementa a **Técnica
Pomodoro** para otimizar o foco e o gerenciamento de tempo.

Este repositório representa uma **versão de portfólio** do projeto, com foco em
**simplicidade, acessibilidade e experiência responsiva**. O app permite iniciar
ciclos de trabalho e pausa, registrar histórico de tarefas e personalizar os
tempos de foco e descanso.

---

## 🚀 Visão Geral

- ⏱️ **Ciclos automatizados**: trabalho, pausa curta e pausa longa (sequência de
  8 ciclos).
- 📜 **Histórico de tarefas** com ordenação e status (completa, interrompida,
  abandonada).
- 🔔 **Notificações e confirmações** com `react-toastify`.
- ⚙️ **Contador em Web Worker**, garantindo uma UI leve e responsiva.
- 🌗 **Tema claro/escuro** com persistência via `localStorage`.

---

## 🧩 Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite**
- **date-fns**
- **react-toastify**
- **lucide-react**

---

## 🏗️ Estrutura do Projeto

```bash
chronos-pomodoro/
│
├── index.html                     # Ponto de entrada
├── src/
│   ├── main.tsx                   # Bootstrap da aplicação
│   ├── App.tsx                    # Composição de providers e rotas
│   ├── components/                # Componentes reutilizáveis (CountDown, MainForm, Menu, etc.)
│   ├── pages/                     # Páginas e layouts (Home, History, Settings, AboutPomodoro)
│   ├── contexts/TaskContext/      # Contexto, reducer e provider de tarefas
│   ├── models/                    # Modelos (TaskModel, TaskStateModel)
│   ├── utils/                     # Funções auxiliares (formatadores, lógica de ciclo, ordenação, áudio)
│   └── workers/                   # Timer com Web Worker (timerWorker.js, TimerWorkerManager.ts)
---
```

## 🧠 Modelos de Dados (Resumo)

### `TaskModel`

```ts
{
  id: string,
  name: string,
  duration: number, // minutos
  startDate: number, // timestamp em ms
  completeDate: number | null,
  interruptDate: number | null,
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime'
}

```

### `TaskStateModel`

```ts
{
  tasks: TaskModel[],
  secondsRemaining: number,
  formattedSecondsRemaining: string,
  activeTask: TaskModel | null,
  currentCycle: number,
  config: { workTime, shortBreakTime, longBreakTime }
}
```

## 🧰 Requisitos

- **Node.js 18** ou superior
- **npm**, **yarn** ou **pnpm**

---

## ⚙️ Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/PatrickyLucas/chronos-pomodoro.git
   cd chronos-pomodoro

   ```

2. **Instale as dependências:**

```
npm install
```

3. **Execute o ambiente de desenvolvimento:**

```
npm run dev
```

Em seguida, abra a URL gerada pelo Vite (geralmente http://localhost:5173).

## 📜 Scripts Disponíveis

| Comando           | Descrição                                                                         |
| ----------------- | --------------------------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento (Vite).                                      |
| `npm run build`   | Compila o projeto TypeScript e gera o build de produção (`tsc -b && vite build`). |
| `npm run preview` | Executa a pré-visualização do build de produção.                                  |
| `npm run lint`    | Analisa o código com o ESLint.                                                    |

---

## 🧩 Notas Técnicas

- O timer é executado em **`src/workers/timerWorker.js`**, encapsulado pela
  classe **`TimerWorkerManager`**.
- O áudio de notificação é carregado via **`src/utils/loadBeep.ts`**.
- A ordenação do histórico é implementada em **`src/utils/sortTasks.ts`**.

---

## 🧪 Fluxos Principais para Teste

1. Inicie o app com `npm run dev`.
2. Crie uma nova tarefa e observe o contador em tempo real.
3. Interrompa a tarefa e confira o histórico em **History**.
4. Altere as configurações em **Settings** e verifique a persistência.

---

## 🤝 Como Contribuir

1. Abra uma _issue_ descrevendo sua sugestão ou bug.
2. Crie uma branch a partir de **main** (ex.: `feature/nome-da-feature`).
3. Faça commits claros e objetivos.
4. Abra um _Pull Request_ detalhando as alterações e passos para teste.

---

## 📚 Licença

Este projeto é de **uso educacional** e faz parte do aprendizado no **curso de
React JS 19 e Next.js 15**, ministrado por **Luiz Otávio Miranda**.
