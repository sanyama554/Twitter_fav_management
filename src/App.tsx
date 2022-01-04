import { useState } from 'react'
import logo from './logo.svg'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.VFC = () => {
const [count, setCount] = useState(0)

  return (
	<>
		<Header />
		<Main />
		<Footer />
	</>
  )
}

export default App
