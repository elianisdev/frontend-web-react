import React from 'react';
import EditForm  from "../../pages/store/editForm";

class PersonaEdit {
    tipoDocumento: string;
    numeroDocumento: string;
    primerNombre: string;
    primerApellido: string;

    constructor(tipoDocumento: string, numeroDocumento: string, primerNombre: string, primerApellido: string) {
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.primerNombre = primerNombre;
        this.primerApellido = primerApellido;
    }
}
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
    const [mostrarFormulario, setMostrarFormulario] = React.useState(false);
    const [personaAEditar, setPersonaAEditar] = React.useState<PersonaEdit | null>(null);

    const handleEditarClick = (persona: Persona) => {
        setPersonaAEditar(new PersonaEdit(
            persona.tipoDocumento,
            persona.numeroDocumento,
            persona.primerNombre,
            persona.primerApellido
        ));
        setMostrarFormulario(true);
    };
    const datosMock: Persona[] = [
        {
            tipoDocumento: 'CC',
            numeroDocumento: '123456789',
            primerNombre: 'Nicolas',
            primerApellido: 'Perez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '987654321',
            primerNombre: 'Pedro',
            primerApellido: 'Gomez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '123456789',
            primerNombre: 'Carlos',
            primerApellido: 'Perez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '987654321',
            primerNombre: 'Pedro',
            primerApellido: 'Gomez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '123456789',
            primerNombre: 'Alberto',
            primerApellido: 'Perez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '987654321',
            primerNombre: 'Pedro',
            primerApellido: 'Gomez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '123456789',
            primerNombre: 'Pablo',
            primerApellido: 'Perez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '987654321',
            primerNombre: 'Pedro',
            primerApellido: 'Gomez',
        },
        {
            tipoDocumento: 'CC',
            numeroDocumento: '123456789',
            primerNombre: 'Camilo',
            primerApellido: 'Perez',
        },

    ];
    const [datos, setDatos] = React.useState<Persona[]>(datosMock);
    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
                <button onClick={onClose} className="float-right font-bold">X</button>
                <h2 className="text-xl font-bold mb-4">Búsqueda Avanzada</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo
                            de Documento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número
                            de Documento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer
                            Nombre
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer
                            Apellido
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {datos.map((persona: Persona, index: number) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.tipoDocumento}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.numeroDocumento}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.primerNombre}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{persona.primerApellido}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex justify-around">
                               <span
                                   className="material-icons text-blue-500 hover:text-blue-700 cursor-pointer"
                                   onClick={() => handleEditarClick(persona)}
                               >
                                 edit
                                </span>
                                <span
                                    className="material-icons text-red-500 hover:text-red-700 cursor-pointer">delete</span>
                            </td>

                        </tr>

                    ))}

                    </tbody>
                </table>
                <div className="flex justify-end space-x-2 mt-5">
                    {mostrarFormulario && personaAEditar ? (
                        <EditForm
                            persona={personaAEditar}
                            onSave={(personaEditada) => {
                                setDatos((prevDatos) =>
                                    prevDatos.map((prevPersona) =>
                                        prevPersona.numeroDocumento === personaEditada.numeroDocumento
                                            ? { ...prevPersona, ...personaEditada }
                                            : prevPersona
                                    )
                                );
                                setMostrarFormulario(false);
                                setPersonaAEditar(null);
                            }}
                        />
                    ) : (
                        <button
                            className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
                            <span className="material-icons mr-2">delete_outline</span>
                            Limpiar
                        </button>

                    )}

                </div>
            </div>
        </div>

    );
};

export default Modal;
