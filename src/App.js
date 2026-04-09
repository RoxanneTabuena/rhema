import { Root } from './components/Root/Root'
// about tree
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
// team tree
import { Team } from './components/Team/Team';
import { Careers } from './components/Team/Careers/Careers'
import { JoinRhema } from './components/Team/JoinRhema/JoinRhema';
// live sound tree
import { Livesound } from './components/Livesound/Livesound';

// backline tree
import { Rentals} from './components/Rentals/Rentals';
import { Inventory } from './components/Rentals/Inventory';
// booking tree
import { Booking } from './components/Contact/Booking/Booking';
import { BookLiveSound } from './components/Contact/Booking/Livesound/BookLiveSound';
import { Request } from './components/Contact/Booking/Request/Request'
// contact tree
import { Contact } from './components/Contact/Contact';
import { GeneralInquiry } from './components/Contact/GeneralInquiry/GeneralInquiry';
// router 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// cart
import { useReducer } from "react";
import { CartContext } from './context/CartContext';
import { cartReducer, initialCartState } from "./reducers/cartReducer";
// menu
import { MenuContext } from './context/MenuContext';
import { menuReducer, initialMenuState } from "./reducers/menuReducer";
import './App.css';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element= { <Home />}/>
      <Route path='about' element= { <About />}/>
      <Route path='ourExperts' element={<Team/>}/>
      <Route path='purpleShirts' element={<Careers/>}/>
      <Route path='joinRhema' element= { <JoinRhema />}/>
      <Route path='livesound' element= { <Livesound />}/>
      <Route path='rentals' element= { <Rentals />}/>
      <Route path='inventory' element= { <Inventory />}/>
      <Route path='inventory/:category' element= { <Inventory />}/>
      <Route path='inventory/:category/:brand' element= { <Inventory />}/>
      <Route path='inventory/:category/:brand/:product' element= { <Inventory />}/>
      <Route path='booking' element= { <Booking />}/>
      <Route path='bookLiveSound' element= { <BookLiveSound />}/>
      <Route path='rentalRequest' element= { <Request />}/>
      <Route path='contact' element= { <Contact />}/>
      <Route path='generalInquiry' element= { <GeneralInquiry />}/>

    </Route>
  ))
  const [ cartState, cartDispatch ] = useReducer( cartReducer, initialCartState)
  const [ menuState, menuDispatch ] = useReducer( menuReducer, initialMenuState)
  return (
    <MenuContext.Provider value={[menuState, menuDispatch]}>
      <CartContext.Provider value={[cartState, cartDispatch]}>
        <RouterProvider router={router}/>
      </CartContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
