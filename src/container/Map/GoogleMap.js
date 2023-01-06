import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=1%20Sansome%20St%20%2335th%2C%20San%20Francisco%2C%20CA%2094104%2C%20Amerika%20Birle%C5%9Fik%20Devletleri+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
