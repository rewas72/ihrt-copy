import React, { use, useEffect, useState } from 'react';
import './css/header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logoCnrs from '../../assets/logo_CNRS.svg';
import logoIrht from '../../assets/campus-condorcet-logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuData } from '../../redux/actions/menuActions';
import bsky from '../../assets/social/bsky.svg';
import canalu from '../../assets/social/canalu.svg';
import facebook from '../../assets/social/facebook.svg';
import instagram from '../../assets/social/instagram.svg';
import linkedin from '../../assets/social/linkedin.svg';
import mastodon from '../../assets/social/mastodon.svg';
import youtube from '../../assets/social/youtube.svg';
import bsky_hover from '../../assets/social/bsky_hover.svg';
import canalu_hover from '../../assets/social/canalu_hover.svg';
import facebook_hover from '../../assets/social/facebook_hover.svg';
import instagram_hover from '../../assets/social/instagram_hover.svg';
import linkedin_hover from '../../assets/social/linkedin_hover.svg';
import mastodon_hover from '../../assets/social/mastodon_hover.svg';
import youtube_hover from '../../assets/social/youtube_hover.svg';


const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [newsletterVisible, setNewsletterVisible] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const menu = useSelector((state) => state.menu)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  const navigate = useNavigate()
  const menuItems = menu.mainMenu || [];


  const toggleNewsletter = () => {
    setNewsletterVisible(!newsletterVisible);
  };

  // İkincil menü verileri
  const secondaryMenuData = [
    { title: 'Etkinlikler', path: '/events' },
    { title: 'Haberler', path: '/news' },
    { title: 'Bülten', path: '/newsletter' },
    { title: 'Rehber', path: '/directory' },
    { title: 'Siparişler', path: '/orders' },
    { title: 'İntranet', onClick: () => window.open('http://intranet.irht.cnrs.fr/', '_blank') },
  ];

  // Sosyal medya verileri
   const socialMediaData = [
    { 
      title: 'Bluesky', 
      path: 'https://bsky.app/profile/irht-cnrs.bsky.social', 
      icon: bsky, 
      hoverIcon: bsky_hover 
    },
    { 
      title: 'Facebook', 
      path: 'https://www.facebook.com/IRHT.CNRS/', 
      icon: facebook, 
      hoverIcon: facebook_hover 
    },
    { 
      title: 'Instagram', 
      path: 'https://www.instagram.com/irht.cnrs', 
      icon: instagram, 
      hoverIcon: instagram_hover 
    },
    { 
      title: 'Canal U', 
      path: 'https://www.canal-u.tv/producteurs/irht', 
      icon: canalu, 
      hoverIcon: canalu_hover 
    },
    { 
      title: 'Youtube', 
      path: 'https://www.youtube.com/channel/UCjn5iBt9PCHjdaZr390q3Jg', 
      icon: youtube, 
      hoverIcon: youtube_hover 
    },
    { 
      title: 'Linkedin', 
      path: 'https://www.linkedin.com/company/irht-cnrs/', 
      icon: linkedin, 
      hoverIcon: linkedin_hover 
    },
    { 
      title: 'Mastodon', 
      path: 'https://social.sciences.re/@IRHT_CNRS', 
      icon: mastodon, 
      hoverIcon: mastodon_hover 
    },
  ];

  const handleSecondaryMenuClick = (item) => {
    if (item.onClick) {
      item.onClick(); // dış link açılır
    } else if (item.path) {
      navigate(item.path); // iç sayfaya yönlendirme
    }
  };
  return (
    <header role="banner" className={`overlay header ${mobileMenuVisible ? 'visible' : ''} ${isMenuHovered ? 'menu-open' : ''}`}>
      <div className="wrapper">
        <div className="header__top">
          <div className="region region-header">
            <div id="block-irht-theme-branding" className="settings-tray-editable block block-system block-system-branding-block" data-drupal-settingstray="editable">
              <div className="logo">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img className="logo-CNRS" src={logo} />
                </a>
                <a href="/index.php/fr" rel="home" className="site-logo">
                  <img src={logoCnrs} alt="Ana Sayfa" />
                </a>
              </div>
            </div>
          </div>

          <div className={`header__mobile-menu ${mobileMenuVisible ? 'visible' : ''}`}>
            <div className="region region-header-mobile-menu">
              <nav role="navigation" aria-labelledby="block-menumobile-menu" id="block-menumobile" className="settings-tray-editable block block-menu navigation menu--menu-mobile" data-drupal-settingstray="editable">
                <h2 className="visually-hidden" id="block-menumobile-menu">Mobil Menü</h2>
                <ul className="menu header__mobile-menu__main">
                  <li className="burger-button">
                    <a className="header__mobile-menu__main--burger_icon" onClick={toggleMobileMenu}>
                      <svg id="burger" data-name="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.8 21.47">
                        <rect fill="#1f191a" className="gtop" width="24.8" height="2.83"></rect>
                        <rect fill="#1f191a" className="gmiddle" y="7.32" width="24.8" height="2.83"></rect>
                        <rect fill="#1f191a" className="gbottom" y="14.63" width="24.8" height="2.83"></rect>
                      </svg>
                    </a>
                  </li>

                  {menuItems.map((menuItem, index) => (
                    <li key={index} className={`menu-item ${menuItem.children ? 'menu-item--expanded' : ''}`}>
                      <a href={menuItem.path}>{menuItem.title}</a>
                      {menuItem.children && (
                        <>
                          <span className="accordion">daha fazla</span>
                          <ul className="menu panel">
                            {menuItem.children.map((childItem, childIndex) => (
                              <li key={index} className="menu-item">
                                <button onClick={menuItem.onClick} className="link-button">{menuItem.title}</button>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="search-block-form settings-tray-editable block block-search container-inline search" data-drupal-selector="search-block-form" id="block-formulairederecherche-3" role="search" data-drupal-settingstray="editable">
                <form action="/index.php/fr/search/node" method="get" id="search-block-form" accept-charset="UTF-8">
                  <div className="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label">
                    <label htmlFor="edit-keys" className="visually-hidden">Ara</label>
                    <input title="Aranacak terimleri girin." placeholder="Ara" data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" className="form-search" />
                  </div>
                  <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                    <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Ara" className="button js-form-submit form-submit" />
                  </div>
                </form>
              </div>

              <nav role="navigation" aria-labelledby="block-menumobilesecondary-menu" id="block-menumobilesecondary" className="settings-tray-editable block block-menu navigation menu--menu-mobile---secondary" data-drupal-settingstray="editable">
                <h2 className="visually-hidden" id="block-menumobilesecondary-menu">Mobil Menü - İkincil</h2>
                <ul className="menu header__mobile-secondary-menu">
                  {secondaryMenuData.map((item, index) => (
                    <li key={index} className="menu-item">
                      <a href={item.path}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="header__top__menu">
            <div className="region region-secondary-menu">
              <nav role="navigation" aria-labelledby="block-irht-theme-menusecondaire-menu" id="block-irht-theme-menusecondaire" className="settings-tray-editable block block-menu navigation menu--menu-header" data-drupal-settingstray="editable">
                <h2 className="visually-hidden" id="block-irht-theme-menusecondaire-menu">İkincil Menü</h2>
                <ul className="menu top-nav">
                  {secondaryMenuData.map((item, index) => (
                    <li key={index} className="menu-item">
                      <button
                        className="link-button"
                        onClick={() => handleSecondaryMenuClick(item)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="header-top__search">
              <div className="region region-search">
                <div className="search-block-form settings-tray-editable block block-search container-inline" data-drupal-selector="search-block-form-2" id="block-irht-theme-formulairederecherche-2" role="search" data-drupal-settingstray="editable">
                  <form action="/index.php/fr/search/node" method="get" id="search-block-form--2" accept-charset="UTF-8">
                    <div className="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label">
                      <label htmlFor="edit-keys--2" className="visually-hidden">Ara</label>
                      <input title="Aranacak terimleri girin." placeholder="Ara" data-drupal-selector="edit-keys" type="search" id="edit-keys--2" name="keys" value="" size="15" maxlength="128" className="form-search" />
                    </div>
                    <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper" id="edit-actions--2">
                      <input data-drupal-selector="edit-submit" type="submit" id="edit-submit--2" value="Ara" className="button js-form-submit form-submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <div className="region region-primary-menu">
            <nav role="navigation" aria-labelledby="block-irht-theme-main-menu-menu" id="block-irht-theme-main-menu" className="settings-tray-editable block block-menu navigation menu--main main-nav" data-drupal-settingstray="editable">
              <h2 className="visually-hidden" id="block-irht-theme-main-menu-menu">Ana Navigasyon</h2>
              <ul className="menu">
                {menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`menu-item ${menuItem.children ? 'menu-item--expanded trigger' : ''}`}
                    onMouseEnter={() => setIsMenuHovered(true)}
                    onMouseLeave={() => setIsMenuHovered(false)}
                  >
                    <a href={menuItem.path}>{menuItem.title}</a>
                    {menuItem.children && (
                      <ul className="menu main-nav__sub">
                        {menuItem.children.map((childItem, childIndex) => (
                          <li key={childIndex} className="menu-item">
                            <a href={childItem.path}>{childItem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

             <nav 
            role="navigation" 
            aria-labelledby="block-irht-theme-reseauxsociaux-2-menu" 
            id="block-irht-theme-reseauxsociaux-2" 
            className="settings-tray-editable block block-menu navigation menu--reseaux-sociaux" 
            data-drupal-settingstray="editable"
          >
            <h2 className="visually-hidden" id="block-irht-theme-reseauxsociaux-2-menu">Sosyal Medya</h2>
            <ul className="footer-nav__social">
              {socialMediaData.map((item, index) => (
                <li 
                  key={index} 
                  className="menu-item"
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={item.title}
                  >
                    
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;