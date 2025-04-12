import { Result } from './components/result/Result'
import { Summary } from './components/summary/Summary'

function App() {

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <main className="max-w-[375px] bg-white layout">
        <Result />
        <Summary />
      </main>
      <footer className='mt-5 font-medium text-xs text-gray-600 opacity-40 hover:opacity-100'>Design by 
        <a href="https://github.com/werliton/">@werliton</a></footer>
    </div>
  )
}

export default App
