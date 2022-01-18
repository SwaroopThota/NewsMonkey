import Navbar from "./Navbar";
import React,{ useState } from 'react'
import { Routes, Route } from "react-router-dom";
import News from "./News";
 const App = ()=>{
    const catagories = ["","business","entertainment","health","science","sports","technology"];
    const [mode, setMode] = useState('light');
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-dark');
      }else{
        setMode('light');
        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-light');
      }
    }
    return (
      <>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <Routes>
            {
              catagories.map(
                (elem) => {
                  return (<Route exact path={`/${elem}`} 
                  element={ <News catagory={elem} key={elem} mode={mode}/> } key={elem} />);
                }
              )
            }
          </Routes>
        </div>
        <div className={`container text-${mode==='light'?'dark':'light'} text-center my-5`}>Made with ❤️ by TJ SWAROOP</div>
      </>
    );
}
export default App;