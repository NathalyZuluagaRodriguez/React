import { Home } from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import {Class1} from './components/Class1/Class1'
import {NotFound} from './components/NotFound/NotFound'

export const App= ()=>{
  return(
    // FRAGMENT <> ETIQUETAS VACIAS PARA ENCAPSULAR 
      <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Class1" element={<Class1 />}/>
          <Route path="*" element={<NotFound />}/>

        </Routes>
        <Home/>
      
      </>

  )};


