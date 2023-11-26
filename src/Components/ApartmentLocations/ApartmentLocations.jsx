import { useEffect, useRef, useState } from 'react';
import Heading from '../Heading/Heading';
import useScroll from '../../Hooks/useScroll';
import { MdOutlineDone } from 'react-icons/md';
import Map, { Marker } from 'react-map-gl';
import { FcHome } from 'react-icons/fc';

const ApartmentLocations = () => {
  const leftDivRef = useRef(null);
  useScroll(leftDivRef, 'fade-up');
  const rightDivRef = useRef(null);
  useScroll(rightDivRef, 'fade-down');

  //   map info
  // marker data
  const markers = [
    {
      id: 1,
      latitude: 23.779347861255797,
      longitude: 90.41486128199205,
      title: 'LINDEN Head Office',
    },
    {
      id: 2,
      latitude: 23.779347861255797 + 0.03, // Adjust the latitude as needed
      longitude: 90.41486128199205 + 0.03, // Adjust the longitude as needed
      title: 'LINDEN Apartment 2',
    },
    {
      id: 3,
      latitude: 23.779347861255797 - 0.005, // Adjust the latitude as needed
      longitude: 90.41486128199205 + 0.005, // Adjust the longitude as needed
      title: 'LINDEN Apartment 3',
    },
    {
      id: 4,
      latitude: 23.779347861255797 - 0.005, // Adjust the latitude as needed
      longitude: 90.41486128199205 - 0.005, // Adjust the longitude as needed
      title: 'LINDEN Apartment 4',
    },
  ];

  // Find the center of all markers
  const center = {
    latitude:
      markers.reduce((sum, marker) => sum + marker.latitude, 0) /
      markers.length,
    longitude:
      markers.reduce((sum, marker) => sum + marker.longitude, 0) /
      markers.length,
  };
  // State to control when the map should be rendered
  const [renderMap, setRenderMap] = useState(false);

  useEffect(() => {
    setRenderMap(true);
  }, []);

  return (
    <div className='container mx-auto px-[5%] lg:px-0'>
      <Heading
        title='Our Locations'
        subTitle='Find Us in This Locations'
      />
      <div className='flex xl:justify-between justify-center items-start lg:flex-row flex-col flex- lg:gap-4 gap-8'>
        {/* left side content */}
        <div
          className='space-y-8 fade-up'
          style={{ animationDuration: '0.7s' }}
          ref={leftDivRef}
        >
          <p className='text-center lg:text-left font-medium text-lg lg:text-2xl text-primary-500 font-QuickSand uppercase'>
            Gulshan Avenue, Dhaka
          </p>
          <h3
            className={`text-2xl md:text-[2.5rem] xl:text-[3.5rem] xl:text-justify text-center pb-4 xl:max-w-[620px] leading-none dark:text-white-50`}
          >
            <span className='lg:spacing'>10/2 South Auchpara</span> Gulshan
            Avenue, Dhaka
          </h3>
          {/* location details */}
          <div className='lg:space-y-6 space-y-2'>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Central Location
            </p>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              All is at Your Doorstep
            </p>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Shopping Center — 5 min Walk
            </p>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Station and Overground — 5 min Walk
            </p>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Good Schools in the Neighborhood
            </p>
            {/* Add more details as needed */}
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Nearby Parks and Recreation
            </p>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Restaurants and Cafes Nearby
            </p>
            <p className='lg:text-left desc flex justify-start  items-center gap-3'>
              <MdOutlineDone className='text-gray-600 text-[24px]' />
              Medical Facilities in Proximity
            </p>
          </div>
        </div>
        {/* right side map */}
        <div
          className='lg:max-w-[700px] w-full lg:h-[750px] h-[350px]'
          style={{ animationDuration: '0.7s' }}
          ref={rightDivRef}
        >
          {renderMap && (
            <Map
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
              mapLib={import('mapbox-gl')}
              initialViewState={{
                latitude: center.latitude,
                longitude: center.longitude,
                zoom: 12,
              }}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                border: '2px solid #aa8448',
                boxShadow: '5px 5px 5px #aa8448 ',
              }}
              mapStyle='mapbox://styles/mapbox/streets-v11'
            >
              {/* Add markers */}
              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  latitude={marker.latitude}
                  longitude={marker.longitude}
                >
                  {/* Custom marker content */}
                  <div className='relative translate-y-[-700px] text-center flex justify-center items-center flex-col cursor-pointer'>
                    <FcHome
                      size={30}
                      color='red'
                    />
                    <p className=' font-medium uppercase lg:text-xl bg-primary-500 px-2 py-1 rounded-full text-white-50 font-QuickSand'>
                      {marker.title}
                    </p>
                  </div>
                </Marker>
              ))}
            </Map>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentLocations;
