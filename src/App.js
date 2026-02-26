import { Root } from './components/Root/Root'
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { LiveSound } from './components/LiveSound/LiveSound';
import { Services } from './components/Services/Services';
import { Service } from './components/Services/Service/Service';
import { BacklineRentals} from './components/BacklineRentals/BacklineRentals';
import { Product } from './components/BacklineRentals/Product/Product'
import { OurExperts } from './components/OurExperts/OurExperts';
import { Expert } from './components/OurExperts/Expert/Expert';
import { Contact } from './components/Contact/Contact';
import { JoinRhema } from './components/JoinRhema/JoinRhema';
import { Booking } from './components/Booking/Booking';
import { BookLiveSound } from './components/BookLiveSound/BookLiveSound';
import { ReserveBacklineRentals } from './components/ReserveBacklineRentals/ReserveBacklineRentals';
import { GeneralInquiry } from './components/GeneralInquiry/GeneralInquiry';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element= { <Home />}/>
      <Route path='about' element= { <About />}/>
      <Route path='liveSound' element= { <LiveSound />}/>
      <Route path='services' element= { <Services />}/>
      <Route path='services/:service' element= { <Service />}/>
      <Route path='backlinerentals' element= { <BacklineRentals />}/>
      <Route path='services' element= { <Services />}/>
      <Route path='backlinerentals/:product' element= { <Product />}/>
      <Route path='ourExperts' element= { <OurExperts />}/>
      <Route path='ourExperts/:expert' element= { <Expert />}/>
      <Route path='contact' element= { <Contact />}/>
      <Route path='joinRhema' element= { <JoinRhema />}/>
      <Route path='booking' element= { <Booking />}/>
      <Route path='bookLiveSound' element= { <BookLiveSound />}/>
      <Route path='reserveBacklineRentals' element= { <ReserveBacklineRentals />}/>
      <Route path='generalInquiry' element= { <GeneralInquiry />}/>

    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
