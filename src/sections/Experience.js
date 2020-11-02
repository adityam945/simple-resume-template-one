import './style.scss';

function App(){
    return(
        <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">company name</div>
            <div class="addr">Location</div>
            <div class="duration">(duration)Jan 20xx - Feb 20xx</div>
          </div>
          <div class="right">
            <div class="name">developer (position)</div>
            <div class="desc">did this(role description)</div>
          </div>
        </div>
                <div class="section__list-item">
          <div class="left">
          <div class="name">company name2</div>
            <div class="addr">Location</div>
            <div class="duration">(duration)Jan 20xx - Feb 20xx</div>
          </div>
          <div class="right">
            <div class="name">developer (position)</div>
            <div class="desc">did this(role description)</div>
          </div>
        </div>

      </div>
    </div>
    )
}

export default App