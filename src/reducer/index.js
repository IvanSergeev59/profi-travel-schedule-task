import updateSchedule from "./updateSchedule"

const reducer = (state, action) => {
    return {
        schedule: updateSchedule(state, action)
    }
}

export default reducer