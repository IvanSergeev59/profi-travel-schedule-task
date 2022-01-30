import React, { Fragment, useState } from "react"
import Header from "../header"
import Table from "../table"
import List from "../list"

const SchedulePage = () => {

    // if true render List else Table
    const [showList, changeListShowed] = useState(true);

    //user change type of main content
    const TableOrList = showList ? <List /> : <Table />
        
    return (
        <Fragment>
            <Header showList={showList} changeListShowed={changeListShowed}/>
            {TableOrList}
        </Fragment>
    )
}

export default SchedulePage