import React from 'react';
import styles from './characters.module.scss';



export const Characters = () => {
    //const [cards, setCards] = useState([])

    const CharactersCards = [
        {
            name: "Rick",
            status: "Alive",
            species: "Human",
            image:'https://us.123rf.com/450wm/reginast777/reginast7771712/reginast777171200033/91533598-linda-chica-ping%C3%BCino-de-dibujos-animados-sobre-un-fondo-azul.jpg'
        },
        {
            name: "Rick",
            status: "Alive",
            species: "Human",
            image:'https://image.shutterstock.com/image-photo/3d-cute-colorful-unicorn-valentines-260nw-2401151293.jpg'
        },
        {
            name: "Rick",
            status: "Alive",
            species: "Human",
            image:'https://static.vecteezy.com/system/resources/thumbnails/022/645/069/small/illustration-painting-of-love-riding-on-bicycle-generate-ai-photo.jpg'
        },
    ]


    return (
        <div className={styles.title}>
            <h1>Characters</h1>
            <div className={styles.container}>
                {CharactersCards.map((card : any ) => (
                    <div>
                        <h2>{card.name}</h2>
                        <p>{card.status}</p>
                        <p>{card.species}</p>
                        <img src={card.image} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    );
};

