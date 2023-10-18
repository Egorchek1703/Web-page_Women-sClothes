import Header from './components/header/Header'
import PromoBlock from './components/promo-block/PromoBlock';
import Partners from './components/partners/Partners';
import NewArrivals from './components/new-arrivals/New-arrivals';
import PromoBlock2 from './components/promo-block2/PromoBlock2';
import YoungsFavourite from './components/young-s-favourite/YoungsFavourite';
import MobileAppBlock from './components/mobile-app/Mobile-app';
import JoinForm from './components/join-form/JoinForm';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app"> 
      <Header />
      <PromoBlock />
      <Partners />
      <NewArrivals />
      <PromoBlock2 />
      <YoungsFavourite />
      <MobileAppBlock />
      <JoinForm />
      <Footer />
    </div>
  )
}

export default App;
