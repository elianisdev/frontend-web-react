import React from 'react';

interface Modal2Props {
    isOpen?: boolean,
    onClose?: () => void
}

export const Modal2 = ({isOpen, onClose}: Modal2Props) => {


    return (
        <>

            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
                        <div className="bg-amber-50 p-5 rounded flex flex-col justify-center items-center gap-5">
                            <div>
                                <label htmlFor="" className="mr-3 font-semibold font-[Poppins]">
                                    <input type="text"
                                           className="w-64 px4 border-2 border-gray-300 rounded-lg focus:outline- none focus:border-indigo-500 duration-200"/>Nombre
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="mr-3 font-semibold font-[Poppins]">
                                    <input type="text"
                                           className="w-64 px4 border-2 border-gray-300 rounded-lg focus:outline- none focus:border-indigo-500 duration-200"/>Apellido
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="mr-3 font-semibold font-[Poppins]">
                                    <input type="text"
                                           className="w-64 px4 border-2 border-gray-300 rounded-lg focus:outline- none focus:border-indigo-500 duration-200"/>Edad
                                </label>
                            </div>
                            <div>
                                <label htmlFor="" className="mr-3 font-semibold font-[Poppins]">
                                    <input type="text"
                                           className="w-64 px4 border-2 border-gray-300 rounded-lg focus:outline- none focus:border-indigo-500 duration-200"/>Correo
                                </label>
                            </div>
                            <div>
                                <button className="bg-red-400 py-2 px-6 rounded-sm text-cyan-50 font-bold m-5"
                                        onClick={onClose}>
                                    Close Modal
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
};
