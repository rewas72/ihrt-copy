import React from 'react';
import './research.css';
import { useSelector } from 'react-redux';

export default function ResearchPage() {
  const menu = useSelector((state) => state.menu.mainMenu);
  const researchSection = menu.find((item) => item.title === "Araştırma");

  return (
    <div className="research-container">
      <div className="research-region">
        <h1 className="research-title">Araştırma</h1>

        <div className="research-intro-block">
          <p className="research-intro-text">
            IRHT’nin araştırmaları, yazılı kültürün tarihsel süreçteki evrimini anlamaya yönelik disiplinler arası çalışmaları kapsar. El yazmalarının incelenmesi, metin eleştirisi ve süsleme sanatı analizleri bu araştırma başlıkları arasındadır.
          </p>
        </div>

        <div className="research-cards">
          {researchSection?.children?.map((item, idx) => (
            <article key={idx} className="research-card">
              <div className="research-card-image-wrapper">
                <a href={item.path}>
                  <img
                    src={item.blog.image}
                    alt={item.blog.title}
                    width="280"
                    height="200"
                    className="research-card-image"
                  />
                </a>
              </div>
              <div className="research-card-content">
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
