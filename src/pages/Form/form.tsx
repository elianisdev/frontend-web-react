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

                    </div>
                </form>
            </div>
        </div>
    );
};

