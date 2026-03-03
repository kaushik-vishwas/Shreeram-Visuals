import React, { useState } from 'react';
import styles from './faq.module.css';
import { Faq } from '../../components/Svg';


const FAQ = () => {
    const [ans, setAns] = useState(null);

    const handleToggle = (index) => {
        setAns(ans === index ? null : index);
    };

    return (
        <div className={styles.container}>
           
            <h2>Frequently Asked Questions</h2>
            <br />
            <div className={styles.aligned}>
                <div className={styles.box} onClick={() => handleToggle(1)}>
                    <p className={styles.question}>What types of events does Shriram Visuals cater to?</p>
                    <Faq id={ans === 1} />
                </div>
                {ans === 1 && (
                    <div className={styles.answer}>
                        Shriram Visuals cater to a diverse range of events, including corporate gatherings such as presentations, conferences, product launches, trade shows, team-building events, rewards & recognitions, Hackathons, and Trainings.
                    </div>
                )}
            </div>
            <div className={styles.aligned}>
                <div className={styles.box} onClick={() => handleToggle(2)}>
                    <p className={styles.question}>What equipment do you offer for rent?</p>
                    <Faq id={ans === 2} />
                </div>
                {ans === 2 && (
                    <div className={styles.answer}>
                        We offer a wide range of rentals for events, curated with years of experience to ensure your vision comes to life flawlessly. Explore our diverse selection: <br /><br />
                        Projector on rent: Our projectors in standard, high-definition, and ultra-bright models suitable for different venues and audiences <br /><br />
                        Speakers for rent: Portable PA Systems, JBL Subwoofers, JBL, and QSC Speakers for any event size. Beyond the Basics: <br /><br />
                        - TV Rentals: Choose from a variety of sizes (40” to 75”) for presentations, signage, and entertainment, seamlessly integrated by our technicians. <br /><br />
                        - LED Walls: Create a stunning backdrop or displays with our impressive LED wall rentals. <br /> <br />
                        - Lighting: Transform your space with our range of lighting options, from up lighting to stage lighting and dance floor effects. <br /><br />
                        - Stage Setup: Modular platforms, backdrops, masking, and podium, to create a professional and impactful stage. <br /><br />
                        - Photography and Videography: Capture every precious moment with our experienced professionals. <br /><br />
                        - Virtual Conferencing: Seamlessly connect with remote participants through our high-quality virtual conferencing solutions. <br /><br />
                        - Decorations: Balloon decorations, Table linens, centrepieces, chairs, and more to create the perfect ambiance. <br /><br />
                        - Shamiana: Rent a beautiful and functional tent for outdoor events. <br /><br />
                        - Catering Services: Delight your guests with delicious food for any occasion.
                    </div>
                )}
            </div>
            <div className={styles.aligned}>
                <div className={styles.box} onClick={() => handleToggle(3)}>
                    <p className={styles.question}>Do you offer delivery & setup?</p>
                    <Faq id={ans === 3} />
                </div>
                {ans === 3 && (
                    <div className={styles.answer}>
                        Yes, we deliver within Bangalore and nearby cities and provide setup and technical support throughout the event unless it is not required.
                    </div>
                )}
            </div>
            <div className={styles.aligned}>
                <div className={styles.box} onClick={() => handleToggle(4)}>
                    <p className={styles.question}>What are your rental charges?</p>
                    <Faq id={ans === 4} />
                </div>
                {ans === 4 && (
                    <div className={styles.answer}>
                        Rental charges depend on equipment selection, event duration, and additional services. Contact us to receive a personalized quote for your event.
                    </div>
                )}
            </div>
            <div className={styles.aligned}>
                <div className={styles.box} onClick={() => handleToggle(5)}>
                    <p className={styles.question}>How do I book my event with you?</p>
                    <Faq id={ans === 5} />
                </div>
                {ans === 5 && (
                    <div className={styles.answer}>
                        Call on the given phone number or send a SMS or WhatsApp text message. <br /> Phone: +91 9986793055
                    </div>
                )}
            </div>
            <div className={styles.aligned}>
                <div className={styles.box} onClick={() => handleToggle(6)}>
                    <p className={styles.question}>Do you offer discounts for long-term rentals?</p>
                    <Faq id={ans === 6} />
                </div>
                {ans === 6 && (
                    <div className={styles.answer}>
                        Yes, we offer special discounts for long-term rentals. The discount depends on the equipment and duration, so contact us for personalized discounted quotes.
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
