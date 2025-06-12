import './App.css';
import {useSelector , useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=> {
      if (state.value < 1) {
       return  "no number found";
      } 
    return state.value})
    const increase =()=>{
      const action = {type:"increase", payload: 5}
      dispatch(action)
    }
    const decrease =()=>{
      const action = {type:"decrease", payload: 2}
      dispatch(action)
    }
  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: {counter}</div>;
      <div>
        <button className='btn' onClick={increase}>increase +</button>
        <button className='btn' onClick={decrease}>decrease -</button>
      </div>
      <div>
        <button className='btn'>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
