import './style.scss';
import Constants from "./Constants"
import experienceData from "../json/FileJson.json"

function App(){
    return(
        <div class="section">
      <div class="section__title">{Constants.ExperienceContstants.ExperienceSectionTitle}</div>
      {experienceData.map((itemMap) => (
            <div class="section__list">

            {itemMap.experienceData.map((item) => (

            <div class="section__list-item">
              <div class="left">
          <div class="name">{item.companyName}</div>
                <div class="addr">{item.companyLocation}</div>
                <div class="duration">{item.durationOfWork}</div>
              </div>
              <div class="right">
                <div class="name">{item.position}</div>
                <div class="desc">{item.descriptionOfPosition}</div>
              </div>
            </div>
            ))}
        </div>
      ))}
     
    </div>
    )
}

export default App