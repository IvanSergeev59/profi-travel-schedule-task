import {buttonList} from "./initialState"
const updateButtons = (state, action) => {
    if (state ===undefined) {
        return {
            buttonList: buttonList
        }
    }
    const buttonHandler = () => {
        let {buttonList} = state.buttons;
        
            if(!buttonList.added) {
                buttonList.text = 'Добавлено';
                buttonList.style = 'added';
                buttonList.added = true;
            }
            else {
                buttonList.text = 'Добавить';
                buttonList.style = '';
                buttonList.added = false;
            }   
            return buttonList       
      }
      switch (action.type) {        
        case "ADD_BUTTON":              
            return {               
                buttonList: buttonHandler()                 
            }

        default: return state.schedule
    
    }
}

export default updateButtons