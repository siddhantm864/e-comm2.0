import Categories from '../components/categories';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import NewsLetter from '../components/newsletter';
import Slider from '../components/slider';

const Home=()=>{
    return (
        <div>
            {/* <h1>Welcome to the Home Page</h1> */}
            {/* <Announcements/> */}
            <Navbar />
            <Slider/>
            <Categories/>
            {/* <RecentViews/> */}
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Home;