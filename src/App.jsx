import './App.css'
import Header from './components/Header/Header'
import { currentUser } from './data'

function App() {
	return (
		<>
			<Header currentUser={currentUser} />
		</>
	)
}

export default App
