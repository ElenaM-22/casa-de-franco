import "./../css/index.css";
import "./../css/Contact.css";
import fado1 from "./../images/gpt-fado.png";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main id="main-content" className="columns">
            <ol>
                <li id="about-columns">
                    <div className="flex-item">
                        <h3>Contact Information</h3>
                        <div id="time-table" className="contact">
                            <ol>
                                <li>Telephone: +1(000)000-0000</li>
                                <li>Catering Inquiries: some_email@casadefranco.com</li>
                                <li>
                                    <ContactForm />
                                </li>
                            </ol>
                        </div>
                    </div>
                </li>
            </ol>
            <img id="fado1" src={fado1} alt="Fado" />
        </main>
    );
};

export default Contact;