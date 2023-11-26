import AboutBuilding from '../../Components/AboutBuilding/AboutBuilding';
import ApartmentFeatures from '../../Components/ApartmentFeatures/ApartmentFeatures';
import ApartmentLocations from '../../Components/ApartmentLocations/ApartmentLocations';
import Coupon from '../../Components/Coupon/Coupon';
import FloorPlan from '../../Components/FloorPlan/FloorPlan';
import NewBanner from '../../Components/NewBanner/NewBanner';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Layouts/Footer/Footer';

const Home = () => {
  PageTitle('Home - Apartment Management Web Application');

  return (
    <section>
      {/* collect coupon section */}
      <div className='fixed lg:bottom-[30px] lg:right-[30px] bottom-[10px] right-[10px] z-[200]'>
        <Coupon />
      </div>
      <div className='min-h-[100vh]'>
        <NewBanner />
      </div>

      {/* about building section */}
      <div className='py-10 container mx-auto px-[5%] lg:px-0'>
        <AboutBuilding />
      </div>

      {/* floor plan section */}
      <div className='py-10 bg-primary-100 bg-opacity-75 backdrop-blur-lg'>
        <FloorPlan />
      </div>

      {/* Apartment Features section */}
      <div className='py-10 container mx-auto px-[5%] lg:px-0'>
        <ApartmentFeatures />
      </div>

      {/* our location section */}
      <div className='py-10 bg-primary-100 bg-opacity-75 backdrop-blur-lg'>
        <ApartmentLocations />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
