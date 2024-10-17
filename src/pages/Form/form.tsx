import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const MyForm = () => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        setValue('nombre', '');
        reset();
    });

    return (
        <>
            <div>
                <h1 className='mb-6 w-full text-3xl text-white text-center my-4 float-right rounded-lg bg-gradient-to-r from-blue-500 via-blue-800 to-pink-500 border-r-4 py-2 px-4'>Formulario</h1>
                <div className='flexcontain-layout px-4 mx-auto xl:container'>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 mb-6">
                        <div className="w-full md:w-1/2">
                            <div className="px-3 mb-6">
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Nombres*</label>
                                <input
                                    type="text"
                                    {...register('nombre', {
                                        required: { value: true, message: 'Este campo es requerido, por favor ingrese su nombre' },
                                        minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres, por favor ingrese un nombre válido' },
                                        maxLength: { value: 20, message: 'El nombre debe tener menos de 20 caracteres, por favor ingrese un nombre válido' },
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
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Primer Apellido*</label>
                                <input
                                    type="text"
                                    {...register('apellido', { required: true })}
                                    id="lastName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingrese primer apellido"
                                />
                                {errors.apellido && <p className="text-red-500 text-xs">Este campo es requerido.</p>}
                            </div>
                            <div className="px-3 mb-6">
                                <label htmlFor="secondLastName" className="block mb-2 text-sm font-medium text-gray-900">Segundo Apellido*</label>
                                <input
                                    type="text"
                                    {...register('apellido2', { required: true })}
                                    id="secondLastName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingrese segundo apellido."
                                />
                                {errors.apellido2 && <p className="text-red-500 text-xs">Este campo es requerido</p>}
                            </div>
                            <div className="px-3 mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo*</label>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingrese su correo"
                                />
                                {errors.email && <p className="text-red-500 text-xs">Este campo es requerido</p>}
                            </div>
                            <div className="px-3 mb-6">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Teléfono*</label>
                                <input
                                    type="tel"
                                    {...register('phone', { required: true })}
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingrese su teléfono"
                                />
                                {errors.phone && <p className="text-red-500 text-xs">Este campo es requerido</p>}
                            </div>
                        </div>
                        <div className="w-full flex justify-end space-x-3 mt-auto">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                type="submit">
                                Enviar
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                type="button"
                                onClick={openModal}>
                                Cancelar
                            </button>
                        </div>
                    </form>

                    {isOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                            <div className="bg-white rounded-lg shadow dark:bg-gray-700 p-4 md:p-5 relative">
                                <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={closeModal}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="text-center">
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to cancel?</h3>
                                    <button type="button"
                                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                            onClick={closeModal}>
                                        Yes, I'm sure
                                    </button>
                                    <button type="button"
                                            className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                            onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}