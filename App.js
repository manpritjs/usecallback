import logo from './logo.svg';
import './App.css';
import {useState, useCallback, memo} from 'react'

const MyComponent = memo(function MyComponent({fx}){
  console.log("Render")
  return <p>Hii</p>
})


function App() {
  const [sw, setSw] = useState(5)
  const [st, setSt] = useState(1)
  const increment = useCallback(function increment(){
    return st+1;
  }, [st])
  return (
    <>
      <button type="button" onClick={()=>setSw(sw+1)}>Click</button>
      <MyComponent fx={increment}/>
    </>
  );
}
export default App;
