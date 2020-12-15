/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createManager } from './graphql/mutations'
import { listManagers } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialManagerState = {name:'', email:'', phoneNumber:''}

const App = () => {
  const [formState, setFormState] = useState(initialManagerState)
  const [managers, setManagers] = useState([])

  useEffect(()=>{
    fetchManagers()
  })
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  async function fetchManagers() {
    try{
      const managersData = await API.graphql(graphqlOperation(listManagers))
      const managers = managersData.data.listManagers.items
      setManagers(managers)
    }
    catch(err){
      console.log('error fetchManagers: ', err)
    }
  }

  async function addManager(){
    try{
      if(!formState.name || !formState.email || !formState.phoneNumber ) return
      const manager = {...formState}
      setManagers([...managers, manager])
      setFormState(initialManagerState)
      await API.graphql(graphqlOperation(createManager, {input: manager}))
    }
    catch(err){
      console.log('error addManager: ', err)
    }
  }

  return(
    <div style={styles.container}>
      <h2>Building Managers</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={formState.email}
        placeholder="Email"
      />
      <input
        onChange={event => setInput('phoneNumber', event.target.value)}
        style={styles.input}
        value={formState.phoneNumber}
        placeholder="Phone Number"
      />
      <button style={styles.button} onClick={addManager}>Create Manager</button>
      {
        managers.map((manager, index) => (
          <div key={manager.id ? manager.id : index} style={styles.manager}>
            <p style={styles.managerName}>{manager.name}</p>
            <p style={styles.managerInfo}>{manager.email}</p>
            <p style={styles.managerInfo}>{manager.phoneNumber}</p>
          </div>
        ))
      }
    </div>
  )

}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  manager: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  managerName: { fontSize: 20, fontWeight: 'bold' },
  managerInfo: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App