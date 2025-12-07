import Heading from './component/Pages/Heading.jsx'
import Technical from './component/Pages/Technical.jsx'
import Project from './component/Pages/Project.jsx'
import Education from './component/Pages/Education.jsx'
import Aboutme from './component/Pages/Aboutme.jsx'
import './App.css'

function App() {


  return (
    <>
      <div className="app-container">
  <Heading />
  <Technical />
  <Project />
  <Education />
  <Aboutme />
</div>
    </>
  )
}

export default App
