import PageTitle from '../../Components/PageTitle/PageTitle';
import ApartmentCard from './ApartmentCard';

const Apartments = () => {
  PageTitle('All Apartments - Apartment Management Web Application');
  return (
    <div className='container mx-auto py-20 lg:px-0 px-[5%]'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center flex-wrap xl:gap-12 gap-6'>
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </div>
    </div>
  );
};

export default Apartments;
