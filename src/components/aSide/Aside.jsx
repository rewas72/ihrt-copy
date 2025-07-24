import React from 'react';
import { Link } from 'react-router-dom';
import './css/aside.css';
import { useSelector } from 'react-redux';

const Aside = () => {
  // Events data
  const events = useSelector((state) => state.event.events);

  // News data
  const news = [
    {
      title: 'Maktabatan: Two Libraries of 19th Century Algerian Manuscript Tradition',
      category: 'Research Program',
      excerpt: 'A project initiated by IRHT’s Arabic department and supported by Bulac.',
      image: '/images/news/biblissima-arabe.jpg',
      link: '/news/maktabatan-algerian-libraries'
    },
    {
      title: 'Scriptorium: Call for Contributions',
      category: 'Call for Papers',
      excerpt: 'The international journal Scriptorium celebrates its 80th anniversary in 2026.',
      image: '/images/news/scriptorium.jpg',
      link: '/news/scriptorium-call'
    }
  ];

  // Publications data
  const publications = [
    {
      title: 'Uses and Reuses of Medieval Manuscripts',
      author: 'Angela Cossu (ed.), Elvira Zambardi (ed.)',
      link: '/publications/uses-and-reuses'
    },
    {
      title: 'Antiquarian Book Trade in Switzerland',
      author: 'Angeline Rais',
      link: '/publications/swiss-book-trade'
    },
    {
      title: 'Sentences of William of Ware',
      author: 'Ernesto Dezza (ed.), Antonio Petagine (ed.)',
      link: '/publications/william-of-ware'
    }
  ];

  return (
    <aside className="layout-sidebar-first" role="complementary">
      <div className="region region-sidebar-first">

        {/* Events Block */}
        <div className="block">
          <ul className="events-list">
            {events.map((event, index) => (
              <li key={index} className="events-list__item">
                <div>
                  <span className="events-list__item__date">{event.date}</span>
                  <span className="events-list__item__type">{event.type}</span>
                </div>
                <div className="events-list__item__title">
                  <Link to={event.link}>{event.title}</Link>
                </div>
                <div className="events-list__item__location">
                  <p>{event.location}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="more-link">
            <Link to="/events" className="btn">View More</Link>
          </div>
        </div>

        {/* News Block */}
        <div className="block">
          <h2>News</h2>
          <div className="view-content">
            {news.map((item, index) => (
              <div key={index} className="views-row colprev__item">
                <header>
                  <h3>
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                </header>
                <figure>
                  <Link to={item.link}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                  <figcaption className="tags">
                    <Link to="/news">{item.category}</Link>
                  </figcaption>
                </figure>
                <p>{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Block */}
        <div className="block">
          <h2>Latest Publications</h2>
          <div className="last-publications-list">
            <ul>
              {publications.map((pub, index) => (
                <li key={index} className="last-publications-list__item">
                  <div className="views-field views-field-title">
                    <span className="field-content">
                      <Link to={pub.link}>{pub.title}</Link>
                    </span>
                  </div>
                  <div className="views-field views-field-field-auteur">
                    <div className="field-content">{pub.author}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="more-link">
              <Link to="/publications" className="btn">View More</Link>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Aside;
