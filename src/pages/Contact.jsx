import "./../css/index.css";
import "./../css/Contact.css";
import Slideshow from "./../components/Slideshow";
import ContactForm from "./../components/ContactForm";
import fado1 from "./../images/gpt-fado.png";

const Contact = () => {
    return (
        <main id="main-content" className="columns">
            <ol>
                <li id="about-columns">
                    <div className="flex-item">
                        <h3>Contact Information</h3>
                        <div id="time-table" className="contact">
                            <ol id="contact">
                                <li>Telephone: +1(000)000-0000</li>
                                <li>Catering Inquiries: some_email@casadefranco.com</li>
                            </ol>
                        </div>
                        <h3>Let us know how we're doing!</h3>
                        <section className="one">
                                    <ContactForm />
                        </section>
                    </div>
                </li>
            </ol>
            <Slideshow />
        </main>
    );
};

export default Contact;