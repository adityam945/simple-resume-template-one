import './style.scss';

function App(){
    return(
        <div>
            <div class="section__title">Education</div>
        <div class="section__list">
          <div class="section__list-item">
            <div class="left">
              <div class="name">Universtity Name</div>
              <div class="addr">Location</div>
              <div class="duration">Jan 20xx - Feb 20xx</div>
            </div>
            <div class="right">
              <div class="name">undergraduate at cs(major)</div>
              <div class="desc">GPA(cgpa)</div>
            </div>
          </div>
          <div class="section__list-item">
            <div class="left">
            <div class="name">High school</div>
              <div class="addr">Location</div>
              <div class="duration">Jan 20xx - Feb 20xx</div>
            </div>
            <div class="right">
              <div class="name">High school</div>
              <div class="desc">GPA(cgpa)</div>
            </div>
          </div>
  
        </div>
        </div>
        
    )
}

export default App