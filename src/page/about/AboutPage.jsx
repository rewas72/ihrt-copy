import React from 'react';
import './about.css';
import { useSelector } from 'react-redux';

export default function AboutPage() {
  const menu = useSelector((state) => state.menu.mainMenu);
  const aboutSection = menu.find((item) => item.title === "Hakkımızda");

  return (
    <div className="about-container">
      <div className="about-region">
        <h1 className="about-title">Hakkımızda</h1>

        <div className="about-intro-block">
          <p className="about-intro-text">
            Uluslararası alanda tanınan bir uzmanlık merkezi olan Yazma Tarihi ve Araştırma Enstitüsü (IRHT), yazıların, kitapların, kütüphanelerin, metinlerin ve süsleme sanatının tarihi üzerine uzmanlaşmış yüksek düzeyde araştırmacıları bir araya getirir.
          </p>
        </div>

        <div className="about-cards">
          {aboutSection?.children?.map((item, idx) => (
            <article key={idx} className="about-card">
              <div className="about-card-image-wrapper">
                <a href={item.path}>
                  <img
                    src={item.blog.image}
                    alt={item.blog.title}
                    width="280"
                    height="200"
                    className="about-card-image"
                  />
                </a>
              </div>
              <div className="about-card-content">
                <h2><a href={item.path}>{item.title}</a></h2>
                <p>{item.blog.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
