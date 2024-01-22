import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Header from './components/Header'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
