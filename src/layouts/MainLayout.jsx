// layouts/MainLayout.jsx
import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Aside from '../components/aSide/Aside';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import { useDispatch } from 'react-redux';
import { fetchNewsData } from '../redux/actions/newsActions';
import { fetchEventData } from '../redux/actions/eventActions';
import { fetchPublicationsData } from '../redux/actions/publicationsActions';

const MainLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsData());
  })
  useEffect(() => {
    dispatch(fetchEventData())
  })
  useEffect(() => {
    dispatch(fetchPublicationsData())
  })
  return (
    <div className="layout">
      <Header />
      <div className="main-content-wrapper">
        <main className="main-content">
          <Outlet />
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
