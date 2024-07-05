import React, {useState} from 'react';
import Modal from './modal';

export const StorePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <h1 className='text-3xl'>Administrador de Personas</h1>
            <h2 className="w-full text-3xl text-white my-4 float-right rounded-lg bg-gradient-to-r from-green-500 via-blue-800 to-blue-300 border-r-4">informacion</h2>
            <form className="flex flex-col gap-4 p-4">
                <div className="flex gap-4">
                    <div>
                        <label htmlFor="docType" className="block mb-2 text-sm font-medium text-gray-900">Tipo de Documento*</label>
                        <select id="docType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected></option>
                            <option>CC</option>
                            <option value="ID">Ti</option>
                            <option value="passport">Pasaporte</option>
                            <option value="driverLicense">Licencia de Conducir</option>
                        </select>
                    </div>
                    <div className="flex gap-4 items-end">
                        <div>
                            <label htmlFor="docNumber" className="block mb-2 text-sm font-medium text-gray-900">Número de Documento*</label>
                            <input type="text" id="docNumber"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese el número de documento"/>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Buscar
                        </button>
                        <button type="button"
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Búsqueda
                            Avanzada
                        </button>
                         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

