const initialState = {
    text: "text1",
    count1: 0,
    count2: 0,
    countries: ["Armenia", "Georgia","America" , "Ukraine", "Russia", "China"],
    color: "blue"

}
function reducer(state = initialState, action){
    switch(action.type) {
        case "CHANGE_TEXT": 
        // console.log(action);
        // console.log(state);
          return {
            ...state, 
            text: action.payload,
          };

          case "INCREMENT":
          return {
            ...state, 
            count1: state.count1 + 1,
          };

          case "DECREMENT":
          return {
            ...state, 
            count2: state.count2 - 1,
          };
          case 'RESET':
                return {
                     ...state,
                  count: 0
                }

          case 'FILTER_TEXT':
             return {
               ...state,
                   countries: action.payload === "" ? initialState.countries : state.countries.filter(t => t.toLowerCase().indexOf(action.payload) > -1),              };
                  
                  
           case 'CHANGE_COLOR':
             return {
                ...state,
              color: action.payload
           }
  
  
          default: 
       return state;
    }
}

export {reducer} ;