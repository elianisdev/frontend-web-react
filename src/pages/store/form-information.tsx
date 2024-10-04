import React from 'react';
import  {useForm} from 'react-hook-form';

export const FormInformation = () => {
    const {register, handleSubmit,
        formState: {errors},
        watch,
        setValue,
        reset
    } = useForm();

    console.log(errors);

    const onSubmit = handleSubmit((data) => {
    console.log(data)

        alert('Datos guardados correctamente')
        setValue('nombre', '')

        reset()
    })

    return (
        <div className='contain-content py-3 px-10'>
            <h2 className="w-full text-3xl text-white my-4 float-right rounded-lg bg-gradient-to-r from-green-500 via-blue-800 to-blue-300 border-r-4 py-2 px-4">Información</h2>
            <div className='flexcontain-layout px-4 mx-auto xl:container'>
                <form
                    onSubmit={onSubmit}
                    className="flex gap-4 p-4"
                >
                    <div className="w-full md:w-1/2">
                        <div className="px-3 mb-6">
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                                Nombres*</label>
                            <input
                                type="text"
                                {...register('nombre', {
                                    required: {
                                        value: true,
                                        message: 'Este campo es requerido, por favor ingrese su nombre'},
                                    minLength: {
                                        value: 3,
                                        message: 'El nombre debe tener al menos 3 caracteres, por favor ingrese un nombre válido'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'El nombre debe tener menos de 20 caracteres, por favor ingrese un nombre válido'
                                    },
                                })}
                                id="Names"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese sus nombres"
                            />
                            {errors.nombre && errors.nombre.message && (
                                <p className="text-red-500 text-xs">{String(errors.nombre.message)}</p>
                            )}

                        </div>

                        <div className="px-3 mb-6">
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Primer
                                Apellido*</label>
                            <input type="text"
                                   {...register('apellido', {required: true})}
                                   id="lastName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese primer apellido"
                            />

                            {errors.apellido && <p className="text-red-500 text-xs">Este campo es requerido.</p>}

                        </div>
                        <div className="px-3 mb-6">
                            <label htmlFor="secondLastName" className="block mb-2 text-sm font-medium text-gray-900">Segundo
                                Apellido*</label>
                            <input type="text"
                                   {...register('apellido2', {required: true})}
                                   id="secondLastName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese segundo apellido."
                            />

                            {errors.apellido2 && <p className="text-red-500 text-xs">Este campo es requerido</p>}

                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="px-3 mb-6">
                            <label htmlFor="birthDate" className="block mb-2 text-sm font-medium text-gray-900">Fecha de
                                Nacimiento*</label>
                            <input type="date"
                                   {...register('fechaNacimiento', {
                                           required: {
                                               value: true,
                                               message: "Fecha de nacimiento es requerida, por favor ingrese su fecha de nacimiento"
                                           },
                                       validate: (value) => {
                                             const date = new Date(value);
                                                const currentDate = new Date()

                                                   const edad= currentDate.getFullYear() -
                                                    date.getFullYear();

                                                return edad >= 18 || "Debe ser mayor de edad, por favor ingrese una fecha válida";
                                            }

                                        }

                            )}

                                   id="birthDate"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>

                        </div>
                        <div className="px-3 mb-6">
                            <label htmlFor="gender"
                                   className="block mb-2 text-sm font-medium text-gray-900">Género*</label>
                            <input type="text"
                                   {...register('genero')}
                                   id="gender"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese género"/>
                        </div>
                        <div className="px-3 mb-6">
                            <label htmlFor="civilStatus" className="block mb-2 text-sm font-medium text-gray-900">Estado
                                Civil*</label>
                            <input type="text"
                                   {...register('estado', {required: true})}
                                   id="civilStatus"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese estado civil"
                            />

                            {errors.estado && <p className="text-red-500 text-xs">Este campo es requerido</p>}

                        </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-5">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-3 py-1 text-sm rounded-lg mt-4 flex items-center justify-center">
                            <span className="material-icons mr-2">save</span>
                            Guardar
                        </button>
                        <pre>{JSON.stringify(watch(), null, 2)}</pre>
                    </div>
                </form>
                <div className="flex justify-end space-x-2 mt-5">
                    <button
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
                        <span className="material-icons mr-2">delete_outline</span>
                        Limpiar
                    </button>
        <button
            className="bg-red-400 text-white px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
            <span className="material-icons mr-3">cancel</span>
            Cancelar
        </button>
    </div>
    </div>
</div>
);
};