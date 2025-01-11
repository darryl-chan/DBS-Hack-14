import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Layout from './Layout'
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router';
import LoginPage from './pages/LoginPage';
import CreateRequest from './components/CreateRequest';
import EditRequest from './components/EditRequest';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
          </Route>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/createreq' element={<CreateRequest/>} />
          <Route path='/edit' element={<EditRequest/>} />
        </Routes>
      </BrowserRouter>
     
   
    </MantineProvider>
  )
}

export default App
