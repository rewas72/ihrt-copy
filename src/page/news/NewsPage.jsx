import React, { useState, useEffect } from 'react';
import './news.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsData } from '../../redux/actions/newsActions';
import { fetchPublicationsData } from '../../redux/actions/publicationsActions';

const NewsPage = () => {
  const [activeSlide, setActiveSlide] = useState(4); // Current active slide index
  const [publications, setPublications] = useState([]);
  const events = useSelector((state) => state.event.events);
  const news = useSelector((state) => state.news.news);
  const samplePublications = useSelector((state) => state.publications.publications);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);   

  useEffect(() => {
    dispatch(fetchPublicationsData());
  })

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setPublications(samplePublications);
  }, []);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <main role="main" className="wrapper">
      <a id="main-content" tabIndex="-1"></a>
      <div className="layout-content content actus">
        <div className="region region-content">         
          {/* Page Title */}
          <h1 className="page-title">IRHT haberleri</h1>
          {/* News Slider */}
          <div className="views-element-container">
            <div className="skin-default">
              <div className="views_slideshow_cycle_main">
                <div className="views_slideshow_cycle_teaser_section">
                  {news.map((news, index) => (
                    <div 
                      key={news.id}
                      className={`views_slideshow_cycle_slide ${index === activeSlide ? 'active' : ''}`}
                      style={{ 
                        display: index === activeSlide ? 'block' : 'none',
                        zIndex: index === activeSlide ? 11 : 10
                      }}
                    >
                      <article className="slider__item">
                        <picture>
                          <a href={news.link}>
                            <img 
                              src={news.image} 
                              alt={news.title} 
                              className="image-style-slider-home"
                              width="865"
                              height="299"
                            />
                          </a>
                        </picture>
                        <div>
                          <div className="tags">
                            <a href="/actualites">Haberler</a> / <a href="#">{news.category}</a>
                          </div>
                          <div className="slide__title">
                            <a href={news.link} rel="bookmark">
                              <span>{news.title}</span>
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="views-slideshow-controls-bottom clearfix">
                <ul className="widget_pager">
                  {news.map((news, index) => (
                    <li 
                      key={news.id}
                      className={index === activeSlide ? 'active' : ''}
                      onClick={() => handleSlideChange(index)}
                    >
                      {index}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Latest Publications */}
          <div className="views-element-container">
            <h2 className='deneme'>Son sürümler</h2>
            <div className="view-content">
              <div className="row">
                {publications.map((pub, index) => (
                  <div key={index} className="views-row book">
                    <a href={pub.link}>
                      <img 
                        src={pub.image} 
                        alt={pub.title}
                        className="image-style-medium"
                        width="142"
                        height="220"
                      />
                    </a>
                    <div className="book__info">
                      <a href={pub.link}>{pub.title}</a>
                      <p>Yayın türü: <span>{pub.type}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="more-link">
              <a href="/index.php/fr/publications/catalogue-des-publications">Tüm yayınları görün</a>
            </div>
          </div>

          {/* Seminars */}
          <div className="views-element-container">
            <h2>Seminerler</h2>
            <div className="view-content">
              <ul className="rowprev rowprev--small rowprev--small--alt">
                {events.filter(e => e.type === "Seminer").slice(0, 2).map((event, index) => (
                  <li key={index}>
                    <div className="rowprev__thumb">
                      <a href={event.link}>
                        <img 
                          src="/sites/default/files/styles/max_325x325/public/image_site/evenements/paris-mazarine-1-5.jpg"
                          alt="El yazması, ilk I"
                          className="image-style-max-325x325"
                          width="325"
                          height="325"
                        />
                      </a>
                    </div>
                    <div className="rowprev__text">
                      <div className="rowprev__excerpt">
                        <h3><a href={event.link}>{event.title}</a></h3>
                        <div>
                          <p>{event.description || "Ders, Antik Çağ ve Ortaçağ eserlerini bize ulaştıran yazma eserlere meraklı (veya başvurma ihtiyacı duyan) herkese açıktır."}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      

      {/* Back to top */}
      <div className="back-to-top">
        <a href="#top"><span>Sayfanın başına dön</span></a>
      </div>
    </main>
  );
};

export default NewsPage;