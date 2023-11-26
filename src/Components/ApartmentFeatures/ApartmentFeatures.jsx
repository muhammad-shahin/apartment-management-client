import Heading from '../Heading/Heading';
import FeatureCard from './FeatureCard';
import location from '../../assets/icons/location.svg';
import sun from '../../assets/icons/sun.svg';
import wifi from '../../assets/icons/wifi.svg';
import award from '../../assets/icons/award.svg';

const ApartmentFeatures = () => {
  return (
    <div>
      <Heading title='Apartment Features' />
      {/* features */}
      <div className='flex lg:justify-between justify-center items-center flex-wrap gap-8'>
        {/* feature cards */}
        <FeatureCard
          icon={location}
          title='Central Location'
          subTitle='All you may need is at your doorstep: central location with all infrastructure'
        />
        <FeatureCard
          icon={award}
          title='Award-Winning Design'
          subTitle='The apartment was designed by Lucy De Vito with great attention to details'
        />
        <FeatureCard
          icon={sun}
          title='Spectacular Views'
          subTitle='The apartment is bright and spacious with spectacular river views'
        />
        <FeatureCard
          icon={wifi}
          title='Smart Apartment'
          subTitle='Smart apartment technology designed by famous architecture group'
        />
      </div>
    </div>
  );
};

export default ApartmentFeatures;
