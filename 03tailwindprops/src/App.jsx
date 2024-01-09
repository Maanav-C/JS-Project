import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
        <div className='bg-green-400 text-black p-4 rounded-xl mb-4'>Test TailWind</div>
        <Card UserName='Maanav' btnText='click Me'/>
        <Card UserName='Anushka' />
    </>
  )
}

export default App
