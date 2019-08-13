import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import './MainLayout.scss';

const MainLayout = ({children}) => (
  <div className='component'>
    <main>
    <PageNav />
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
