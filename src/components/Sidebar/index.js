import classnames from 'classnames';
import { Link } from 'react-router-dom';

import DashboardIcon from '../../images/dashboard-icon.png';
import CategoryIcon from '../../images/category-icon.png';

import './sidebar.scss';

const links = [
  {
    logo: DashboardIcon,
    url: '/dashboard',
    title: 'Dashboard'
  },
  {
    logo: CategoryIcon,
    url: '/categories',
    title: 'Categories'
  }
]

const LinkItem = ({ item, toggleShow, desktopScreen }) => {
  return (
    <Link className='navItem' to={item.url} onClick={desktopScreen ? null : toggleShow}>
      <span className='itemIconContainer'>
        <img src={item.logo} width='20' height='20' alt='logo' loading='lazy' />
      </span>

      <span className='itemTitle'>{item.title}</span>
    </Link>
  )
}

function Sidebar({ show, toggleShow, desktopScreen }) {
  const sidebarItems = links.map((item, index) => <LinkItem item={item} toggleShow={toggleShow} desktopScreen={desktopScreen} key={index.toString()} />)

  return (
    <div className={classnames('sidebar', { 'showSidebar': show }, { 'desktopSidebar': desktopScreen })}>
      <div className='navList'>
        {sidebarItems}
      </div>
    </div>
  )
}

export default Sidebar;
