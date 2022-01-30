const addButton = (data) => {
    return {
        type: "ADD_BUTTON",
        payload: data
    }
}
const addToCalendar = (id) => {
    return {
        type: "ADD_TO_CALENDAR",
        payload: id
    }
}


export {addButton, addToCalendar}