import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import  {  Container } from './components/index'
import  {Header ,Footer } from './sections/index'
import {Home , Contact} from './Pages/index'
import State from './hooks/State/State';
import Effect from './hooks/Effect/Effect';
import { Ref } from './hooks/Ref/Ref';
import Memo from './hooks/Memo/Memo';
import { Callback } from './hooks/Callback/Callback';
import Context from './hooks/Context/Context';
import Reducer from './hooks/Reducer/Reducer';


const App = ()=> {
    return (
        <>
        <Router>
            <Header ></Header>
        <Container>

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Contact' element={<Contact />}/>
        </Routes>
        {/* <State></State>
        <Effect></Effect>
        <Ref></Ref> */}
        {/* <Memo></Memo> */}
        {/* <Callback></Callback> */}
        {/* <Context></Context> */}
        <Reducer></Reducer>
        </Container>
        <Footer></Footer>
        </Router>
        </>
    )
}



export default App