import Header from './components/Header'
import './styles/index.scss'
import NavLeft from './components/NavLeft'
import Titres from './components/Titres'
import ActiviteQuotidienne from './components/ActiviteQuotidienne'

function App() {
  return (
    <div>
      <Header />
      <main>
        <NavLeft />
        <section>
          <Titres />
          <div className="resultat">
            <div className="graphiques">
              <ActiviteQuotidienne />
            </div>
            <div className="iconeValeur"></div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default App
