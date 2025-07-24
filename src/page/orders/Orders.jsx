import React from 'react';
import './Orders.css';

const Orders = () => {
    return (
        <div className="order-reproductions-form">
            <h1 className="page-title">Sipariş çoğaltmaları</h1>
            <h2 className='page-title2'>Sipariş prosedürü</h2>
            <form className="webform-submission-form">
                <div className="form-item">
                    <p className='description'>
                        Eğer el yazması referanslarını biliyorsanız,{' '}
                        <a href="https://www.irht.cnrs.fr/sites/default/files/image_site/pieces_jointes/irht_bondecommande.pdf">
                            sipariş formunu
                        </a>{' '}
                        yazdırın ve Görseller bölümüne geri gönderin ({' '}
                        <a href="https://www.irht.cnrs.fr/sites/default/files/image_site/pieces_jointes/tarifs-servlecteur.pdf">
                            İletişim ve fiyatlar
                        </a>{' '}
                        bölümüne bakınız ).
                    </p>
                </div>

                <div className="form-item">
                    <label htmlFor="email" className="form-required form-label">E-posta</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        aria-describedby="email-description"
                        className="form-text required"
                        required
                    />
                    <div className="description" id="email-description">
                        Birden fazla e-posta adresi virgülle ayrılabilir. E-postalar yalnızca Kime e-posta adresi girildiğinde cc ve bcc adreslerine gönderilir.
                    </div>
                </div>

                <div className="form-item">
                    <label htmlFor="name" className="form-required form-label">İsim</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        maxLength="255"
                        className="form-text required"
                        required
                    />
                </div>

                <div className="form-item">
                    <label className='form-label' htmlFor="research-subject">Araştırma konusu ve kullanımı</label>
                    <div className="form-textarea-wrapper">
                        <textarea
                            id="research-subject"
                            name="research_subject"
                            rows="5"
                            cols="60"
                            placeholder="Araştırma konunuzu ve çoğaltımların (araştırma veya yayın) kullanımını belirtin."
                            className="form-textarea resize-vertical"
                        ></textarea>
                    </div>
                </div>

                <div className="form-item">
                    <label htmlFor="message" className='form-label'>Mesaj</label>
                    <div className="form-textarea-wrapper">
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            cols="60"
                            placeholder="Kütüphaneyi ve el yazması referans numarasını belirtin."
                            className="form-textarea resize-vertical"
                        ></textarea>
                    </div>
                </div>

                <div className="form-item">
                    <label className='form-label' htmlFor="document-references" id="document-references-label">Belge referansları</label>
                    <div className="form-managed-file">
                        <input
                            type="file"
                            id="document-references"
                            name="document_references"
                            size="22"
                            className="form-file"
                        />

                    </div>
                    <div className="description" id="document-references-description">
                        Sadece 1 dosya. <br />
                        32 MB ile sınırlıdır. <br />
                        İzin verilen türler: txt, rtf, pdf, doc, docx, odt, ppt, pptx, odp, xls, xlsx, ods.
                    </div>
                </div>
                <div className="orders-divider"></div>
                <div data-drupal-selector="edit-actions" className="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions">
                    <a className='newsletter-archives-link'>Gönder</a>
                </div>
            </form>
        </div>
    );
};

export default Orders;