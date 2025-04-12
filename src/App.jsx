import { Result } from './components/result/Result'
import { Summary } from './components/summary/Summary'

function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <main className="max-w-[375px] bg-white layout">
        <Result />
        <Summary />
      </main>
    </div>
  )
}

export default App
