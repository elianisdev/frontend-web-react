import {FC} from "react";
import styles from './card.module.scss';


type Card = {
    title: string,
    description: string,
    img: string
}

    export const CardComponent: FC<{ Card: any }> = () => {
        const cards = [
            {
                title: 'Tarjeta 1',
                description: 'Esta es la descripción de la tarjeta 1',
                img: 'url-de-la-imagen-1'
            },
            {
                title: 'Tarjeta 2',
                description: 'Esta es la descripción de la tarjeta 2',
                img: 'url-de-la-imagen-2'
            },
            {
                title: 'Tarjeta 2',
                description: 'Esta es la descripción de la tarjeta 2',
                img: 'url-de-la-imagen-2'
            },
            {
                title: 'Tarjeta 3',
                description: 'Esta es la descripción de la tarjeta 2',
                img: 'url-de-la-imagen-2'
            },
            {
                title: 'Tarjeta 4',
                description: 'Esta es la descripción de la tarjeta 2',
                img: 'url-de-la-imagen-2'
            },
            {
                title: 'Tarjeta 5',
                description: 'Esta es la descripción de la tarjeta 2',
                img: 'url-de-la-imagen-2'
            }
        ];

        return (
            <div className={styles.cardContainer}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.tarjeta}>
                        <div className={styles.titulo}>{card.title}</div>
                        <div className={styles.cuerpo}>
                            <img
                                src={card.img}
                                alt="muestra"/>
                            <p>{card.description}</p>
                        </div>
                        <div className={styles.pie}>
                            <a href="#">Más información</a>
                        </div>
                    </div>
                ))}
            </div>
        );

}