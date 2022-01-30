import down from "../../images/down.png"

const Header = (props) => {
    const {showList, changeListShowed} = props;
    const onButtonClick = () => {
        showList ? changeListShowed(false) : changeListShowed(true)
    }
    let listName = showList ? 'Список' : 'Таблица'
    return (
        <header className="header">
            <h2 className="not-mobile">Программа выставки</h2>
            <h2 className="mobile">Деловая программа выставки</h2>
            <button onClick={onButtonClick}><p>Вид расписания: <span className="button-table">{listName}</span></p><img src={down} alt="down"></img></button>
        </header>
    )
}

export default Header