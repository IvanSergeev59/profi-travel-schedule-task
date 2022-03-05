import {tableBlocks, list} from "./initialState"
const updateSchedule = (state, action) => {  
    
    if (state ===undefined) {
        return {
            
            list: list,
            tableBlocks: tableBlocks
        }
    }
                
      const addToCalendar = (id) => {
            let {tableBlocks} = state.schedule;
            tableBlocks.forEach(function(item, i) {
                // eslint-disable-next-line eqeqeq
                if (item.buttonId1 == id) {
                    console.log(i)
                    if(tableBlocks[i].buttonAdded1 === true) {
                        console.log(i)
                        tableBlocks[i].buttonText1 = 'Добавить<br> в календарь';
                        tableBlocks[i].buttonAdded1 = false;
                        tableBlocks[i].buttonImage1 = ''
                    } 
                    else {
                        tableBlocks[i].buttonText1 = 'В календаре';
                        tableBlocks[i].buttonAdded1 = true;
                        tableBlocks[i].buttonImage1 = 'image-added'
                    }
                }
                // eslint-disable-next-line eqeqeq
                if (item.buttonId2 == id) {
                    if(tableBlocks[i].buttonAdded2 === true) {
                        tableBlocks[i].buttonText2 = 'Добавить<br> в календарь';
                        tableBlocks[i].buttonAdded2 = false;
                        tableBlocks[i].buttonImage2 = ''
                    } 
                    else {
                        tableBlocks[i].buttonText2 = 'В календаре';
                        tableBlocks[i].buttonAdded2 = true;
                        tableBlocks[i].buttonImage2 = 'image-added'
                    }
                }
            })
            return tableBlocks
      }

   

    switch (action.type) {       
      
        case "ADD_TO_CALENDAR":
            return {
                ...state.schedule,
                tableBlocks: addToCalendar(action.payload)
            }

        default: return state.schedule
    
    }
}
export default updateSchedule