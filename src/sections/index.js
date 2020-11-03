import './style.scss';
import {One, Two, Three, Four, Five, Six} from './Imports'

function App() {
  return (
    <div class="container">
  
  <One />
   <div class="details">
    
    <div class="section">
        <Two />
        <Three />  
    </div>
     <div class="section">
      <Four />
    </div>
     <div class="section">
       <Five />
       </div>
     <div class="section">
     <Six />
     </div>
     </div>
  </div>
  );
}

export default App;
