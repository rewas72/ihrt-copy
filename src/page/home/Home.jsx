import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsData } from '../../redux/actions/newsActions';
import { fetchPublicationsData } from '../../redux/actions/publicationsActions';
import './home.css';
import { useState, useEffect } from 'react';


const Home = () => {

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
        <div>
            <div className="slider-container">
                <div className="slider-wrapper" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                    {news.map((item, index) => (
                        <div className="slider-slide" key={item.id}>
                            <article className="slider__item">
                                <a href={item.link}>
                                    <img src={item.image} alt={item.title} className="slider-image" />
                                </a>
                                <div className="tags">
                                    <a href="/actualites">Haberler</a> / <a href="#">{item.category}</a>
                                </div>
                                <div className="slide__title">
                                    <a href={item.link}>{item.title}</a>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <div className="slider-controls">
                    {news.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => handleSlideChange(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="newsletter-divider"></div>

            <div className="about-container">
                <div className="about-region">
                    <h1 className="about-title">Hakkımızda</h1>
                    <div className="about-intro-block">
                        <p className="about-intro-text">
                            Uluslararası alanda tanınan bir uzmanlık merkezi olan Yazma Tarihi ve Araştırma Enstitüsü (IRHT), yazıların, kitapların, kütüphanelerin, metinlerin ve süsleme sanatının tarihi üzerine uzmanlaşmış yüksek düzeyde araştırmacıları bir araya getirir.
                        </p>
                    </div>
                </div>
            </div>
            <div className="newsletter-divider"></div>


        </div>
    )
}

export default Home