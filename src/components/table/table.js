import React from "react";
import { connect } from "react-redux";
import { addToCalendar } from "../../actions";
const Table = (props) => {
    const {tableBlocks} = props.schedule;
    const {addToCalendar} = props;
    const TableContainer = (props) => {
        const {arr} = props;
        return arr.map(item => {
            return (
                <div className="table__blocks_block" key={item.id}>
                    <div className={`block__top ${item.yellow}`}><p>{item.date}</p></div>
                    <div className="block__container">
                        <h3 className={item.time1[2]}>{item.time1[0]}<span> {item.time1[1]}</span></h3>
                        <p><a className="block__container_office" href="/#">{item.office1}</a></p>
                        <p>{item.p1}</p>
                        <button className={item.login1}>Перейти в систему</button>
                        <div className={`block__container_add-to-calendar ${item.button1}`}>
                            <p className="add-to-calendar_p" dangerouslySetInnerHTML={{__html: `${item.buttonText1}`}}></p><div className={`add-to-calendar_image ${item.buttonImage1}`} id={item.buttonId1} onClick={(event) => addToCalendar(event.target.id)}></div>
                        </div>
                    </div>
                    <div className="block__container">
                        <h3 className={item.time2[2]}>{item.time2[0]}<span> {item.time2[1]}</span></h3>
                        <p><a className="block__container_office" href="/#">{item.office2}</a></p>
                        <p>{item.p2}</p>
                        <button className={item.login2}>Перейти в систему</button>
                        <div className={`block__container_add-to-calendar ${item.button2}`} >
                            <p className="add-to-calendar_p" dangerouslySetInnerHTML={{__html: `${item.buttonText2}`}}></p><div className={`add-to-calendar_image ${item.buttonImage2}`}  id={item.buttonId2} onClick={(event) => addToCalendar(event.target.id)}></div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <section className="table">
            <div className="table__order">
                <ul><p>Порядок:</p>
                    <li><input type="radio" name="week" id="radio-1" defaultChecked></input><label htmlFor="radio-1">1-я неделя</label></li>
                    <li><input type="radio" name="week" id="radio-2"></input><label htmlFor="radio-2">2-я неделя</label></li>
                    <li><input type="radio" name="week" id="radio-3"></input><label htmlFor="radio-3">3-я неделя</label></li>
                </ul>                
            </div>
            <div className="table__blocks">
                <TableContainer arr={tableBlocks} />
             </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps =(dispatch) => {   
       
    return {
      addToCalendar: (id) => dispatch(addToCalendar(id)),
     
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)