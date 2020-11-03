import './style.scss';
import Constants from "./Constants"
import educationData from "../json/FileJson.json"

function App(){
    return(
        <div>
            <div class="section__title">{Constants.EducationContstants.EducationSectionTitle}</div>
            {educationData.map((itemMap) => (
            <div class="section__list">

            {itemMap.educationData.map((item) => (

            <div class="section__list-item">
              <div class="left">
          <div class="name">{item.UniversityName}</div>
                <div class="addr">{item.UniversityLocation}</div>
                <div class="duration">{item.durationOfStudy}</div>
              </div>
              <div class="right">
                <div class="name">{item.StudentRole}</div>
                <div class="desc">{item.marks}</div>
              </div>
            </div>
            ))}
        </div>
      ))}
         </div>
        
    )
}

export default App