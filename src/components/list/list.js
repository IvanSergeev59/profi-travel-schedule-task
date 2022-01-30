import Programm from "../programm"
import React, { useState} from "react"
import { connect } from "react-redux";
import { addButton } from "../../actions";

const List = (props) => {
    const {addButton} = props
    const {buttonListText, list, buttonListStyle} = props.schedule
    const [showProgramm, changeShowedProgramm] = useState(false);
    const showedProgramm = showProgramm ? <Programm /> : null
    function onClickProgramm() {
        showedProgramm ? changeShowedProgramm(false) : changeShowedProgramm(true)
    }

    const ListSlider = (props) => {
        const {arr} = props;
        return arr.map(item => {
            return (
                <li key={item.id}>
                    <img className="list__slider_image" src={item.photo} alt="person"></img>
                    <div className="list__slider_cart-text" >
                        <h4>{item.h4}</h4>
                        <p>{item.p}</p>
                    </div>
                </li>
            )
        })
    }

    const ListContainer = () => {
        const [carousel, onCarouselClick] = useState(0)
        const onCarouselArrow = () => {
            let carouselUl = document.getElementsByName('carousel');
            let wi = carouselUl[0].offsetWidth/10;
            carousel+(wi*5)<0 ? onCarouselClick(0) : onCarouselClick((carousel - wi));            
            carouselUl[0].style.marginLeft = `${carousel}px`;
        }
         return list.map((item) => {         
            return (
                <div className="list" key={item.id}>
                <h3>{item.h3}</h3>
                <div className="list__main-block">                
                    <div className="list__main-block_time">
                        {item.time}<span> МСК</span>
                    </div>
                    <div className="list__main-block_middle-block">
                        <p><a href="/#">{item.middleBlockP1}</a></p>
                        <p><a href="/#">{item.middleBlockP2}</a></p>
                        <button onClick={onClickProgramm}>Программа</button>
                        {showedProgramm}
                    </div>
                    <div className="list__main-block_right-block">
                        <button className={`button buttonListStyle ${buttonListStyle}`} onClick={addButton}><p className="button-p">{buttonListText}</p> </button>
                        <p className="right-block-button">{item.membersCount} {item.members}</p>
                    </div>
                    <div className="list__hr">
                    <p>{item.hr}</p>
                    <div></div>
                </div>
                <div className="list__slider">
                    <ul name="carousel">   
                        <ListSlider arr={item.slider}/>
                    </ul>
                    <div className="list__slider_arrow" onClick={onCarouselArrow}></div>
                </div>
                </div>
              
            </div>
            )
        })
    }
    
    
    return (
      <ListContainer />
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps =(dispatch) => {   
       
    return {
      addButton: (data) => dispatch(addButton(data)),
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)