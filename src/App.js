import Header from './components/Header'
import './styles/index.scss'
import NavLeft from './components/NavLeft'
import Titres from './components/Titres'

function App() {
  return (
    <div>
      <Header />
      <main>
        <NavLeft />
        <section>
          <Titres />
        </section>
      </main>
    </div>
  )
}
export default App
