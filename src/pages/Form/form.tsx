import React from 'react';
import {useForm} from "react-hook-form";

export const MyForm = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm();
    return (
        <div>
<h1 className= 'w-full text-3xl text-white my-4 float-right rounded-lg bg-gradient-to-r from-blue-500 via-blue-800 to-pink-500 border-r-4 py-2 px-4'> formulario</h1>
            <div className='flexcontain-layout px-4 mx-auto xl:container'>
                <form className="flex gap-4 p-4">
                    <div className="w-full md:w-1/2">
                        <div className="px-3 mb-6">
                            <label htmlFor="firstName"
                                   className="block mb-2 text-sm font-medium text-gray-900">Nombres*</label>
                            <input
                                type="text"
                                {...register('nombre', {
                                    required: {
                                        value: true,
                                        message: 'Este campo es requerido, por favor ingrese su nombre'
                                    },
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
                            <label htmlFor="lastName"
                                   className="block mb-2 text-sm font-medium text-gray-900">Primer Apellido*</label>
                            <input
                                type="text"
                                {...register('apellido', {required: true})}
                                id="lastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese primer apellido"
                            />
                            {errors.apellido && <p className="text-red-500 text-xs">Este campo es requerido.</p>}
                        </div>
                        <div className="px-3 mb-6">
                            <label htmlFor="secondLastName"
                                   className="block mb-2 text-sm font-medium text-gray-900">Segundo Apellido*</label>
                            <input
                                type="text"
                                {...register('apellido2', {required: true})}
                                id="secondLastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese segundo apellido."
                            />
                            {errors.apellido2 && <p className="text-red-500 text-xs">Este campo es requerido</p>}
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900">Correo*</label>
                            <input
                                type="email"
                                {...register('email', {required: true})}
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese su correo"
                            />
                            {errors.email && <p className="text-red-500 text-xs">Este campo es requerido</p>}
                        </div>
                        <div>
                            <label htmlFor="phone"
                                   className="block mb-2 text-sm font-medium text-gray-900">Teléfono*</label>
                            <input
                                type="tel"
                                {...register('phone', {required: true})}
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese su teléfono"
                            />
                            {errors.phone && <p className="text-red-500 text-xs">Este campo es requerido</p>}
                        </div>
                        <div>
                            <label htmlFor="birthDate"
                                   className="block mb-2 text-sm font-medium text-gray-900">Fecha de Nacimiento*</label>
                            <input
                                type="date"
                                {...register('fechaNacimiento', {
                                    required: {value: true, message: "Fecha de nacimiento es requerida, por favor ingrese su fecha de nacimiento"},
                                    validate: (value) => {
                                        const date = new Date(value);
                                        const currentDate = new Date();
                                        const edad = currentDate.getFullYear() - date.getFullYear();
                                        return edad >= 18 || "Debe ser mayor de edad, por favor ingrese una fecha válida";
                                    }
                                })}
                                id="birthDate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div className="flex justify-end space-x-2 mt-5">
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-4 flex items-center justify-center">
                                Enviar
                            </button>
                            <button className="bg-red-400 text-white px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
                                Cancelar
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

