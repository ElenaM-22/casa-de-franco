import "./../css/index.css";
import "./../css/Fado.css";
import fadoPic from "../images/fado.jpg";

const Fado = () => {
    return (
        <main id="main-content" class="columns">
            <ol>
                <li>
                    <h3>What is Fado?</h3>
                    <section id="fado">
                        <section>
                            <p>"Fado is a traditional musical style from Portugal, characterized by melancholic melodies and profound lyrics that speak of love, longing, loss, and everyday life. It is typically performed by a fado singer, accompanied by a Portuguese guitar and a fado viola"(Source: portofado.com)</p>
                            <p>We host a Fado show at 8:00 PM every Wednesday and Friday with two different groups of musicians. Tickets are $5 per person and nonrefundable. Tickets are first-come first-serve and may be purchased at the hostess stand upon arrival. You can reserve tickets under your dinner reservation and pay upon arrival.</p>
                            <p> The accompanying video is an example of an authentic Fado showed played in Portugal.</p>
                        </section>
                        <section>
                            <video id="video" alt="local video" controls><source src="images/fado.mp4" type="video/mp4"/></video>
                        </section>
                        <section>
                            <img id = "fado-image" src={fadoPic}/>
                        </section>
                    </section>
                </li>
                <li class="columns">
                    <h3>Fado Schedule</h3>
                    <section id="lists">
                        <section id="list1">
                            <h4>Wednesday:</h4>
                            <ol>
                                <li>Guitar: João Pereira</li>
                                <li>Viola: Tiago Fernandes</li>
                                <li>Singer: Maria Carvalho</li>
                            </ol>
                        </section>
                        <section id="list2">
                            <h4>Friday:</h4>
                            <ol>
                                <li>Guitar: Inês Ribeiro</li>
                                <li>Viola: Miguel Sousa</li>
                                <li>Singer: Beatriz Gomes</li>
                            </ol>
                        </section>
                    </section>
                </li>
            </ol>
        </main>
    );
};

export default Fado;