import './../css/index.css';
import "./../css/Menu.css";
import Food from './../components/Food';
import bevPic from "../images/sangria.jpg";

const About = () => {
    return (
        <main id="main-content">
            <ol>
                <li class="columns">
                    <div class="menu-list">
                        
                        <div id ="starters" class="menu-columns">
                            <h3 class = "food-name">Entradas (Starters)</h3>
                            <Food name="Caldo Verde" description="Traditional kale soup with potatoes, chouriço, and olive oil" price ="8"/>
                            </div>
                        <div id = "entrees" class="menu-columns">
                            <h3 class = "food-name">Pratos Principais (Entrees)</h3>
                            <Food name = "Bacalhau à Brás" description = "Shredded cod with potatoes, onions, and eggs" price="22"/>
                        </div>
                        <div id = "sides" class="menu-columns">
                            <h3 class = "food-name">Acompanhamentos(Sides)</h3>
                            <Food name = "Arroz de Tomate" description = "Tomato rice" price ="6"/>
                        </div>
                    </div>
                </li>
                <li class="columns">
                    <div id="bev-list">
                        <h3>Bebidas(Beverages)</h3>
                        <div id="content-list">
                            <div id="alcohol-list">
                                <ol>
                                    <li>Vinho Verde (Glass) – $9 | Bottle $34</li>
                                    <li>Douro Red Wine (Glass) – $11 | Bottle $42</li>
                                    <li>Port Wine (Glass) – $8 | Bottle $30</li>
                                    <li>Portuguese Beer (Super Bock or Sagres) – $5</li>
                                    <li>Sangria(Glass) – $8 | Bottle $32</li>
                                </ol>
                                <h4>Non-alcoholic</h4>
                                <ol>
                                    <li>Sumol(Orange or Pineapple soda) – $4</li>
                                    <li>Portuguese Lemonade – $4</li>
                                    <li>Sparkling Water – $4</li>
                                    <li>Portuguese Coffee (Bica) – $2.5</li>
                                    <li>Galão (Portuguese latte) – $5</li>
                                    <li>Soft Drinks – $3</li>
                                </ol>
                            </div>
                            <div id="sangria-pic">
                                <img id="sangria" src={bevPic}/>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </main>
    );
};

export default About;