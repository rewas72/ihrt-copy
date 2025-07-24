import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEventTypeFilter, setYearFilter, setCurrentPage } from '../../redux/features/eventSlice';
import './event.css';

export default function EventFilters() {
  const dispatch = useDispatch();
  const { eventTypes, years, filters } = useSelector((state) => state.event);

  const handleEventTypeClick = (id) => {
    dispatch(setEventTypeFilter(id));
    dispatch(setCurrentPage(1));
  };

  const handleYearChange = (e) => {
    dispatch(setYearFilter(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="view-filters">
      <form className="views-exposed-form">
        <div className="form--inline clearfix">
          <fieldset className="fieldgroup">
            <legend className="visually-hidden">Etkinlik Türü</legend>
            <div className="event-type-links">
              {eventTypes.map((type) => (
                <span
                  key={type.id}
                  className={`event-type-link ${filters.eventType === type.id ? 'active' : ''}`}
                  onClick={() => handleEventTypeClick(type.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </fieldset>

          <div className="year-select">
            <label htmlFor="edit-seances-year">Arşivler</label>
            <select
              id="edit-seances-year"
              value={filters.year}
              onChange={handleYearChange}
              className="form-select"
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}