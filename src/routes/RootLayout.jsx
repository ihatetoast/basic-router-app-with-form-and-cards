import {Outlet} from 'react-router-dom';

import Header from '../components/Header.jsx';

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;