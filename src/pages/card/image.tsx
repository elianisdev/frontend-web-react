import React from 'react';

export const ImageCard = () => {
    let name =["Hercules", "Fiona","Sirenita"] ;
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center">
                <img className="w-36 h-36 rounded-lg object-cover" src="https://hips.hearstapps.com/hmg-prod/images/dioses-griegos-hercules-disney-64d3cd47d00f9.jpg?crop=0.489xw:0.870xh;0.442xw,0.130xh&resize=1200:*" alt="hercules"/>
            </div>
            <div className= "flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold text-center">{name [0]}</h1>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-36 h-36 rounded-lg object-cover" src="https://pbs.twimg.com/profile_images/860961156252479488/Fj0x5gzo_400x400.jpg" alt="fiona"/>
                </div>
                <div className= "flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold text-center">{name [1]}</h1>

                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="w-36 h-36 rounded-lg object-cover" src="https://s1.elespanol.com/2020/03/24/bluper/bluper_477214870_169337881_1706x960.jpg" alt="sirenita"/>
                </div>
                <div className= "flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold text-center">{name [2]}</h1>

                </div>
            </div>

        </div>
    );
};

export default ImageCard;