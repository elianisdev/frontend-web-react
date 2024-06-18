import {FC, useState, useEffect} from "react";
import styles from './card.module.scss';
import {poke} from '../../api/poke';
import {useParams} from "react-router-dom";

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
export const CardComponent: FC<{ Card: number }> = () => {
    const [cards, setCards] = useState<Card[]>([]); //almacena lista de tarjetas
    const {id} = useParams(); //obtiene el id de la URL
    const [loading, setLoading] = useState(true); //estado de carga

    const pokemonIds = async () => {
        try {
            const response = await poke.getAll({id: 23});
            console.log(response.data);
            setLoading(true);
            setCards([
                {
                    image: response.data.sprites.front_default,
                    name: response.data.name,
                    abilities: response.data.abilities,

                },
            ]);
            setLoading(false); //finaliza la carga
        } catch (error) {
            console.error('Error:', error);
            setLoading(false); //finaliza la carga
        }
    }; //función que obtiene los datos de los pokemones

    useEffect(() => {
        pokemonIds();
    }, [id]); //llama a la función pokemonIds() cuando el componente se monta

    return (
        <div className={styles.cardContainer}>
            {loading ? (
                <p>Cargando...</p> // Muestra esto mientras se está cargando
            ) : (
                cards.map((card, id) => (
                    <div key={id} className={styles.tarjeta}>
                        <img src={card.image} alt={card.name} />
                        <div className={styles.titulo}>{card.name}</div>
                        <div className={styles.cuerpo}>
                            <p>{card.abilities[0].ability.url}</p>
                        </div>
                        <div className={styles.pie}>
                            <a href="#">Más información</a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
