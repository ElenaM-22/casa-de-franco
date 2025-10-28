import "./../css/index.css";
import "./../css/Contact.css";
import fado1 from "./../images/gpt-fado.png";

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
                                    <section className="one">
                                        <h3>Let us know how we're doing!</h3>
                                        <form method="POST" id="contact-form">

                                            <input type="hidden" name="access_key" value="2aa8a7c4-78b9-41ca-ae04-93643c34b79b"/>

                                            <p>
                                                <label htmlFor="name">Your Name:</label>
                                                <input id="name" type="text" name="name" required/>
                                            </p>
                                            <p>
                                                <label htmlFor="email">Your Email:</label>
                                                <input id="email" type="email" name="email" required/>
                                            </p>
                                            <p>
                                                <label htmlFor="message">What would you like to tell us today? </label>
                                                <textarea id="message" name="message" required></textarea>
                                            </p>
                                            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                                            <p><button type="submit">Submit Form</button></p>

                                            <div id="contact-result">
                                            </div>
                                            
                                            <p id="message-sent"></p>
                                        </form>
                                    </section>
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