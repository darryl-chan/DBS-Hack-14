import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Layout from './Layout'
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
