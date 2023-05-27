import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch  = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = () => dispatch({type: "ADD_CASH", payload: 1});
  const getCash = () => dispatch({type: "GET_CASH", payload: 1});

  return (
    <div className="App">
        <div style={{display: "flex", flexDirection: 'column'}}>
          <h1>{cash}</h1>
          <div style={{display: "flex"}}>
            <button onClick={()=>{addCash()}}>Пополнить счет</button>
            <button onClick={()=>{getCash()}}>Снять со счета</button>
          </div>
        </div>
    </div>
  );
}

export default App;
