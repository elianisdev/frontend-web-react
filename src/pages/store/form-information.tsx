import React from 'react';


export const FormInformation = () => {
    return (
        <div>
            <h2 className="w-full text-3xl text-white my-4 float-right rounded-lg bg-gradient-to-r from-green-500 via-blue-800 to-blue-300 border-r-4 py-1.5 px-2">Información</h2>
            <div className='py-20 px-20'>
                <form className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap flex-0">
                        <div>
                            <label
                                htmlFor="docType"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >Primer Nombre*
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese primer nombre"/>
                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="secondName" className="block mb-2 text-sm font-medium text-gray-900">Segundo
                                    Nombre*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese segundo nombre"/>
                            </div>

                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Primer
                                    Apellido*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese el número de documento"/>
                            </div>

                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="secondName" className="block mb-2 text-sm font-medium text-gray-900">Segundo
                                    Apellido*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese el número de documento"/>
                            </div>

                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Fecha de
                                    Nacimiento*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese el número de documento"/>
                            </div>

                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Pais
                                    de
                                    Nacimiento*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese el número de documento"/>
                            </div>

                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="gender"
                                       className="block mb-2 text-sm font-medium text-gray-900">Genero*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese el número de documento"/>
                            </div>

                        </div>
                        <div className="flex flex-col gap-0">
                            <div>
                                <label htmlFor="civilStatus"
                                       className="block mb-2 text-sm font-medium text-gray-900">Estado Civil*</label>
                                <input type="text" id="docNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Ingrese el número de documento"/>
                            </div>

                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

