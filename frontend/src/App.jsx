import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'; 
import LoginPage from './components/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <LoginPage />
    </MantineProvider>
  )
}

export default App
