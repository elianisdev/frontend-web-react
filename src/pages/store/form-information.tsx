import React from 'react';
import  {useForm} from 'react-hook-form';

export const FormInformation = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit((data) => {
    console.log(data)
    })

    return (
        <div className='contain-content py-3 px-10'>
            <h2 className="w-full text-3xl text-white my-4 float-right rounded-lg bg-gradient-to-r from-green-500 via-blue-800 to-blue-300 border-r-4 py-2 px-4">Información</h2>
            <div className='flexcontain-layout px-4 mx-auto xl:container'>
                <form
                    onSubmit={onSubmit}
                    className="flex gap-4 p-4">
                    <div className="w-full md:w-1/2">
                        <div className="px-3 mb-6">
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                                Nombres*</label>
                            <input
                                type="text"
                                {...register('nombre')}
                                id="Names"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingrese sus nombres"/>
                        </div>

                        <div className="px-3 mb-6">
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Primer
                                Apellido*</label>
                            <input type="text"
                                   {...register('apellido')}
                                   id="lastName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese primer apellido"/>
                        </div>
                        <div className="px-3 mb-6">
                            <label htmlFor="secondLastName" className="block mb-2 text-sm font-medium text-gray-900">Segundo
                                Apellido*</label>
                            <input type="text"
                                   {...register('segundo apellido')}
                                   id="secondLastName"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese segundo apellido."/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="px-3 mb-6">
                            <label htmlFor="birthDate" className="block mb-2 text-sm font-medium text-gray-900">Fecha de
                                Nacimiento*</label>
                            <input type="date"
                                   {...register('fechaNacimiento')}
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
                                   {...register('estado civil')}
                                   id="civilStatus"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Ingrese estado civil"/>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-5">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-3 py-1 text-sm rounded-lg mt-4 flex items-center justify-center">
                            <span className="material-icons mr-2">save</span>
                            Guardar
                        </button>
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
)
    ;
};