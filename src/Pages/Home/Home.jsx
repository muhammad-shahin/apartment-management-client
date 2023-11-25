import Banner from '../../Components/Banner/Banner';
import Heading from '../../Components/Heading/Heading';
import NewBanner from '../../Components/NewBanner/NewBanner';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Home = () => {
  PageTitle('Home - Apartment Management Web Application');

  return (
    <div>
      {/* <Banner /> */}
      <NewBanner />
    </div>
  );
};

export default Home;
