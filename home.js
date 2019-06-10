import React from 'react'

class Home extends React.Component {

  render() {
      return <div className="homePage">
        <h1>Hunter XO</h1>
        <div>
          <div className="home-center-container">
            <div className="xo-statement">"In a world where supernatural threats wait in the shadows, a band of misfits with unusual abilities attempt to fight back, blurring the lines between good and evil"</div>
            <div>
             <img src={require("./images/image01.png")} alt="Image01" />
             <img src={require("./images/image02.png")} alt="Image02" />
             <img src={require("./images/image03.png")} alt="Image03" />
             <img src={require("./images/image04.png")} alt="Image04" />
           </div>  
          </div>
        </div>
        </div>
  }
}
export default Home