import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/features/eventSlice';
import './event.css';

export default function EventList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  const pagination = useSelector((state) => state.event.pagination);
  const loading = useSelector((state) => state.event.loading);
  const error = useSelector((state) => state.event.error);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;
  if (!Array.isArray(events)) return <div>Veri bulunamadı</div>;

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours === 10 && minutes === 0) return 'Sabah 10:00';
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  const indexOfLastItem = pagination.currentPage * pagination.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - pagination.itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(events.length / pagination.itemsPerPage);

  return (
    <div className="view-content">
      <ul className="agenda__events-list events-list">
        {currentEvents.map((event) => (
          <li key={event.id} className="events-list__item">
            <p>
              <span className="events-list__item__date">{event.date}</span>
              <span className="events-list__item__type">{event.type}</span>
            </p>
            <p className="events-list__item__title">
              <a href={`/index.php/fr/agenda/seminaire/${event.id}`} hreflang="fr">{event.title}</a>
            </p>
            <p className="events-list__item__time">
              <time dateTime={event.time} className="datetime">{formatTime(event.time)}</time>
            </p>
            <p className="events-list__item__location">{event.location}</p>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <nav className="pager cat-pagination" role="navigation" aria-labelledby="pagination-heading">
          <h4 id="pagination-heading" className="visually-hidden">Sayfalama</h4>
          <ul className="pager__items js-pager__items cat-nav">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={`pager__item ${pagination.currentPage === page ? 'is-active' : ''}`}>
                <button
                  onClick={() => dispatch(setCurrentPage(page))}
                  className={pagination.currentPage === page ? 'active' : ''}
                  title={page === 1 ? 'Mevcut sayfa' : `${page}. sayfaya git`}
                >
                  <span className="visually-hidden">
                    {pagination.currentPage === page ? 'Mevcut sayfa' : 'Sayfa'}
                  </span>
                  {page}
                </button>
              </li>
            ))}

            {pagination.currentPage < totalPages && (
              <>
                <li className="pager__item pager__item--next">
                  <button
                    onClick={() => dispatch(setCurrentPage(pagination.currentPage + 1))}
                    title="Sonraki sayfaya git"
                    rel="next"
                  >
                    <span className="visually-hidden">Sonraki sayfa</span>
                    <span aria-hidden="true">&gt;</span>
                  </button>
                </li>
                <li className="pager__item pager__item--last">
                  <button
                    onClick={() => dispatch(setCurrentPage(totalPages))}
                    title="Son sayfaya git"
                    className="button-next"
                  >
                    <span className="visually-hidden">Son sayfa</span>
                    <span aria-hidden="true">&gt;&gt;</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
