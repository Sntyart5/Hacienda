import React from 'react';
import './Location.css';

export function Location() {
  return (
    <>
      <section className="location">
        <h1>Our Location</h1>
        <div >
          <iframe
            className='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13524.055272325033!2d-116.581291!3d32.068875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d8f041b22c5a0f%3A0x785a73d80a62406b!2sHacienda%20Guadalupe!5e0!3m2!1sen!2suy!4v1700223290128!5m2!1sen!2suy"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
