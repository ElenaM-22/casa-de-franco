import "./../css/Food.css";
import foodPic from "./../images/tart.jpg";

const Food = (props) => {
    return (
        <div class="menu-item">
            <section class="menu-text-section">
                <h6 class="food-name">{props.name}</h6>
                <p>{props.description}</p>
                <p>${props.price}</p>
            </section>
            <section >
                <img class = "menu-images" src={foodPic} alt="food"/>
            </section>
        </div>
    );
};

export default Food;