import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEventData } from '../../redux/actions/eventActions';
import EventFilters from './EventFilters';
import EventList from './EventList';
import './event.css';

export default function EventPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.event.loading);
  const error = useSelector((state) => state.event.error);
  const filters = useSelector((state) => state.event.filters);

  useEffect(() => {
    dispatch(fetchEventData({ eventType: filters.eventType, year: filters.year }));
  }, [dispatch, filters.eventType, filters.year]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata oluştu: {error}</div>;

  return (
    <div
      className="views-element-container settings-tray-editable block block-views block-views-blockagenda-block-3"
      id="block-irht-theme-views-block-agenda-block-3"
      data-drupal-settingstray="editable"
    >
      <div>
        <h1 className="page-title">ETKİNLİKLER</h1>
        <div className="view view-agenda view-id-agenda view-display-id-block_3">
          <EventFilters />
          <EventList />
        </div>
      </div>
    </div>
  );
}
