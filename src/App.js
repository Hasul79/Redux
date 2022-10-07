import {useDispatch, useSelector} from 'react-redux';

function App() {
  const data = useSelector(state => state)
  const countries = useSelector(state => state.countries )
  const color = useSelector(state => state.color)
  const dispatch = useDispatch(); 


  const changeColor = () => {
    return {
      type: "CHANGE_COLOR" ,
      payload: "red",
    }
  }

  const filter = (value) => {
    return {
      type: "FILTER_TEXT" ,
      payload: value,
    }
  }
  
  const increment =()=> {
    return {
      type: "INCREMENT",
      // payload: data.count
    }
  }
  const decrement = () => {
    return {
      type: "DECREMENT",
      // payload: data.count
    }
  }
  const changeText = (value) => {
    return {
      type : "CHANGE_TEXT",
      payload: value,
    }
   }
  return (

    <div >
          <div>
          <button onClick={() =>dispatch (changeText("text2"))}>click me</button>
          <div>
          {data.text}
          </div>
    </div>

    
    <div>
            <button onClick = {() => dispatch(increment())}>Գումարել
              <div>
                {data.count1}
              </div>
            </button>
    </div>
    <div>
            <button onClick = {() => dispatch(decrement())}>Հանել
              <div>
                {data.count2}
              </div>
            </button>   
    </div>
    <div>
            <button onClick = {() => dispatch(decrement())}>reset
              <div>
                {data.count}
              </div>
            </button>
      </div>

      
      <div>
              <input onChange={(e) => dispatch(filter(e.target.value))} />
            <div>
            {
              countries.map(element => <div>{element}</div>)
            }
            </div>
        </div>

       <div style={{backgroundColor: color}}>ChangeColor</div>
          
          <button onClick={() => dispatch(changeColor())}>click</button>
       
    </div>
  );
}

export default App;
