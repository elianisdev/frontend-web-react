import React, {useState} from 'react';



export const Characters = () => {
    const [cards, setCards] = useState([])

    const CharactersCards = [

        {
            name: "Rick",
            status: "Alive",
            species: "Human"
        },
        {
            name: "Rick",
            status: "Alive",
            species: "Human"
        },
        {
            name: "Rick",
            status: "Alive",
            species: "Human"
        },
    ]


    return (
        <div>
            <h1>Characters</h1>
            <div>
                {CharactersCards.map((card : any ) => (
                    <div>
                        <h2>{card.name}</h2>
                        <p>{card.status}</p>
                        <p>{card.species}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

