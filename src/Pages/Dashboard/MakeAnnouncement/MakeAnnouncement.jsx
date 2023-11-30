import Swal from 'sweetalert2';
import Heading from '../../../Components/Heading/Heading';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import useAxios from '../../../Hooks/useAxios';
import Input from '../../../Components/Input/Input';
import TextBox from '../../../Components/TextBox/TextBox';
import PrimaryButton from '../../../Shared/PrimaryButton';

const MakeAnnouncement = () => {
  PageTitle('Make Announcement || Linden Apartment Management');
  const secureAxios = useAxios();



  const handleSubmitAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const desc = form.description.value;
    const announcement = {
      announcementTitle: title,
      announcementDescription: desc,
    };
    console.log(announcement);
    secureAxios.put('/announcement', announcement).then((res) => {
      console.log('Announcement Updated : ', res.data);
      if (res.data?.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'New Announcement Published Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    });
  };
  return (
    <div className='container mx-auto'>
      <Heading
        title='Make Announcement'
        className='text-primary-700'
      />
      <div className='space-y-8 pb-10'>
        <div
          key={'announcement._id'}
          className='text-center bg-primary-500 text-white-50 py-5 lg:max-w-[60vw] mx-auto fade-up lg:px-0 px-[5%]'
          style={{ animationDuration: '0.5s' }}
        >
          <h3
            className='g:text-[2.5rem] md:text-[2rem] text-[2rem] font-medium  dark:text-white-50 fade-up'
            style={{ animationDuration: '0.7s' }}
          >
            {'Make A New Announcement'}
          </h3>
          <hr className='my-4' />
          <form
            onSubmit={handleSubmitAnnouncement}
            className='max-w-lg mx-auto space-y-6 pt-5 pb-10 '
          >
            <Input
              labelText='Announcement Title'
              placeholder='Write Announcement Title'
              required={true}
              name='title'
            />
            <TextBox
              label='Announcement Description'
              placeholder='Write Announcement Description...'
              isRequired
              name='description'
            />
            <PrimaryButton
              text='Submit'
              className='w-full'
              type='submit'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
