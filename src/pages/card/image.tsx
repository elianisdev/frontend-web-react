import React from 'react';

export const ImageCard = () => {
    let name = ["Hercules", "Fiona", "Sirenita"];
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col items-center m-2">
                    <img className="w-36 h-36 rounded-lg object-cover" src="https://hips.hearstapps.com/hmg-prod/images/dioses-griegos-hercules-disney-64d3cd47d00f9.jpg?crop=0.489xw:0.870xh;0.442xw,0.130xh&resize=1200:*" alt="hercules"/>
                    <h1 className="text-3xl font-semibold text-center mt-2">{name[0]}</h1>
                </div>
                <div className="flex flex-col items-center m-2">
                    <img className="w-36 h-36 rounded-lg object-cover" src="https://pbs.twimg.com/profile_images/860961156252479488/Fj0x5gzo_400x400.jpg" alt="fiona"/>
                    <h1 className="text-3xl font-semibold text-center mt-2">{name[1]}</h1>
                </div>
                <div className="flex flex-col items-center m-2">
                    <img className="w-36 h-36 rounded-lg object-cover" src="https://s1.elespanol.com/2020/03/24/bluper/bluper_477214870_169337881_1706x960.jpg" alt="sirenita"/>
                    <h1 className="text-3xl font-semibold text-center mt-2">{name[2]}</h1>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;