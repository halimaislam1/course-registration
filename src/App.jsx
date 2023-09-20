import './App.css'
// import Cart from './Components/Card/Cart'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Course from './Components/Course/Course'

function App() {
  return (
    <>
      <Course></Course>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
