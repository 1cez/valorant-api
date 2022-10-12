import {useState,useEffect} from 'react'
import "./App.css"
import SearchField from './components/SearchField/SearchField'
import Card from './components/Card/Card'
import Logo from "./assets/valorant-logo.png"
function App() {

  const [agents,setAgents] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(()=> {
    fetch('https://valorant-api.com/v1/agents')
    .then(res => res.json())
    .then(data => setAgents(data.data))
  },[])

  const searchInput = (e) => {
    const inputToLower = e.target.value.toLowerCase()
    setSearchField(inputToLower)
  }

  const filteredAgents = agents.filter((agent) => (
    agent.displayName.toLowerCase().includes(searchField)
  ) )

  return (
    <div>
      <h1 className='title'><img src={Logo} alt="Valorant Logo" /></h1>
      <SearchField searchInput={searchInput} />
      <Card agents={agents}  filteredAgents={filteredAgents}/>
    </div>
  )
}

export default App