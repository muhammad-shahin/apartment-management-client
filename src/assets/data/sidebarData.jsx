import { RxDashboard } from 'react-icons/rx';
import { FaHandshake } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { GrAnnounce } from 'react-icons/gr';
import {
  MdOutlinePayment,
  MdManageAccounts,
  MdAnnouncement,
} from 'react-icons/md';
import { TbDeviceIpadHorizontalDollar } from 'react-icons/tb';
import { LuGitPullRequestClosed } from 'react-icons/lu';
import { RiCoupon2Line } from 'react-icons/ri';

const sidebarData = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <RxDashboard className='lg:text-[26px] text-[20px]' />,
    access: ['user', 'member', 'admin'],
  },
  {
    name: 'My Profile',
    link: '/dashboard/profile',
    icon: <BsPersonFill className='lg:text-[26px] text-[20px]' />,
    access: ['user', 'member', 'admin'],
  },
  {
    name: 'Manage Members',
    link: '/dashboard/manage-members',
    icon: <MdManageAccounts className='lg:text-[26px] text-[20px]' />,
    access: ['admin'],
  },
  {
    name: 'Make Announcement',
    link: '/dashboard/make-announcement',
    icon: <MdAnnouncement className='lg:text-[26px] text-[20px]' />,
    access: ['admin'],
  },
  {
    name: 'Agreement Requests',
    link: '/dashboard/agreement-requests',
    icon: <LuGitPullRequestClosed className='lg:text-[26px] text-[20px]' />,
    access: ['admin'],
  },
  {
    name: 'Manage Coupons',
    link: '/dashboard/manage-coupons',
    icon: <RiCoupon2Line className='lg:text-[26px] text-[20px]' />,
    access: ['admin'],
  },
  // {
  //   name: 'My Agreements',
  //   link: '/dashboard/my-agreements',
  //   icon: <FaHandshake className='lg:text-[26px] text-[20px]' />,
  //   access: ['user', 'member', 'admin'],
  // },
  {
    name: 'Announcements',
    link: '/dashboard/announcements',
    icon: <GrAnnounce className='lg:text-[26px] text-[20px]' />,
    access: ['user', 'member', 'admin'],
  },
  {
    name: 'Payment',
    link: '/dashboard/payment',
    icon: <MdOutlinePayment className='lg:text-[26px] text-[20px]' />,
    access: ['member', 'admin'],
  },
  {
    name: 'Payment History',
    link: '/dashboard/payment-history',
    icon: (
      <TbDeviceIpadHorizontalDollar className='lg:text-[26px] text-[20px]' />
    ),
    access: ['member', 'admin'],
  },
];

export default sidebarData;
