import './center1.css'
import Help from "../help/help"

const Center1 = ()=>{
    return (
        <div className="center-1">
        <div className="center-1-pDiv">We are a non-profit that partners with state criminal justice agencies to advance their use of data and reduce incarceration.</div>
        <div className="center-1-div">
          <div className="center-1-div-litl">
            <div className="center-1-num">1</div>
            <p>intake an agency’s disjointed data</p>
          </div>
          <hr />
          <div className="center-1-div-litl">
          <div className="center-1-num">2</div>
            <p>deploy tools for all levels of decision making</p>
          </div>
          <hr />
          <div className="center-1-div-litl">
          <div className="center-1-num">3</div>
            <p>improve outcomes for justice-impacted individuals</p>
          </div>
        </div>
        <Help/>
      </div>
)
}


export default Center1