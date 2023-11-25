import AboutBuilding from '../../Components/AboutBuilding/AboutBuilding';
import NewBanner from '../../Components/NewBanner/NewBanner';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Home = () => {
  PageTitle('Home - Apartment Management Web Application');

  return (
    <section>
      <div className='min-h-[100vh]'>
        <NewBanner />
      </div>

      {/* about building section */}
      <div className='py-10 container mx-auto px-[5%] lg:px-0'>
        <AboutBuilding />
      </div>
    </section>
  );
};

export default Home;
