import './Main.css'
import navImgUp from '../assets/Frame (1).png'
import Help from "../help/help"

const Main = ()=>{
    return (
        <div class="nav">
        <div className="nav-up">
          <div className="nav-up-img">
            <img src={navImgUp} alt="" />
          </div>
          <div className="nav-up-text">
            <p class="nav-up-p">States</p>
            <p class="nav-up-p">Tools</p>
            <p class="nav-up-p">People</p>
            <p class="nav-up-p">Learn More</p>
            <p class="nav-up-p">Donate</p>
            <p class="nav-up-p">Log In</p>
          </div>
        </div>
        <div className="nav-cent">
          <p className="nav-cent-big-p">Every person who safely transitions back to the community is a step toward a better society.</p>
          <p className="nav-cent-noBig-p">Criminal justice leaders use Recidiviz to get a real-time picture of their system, diagnose issues, and drive meaningful changes.</p>
        </div>
        <button className='nav-but'>See our work in action</button>
        <p className='nav-bottom-p'>Trusted in:</p>
        <div className="nav-bottom">
          <div className="nav-bottom-litl"><p>Idaho</p></div>
          <div className="nav-bottom-litl"><p>Maine</p></div>
          <div className="nav-bottom-litl"><p>Missouri</p></div>
          <div className="nav-bottom-litl"><p>North Dakota</p></div>
          <div className="nav-bottom-litl"><p>Pennsylvania</p></div>
          <div className="nav-bottom-litl"><p>Tennessee</p></div>
        </div>
        
        <Help/>
      </div>

    )
}


export default Main