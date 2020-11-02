import './style.scss';
import {Intro, Experience, Education, Projects, Skills, Intrests} from './Imports'

function App() {
  return (
    <div class="container">
  
  <Intro />
   <div class="details">
    
    <div class="section">
        <Experience />
        <Education />  
    </div>
     <div class="section">
      <Projects />
    </div>
     <div class="section">
       <Skills />
       </div>
     <div class="section">
     <Intrests />
     </div>
     </div>
  </div>
  );
}

export default App;
