import React, { useState } from 'react';

interface PersonaEdit {
    tipoDocumento: string;
    numeroDocumento: string;
    primerNombre: string;
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
            <div>
                <label>Tipo de Documento</label>
                <input name="tipoDocumento" value={editData.tipoDocumento} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Documento</label>
                <input name="numeroDocumento" value={editData.numeroDocumento} onChange={handleChange} />
            </div>
            <div>
                <label>Primer Nombre</label>
                <input name="primerNombre" value={editData.primerNombre} onChange={handleChange} />
            </div>

            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default EditForm;