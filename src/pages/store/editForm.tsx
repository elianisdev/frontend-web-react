import React, { useState } from 'react';

interface PersonaEdit {
    tipoDocumento: string;
    numeroDocumento: string;
    primerNombre: string;
    primerApellido: string;
}

interface EditFormProps {
    persona: PersonaEdit;
    onSave: (persona: PersonaEdit) => void;
}
const EditForm: React.FC<EditFormProps> = ({ persona, onSave }) => {
    const [editData, setEditData] = useState<PersonaEdit>(persona);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(editData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flexcontain-layout px-4 mx-auto xl:container'>
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo
                            de documento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numero
                            de Documento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer
                            Nombre
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer
                            Apellido
                        </th>
                    </tr>
                    </thead>

                </table>
                <div className="flex justify-end space-x-2 mt-5">
                    <button
                        className="bg-green-500 text-white px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
                        <span className="material-icons mr-3">save</span>
                        Guardar Cambios
                    </button>
                    <button
                        className="bg-red-400 text-white px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
                        <span className="material-icons mr-3">cancel</span>
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditForm;