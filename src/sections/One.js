import './style.scss';
import Constants from "./Constants"
import introData from "../json/FileJson.json"


function App() {
  return (
    <div>
        {introData.map((itemMap) => (
          <div>
            {itemMap.introData.map((item) =>(
              <div class="header">
              <div class="full-name">
                <span class="first-name">{item.firstName} </span> 
                <span class="first-name">{item.namePunctuation}</span> 
                <span class="last-name">{item.lastName}</span>
              </div>
              <div class="contact-info">
                <span class="email">{Constants.IntroContstants.email} </span>
                <span class="email-val">{item.email}</span>
                <span class="separator"></span>
                <span class="phone">{Constants.IntroContstants.phone} </span>
                <span class="phone-val">{item.phone}</span>
              </div>
              
              <div class="about">
                <span class="position">{item.descriptionTitle}</span>
                <span class="desc">
                {item.descriptionDetail}
                </span>
              </div>
            </div>
            ))}
            
          </div>
        ))}
  </div>
  );
}

export default App;
