import ContactUs from './Components/ContactUs'
import Team from './Components/Team';
import Review from './Components/Review';
import Banner from './Components/Banner';

const Home = () => {
    return (
        <div className='bg-[#f9f7f3]'>
            <Banner/>
            <Review/>
            <Team/>
            <ContactUs/>
        </div>
    );
};

export default Home;