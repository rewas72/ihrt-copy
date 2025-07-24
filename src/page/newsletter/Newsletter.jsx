import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        agreement: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="layout-content content">
            <div className="region region-content">
                <h1 className="page-title">Bülten</h1>
                <form
                    className="webform-submission-form webform-submission-add-form webform-submission-newsletter-form webform-submission-newsletter-add-form js-webform-details-toggle webform-details-toggle"
                    onSubmit={handleSubmit}
                >
                    <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-nom-prenom form-item-nom-prenom">
                        <label htmlFor="edit-nom-prenom" className="form-label js-form-required form-required">
                            Ad Soyad
                        </label>

                        <input
                            data-counter-type="character"
                            data-counter-minimum="6"
                            className="js-webform-counter webform-counter form-text required"
                            minLength="6"
                            id="edit-nom-prenom"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            size="60"
                            maxLength="255"
                            required
                            aria-required="true"
                        />
                    </div>

                    <div className="js-form-item form-item js-form-type-webform-email-multiple form-type-webform-email-multiple js-form-item-newsletter form-item-newsletter">
                        <label htmlFor="edit-newsletter" className="form-label js-form-required form-required">
                            E-posta
                        </label>
                        <input
                            data-drupal-selector="edit-newsletter"
                            aria-describedby="edit-newsletter--description"
                            type="email"
                            id="edit-newsletter"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            size="60"
                            placeholder="E-posta adresiniz"
                            className="form-text webform-email-multiple required"
                            required
                            aria-required="true"
                        />
                        <div className="description">
                            <div id="edit-newsletter--description" className="webform-element-description">
                                Birden fazla e-posta adresi virgülle ayrılabilir.
                            </div>
                        </div>
                    </div>

                    <div className="webform-element--title-inline js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-accord-newsletter form-item-accord-newsletter">
                        <input
                            data-webform-required-error="Bu kutuyu işaretlemeniz gerekiyor"
                            data-drupal-selector="edit-accord-newsletter"
                            type="checkbox"
                            id="edit-accord-newsletter"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            className="form-checkbox required"
                            required
                            aria-required="true"
                        />
                        <label htmlFor="edit-accord-newsletter" className="option js-form-required form-required">
                            IRHT bültenini almak istiyorum. Bülten içindeki bağlantı ile istediğim zaman abonelikten çıkabilirim.
                        </label>
                    </div>


                    <div id="edit-archives" className="js-form-item form-item js-form-type-processed-text form-type-processed-text js-form-item- form-item- form-no-label">
                        <ul className="newsletter-archives-list">
                            <li>
                                <a
                                    href="https://www.irht.cnrs.fr/fr/qui-sommes-nous/outils-de-communication"
                                    className="newsletter-archives-link"
                                >
                                    ARCHIVES DE LA LETTRE D'INFORMATION
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="newsletter-divider"></div>

                    <div data-drupal-selector="edit-actions" className="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions">
                        <a className='newsletter-archives-link'>Abone Ol</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;