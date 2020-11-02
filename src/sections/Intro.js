import './style.scss';
import Constants from "./Constants"

const introArray = [
    {
        firstName: "FName",
        namePunctuation: ".",
        lastName: "LName",
        email: "some@gmail.com",
        phone: "0123456789",
        descriptionTitle: "Short Description/Goal",
        descriptionDetail: "I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow."
    }
]

function App() {
  return (
    <div >
        {introArray.map((item) => (
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
  );
}

export default App;
