import './styles/App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Applicant from './pages/Applicant'
import Contacts from './pages/Contacts'
import News from './pages/News'
import Student from './pages/Student'
import StartPage from './pages/StartPage'

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route  path="/" element={<StartPage />} />
        <Route  path="/applicant" element={<Applicant />} />
        <Route  path="/contacts" element={<Contacts />} />
        <Route  path="/news" element={<News />} />
        <Route  path="/student" element={<Student />} />
      </Routes>
    </div>
    
  )
}
export default App
