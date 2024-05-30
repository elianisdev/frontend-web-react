import {FC, useState, useEffect, SetStateAction} from "react";
import styles from './card.module.scss';
import {poke} from '../../api/poke';

type Card = {
    name: string,
    abilities: {
        ability: {
            name: string,
            url: string,
        },
        is_hidden: boolean,
        slot: number,
    }[],
}
export const CardComponent: FC<{ Card: any }> = () => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        poke.getAll({gameIndex: 1})
            .then((response: { data: any; }) => response.data)
            .then((data: SetStateAction<Card[]>) => {
                if (Array.isArray(data)) {
                    const newCards = data.map(item => ({
                        name: item.name,
                        abilities: item.abilities,
                        // más propiedades...
                    }));
                    setCards(newCards);
                } else {
                    console.error('No se han devuelto datos desde la API:', data);
                }
            });
    }, []);
    return (
        <div className={styles.cardContainer}>
            {cards.map((card, index) => (
                <div key={index} className={styles.tarjeta}>
                    <div className={styles.titulo}>{card.name}</div>
                    <div className={styles.cuerpo}>
                        <p>{card.abilities[0].ability.url}</p>
                    </div>
                    <div className={styles.pie}>
                        <a href="#">Más información</a>
                    </div>
                </div>
            ))}
        </div>
    );
}