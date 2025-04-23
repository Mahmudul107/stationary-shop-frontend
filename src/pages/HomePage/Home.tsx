import ContactUs from './Components/ContactUs'
import Team from './Components/Team';
import Review from './Components/Review';
import Banner from './Components/Banner';
import AboutUs from '../About/About';

const Home = () => {
    return (
        <div className='bg-[#f9f7f3]'>
            <Banner/>
            <AboutUs/>
            <Review/>
            <Team/>
            <ContactUs/>
        </div>
    );
};

export default Home;