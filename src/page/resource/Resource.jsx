import React from 'react';
import './resource.css';
import { useSelector } from 'react-redux';

export default function ResourcePage() {
  const menu = useSelector((state) => state.menu.mainMenu);
  const resourceSection = menu.find((item) => item.title === "Kaynaklar");

  return (
    <div className="resource-container">
      <div className="resource-region">
        <h1 className="resource-title">Kaynaklar</h1>

        <div className="resource-intro-block">
          <p className="resource-intro-text">
            Bu bölümde IRHT tarafından sağlanan kaynaklara ve dijital arşivlere erişebilirsiniz. Bilimsel veriler, projeler ve araştırma materyalleri burada listelenmiştir.
          </p>
        </div>

        <div className="resource-cards">
          {resourceSection?.children?.map((item, idx) => (
            <article key={idx} className="resource-card">
              <div className="resource-card-image-wrapper">
                <a href={item.path}>
                  <img
                    src={item.blog.image}
                    alt={item.blog.title}
                    width="280"
                    height="200"
                    className="resource-card-image"
                  />
                </a>
              </div>
              <div className="resource-card-content">
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
