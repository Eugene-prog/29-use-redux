import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch  = useDispatch();
  const cash = useSelector(state => state.cash);

  return (
    <div className="App">
        <div style={{display: "flex", flexDirection: 'column'}}>
          <h1>{cash}</h1>
          <div style={{display: "flex"}}>
            <button>Пополнить счет</button>
            <button>Снять со счета</button>
          </div>
        </div>
    </div>
  );
}

export default App;
