import './style.scss';
import Constants from "./Constants"
import interestsContstants from "../json/FileJson.json"


function App(){
    return(
        <div>
            <div class="section__title">
       {Constants.interestsContstants.interestsSectionTitle}
       </div>
       <div class="section__list">
       {interestsContstants.map((itemMap) => (
         <div class="section__list-item name">         
                         {itemMap.interestsData.map((item) =>(
                             <p>
                                 {item.nameOfItem}
                             </p>
))}
          </div>
           ))}
       </div>
        </div>
    )
}

export default App