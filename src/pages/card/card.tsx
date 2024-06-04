import {FC, useState, useEffect} from "react";
import styles from './card.module.scss';
import {poke} from '../../api/poke';

type Card = {
    image: string | undefined;
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
    const [cards, setCards] = useState<Card[]>([]); //almacena lista de tarjetas

    useEffect(() => {
        const pokemonIds = [1, 2, 3, 4, 5]; // Los IDs de los Pokémon que quiero obtener

        Promise.all(pokemonIds.map(id => poke.getAll({id})))
            .then((responses) => {
                return responses.map(response => response.data);
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    const newCards = data.map(item => ({
                        name: item.name,
                        abilities: item.abilities.map((ability: any) => ({
                            ability: {
                                name: ability.ability.name,
                                url: ability.ability.url,
                            },
                            is_hidden: ability.is_hidden,
                            slot: ability.slot,
                        })),
                        image: item.sprites.front_default, // Agrega esta línea
                    }));
                    setCards(newCards);
                } else {
                    console.error('No se han devuelto datos desde la API:', data);
                }
            });
    }, []);

    return (
        <div className={styles.cardContainer}>
            {cards.map((card, id) => (
                <div key={id} className={styles.tarjeta}>
                    <img src={card.image} alt={card.name} /> {/* Agrega esta línea */}
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
};