import './style.scss';
import Constants from "./Constants"
import skillsData from "../json/FileJson.json"

function App(){
    return(
        <div>
            <div class="section__title">{Constants.skillsContstants.SkillsSectionTitle}</div>
            {skillsData.map((itemMap) => (
              <div class="skills">
                {itemMap.skillsData.map((item) => (
                  <div class="skills__item">
                    {item.leftSideList.map((leftMap) => (
                      <div class="left name" style= {{marginBottom: 10}}>
                      <p>{leftMap.nameOfSkill}</p>
                        </div>
                    ))}
                    </div>
                ))}
                </div>
            ))}
        </div>
    )
}

export default App