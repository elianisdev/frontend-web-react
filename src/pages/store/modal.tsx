import React from 'react';

interface Persona {
    tipoDocumento: string;
    numeroDocumento: string;
    primerNombre: string;
    primerApellido: string;

}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [datos, setDatos] = React.useState<Persona[]>([]);
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
                <button onClick={onClose} className="float-right font-bold">X</button>
                <h2 className="text-xl font-bold mb-4">Búsqueda Avanzada</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Documento</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número de Documento</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer Apellido</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {datos.map ((persona:Persona, index:number) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.tipoDocumento}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.numeroDocumento}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.primerNombre}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.primerApellido}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Seleccionar</button>
                            </td>
                        </tr>
                    ))

                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Modal;