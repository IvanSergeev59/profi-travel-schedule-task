import updateButtons from "./updateButtons"
import updateSchedule from "./updateSchedule"

const reducer = (state, action) => {
    return {
        schedule: updateSchedule(state, action),
        buttons: updateButtons(state, action)
    }
}

export default reducer