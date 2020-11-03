import './style.scss';
import Constants from "./Constants"
import projectsData from "../json/FileJson.json"

function App(){
    return(
        <div>
            <div class="section__title">{Constants.ProjectsContstants.ProjectsSectionTitle}</div> 
            {projectsData.map((itemMap) => (
              <div>
                {itemMap.projectsData.map((item) => (
                    <div class="section__list">
                    <div class="section__list-item">
                      <div class="name">{item.projectName}</div>
                      <div class="text" style={{marginBottom: 25}}>{item.projectDesciption} </div>
                    </div>                    
                  </div>
                ))}
                </div>
            ))}
       
        </div>
    )
}

export default App