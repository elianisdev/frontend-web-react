import React from 'react';


export const FormInformation = () => {
    return (
        <div>
            <h2 className="w-full text-3xl text-white my-4 float-right rounded-lg bg-gradient-to-r from-green-500 via-blue-800 to-blue-300 border-r-4 py-1.5 px-2">Información</h2>
            <div className='flexcontain-layout px-4 mx-auto xl:container'>
                <form className="flex flex-wrap gap-4 p-4">
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Primer Nombre*</label>
                        <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese primer nombre"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="secondName" className="block mb-2 text-sm font-medium text-gray-900">Segundo Nombre*</label>
                        <input type="text" id="secondName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese segundo nombre"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Primer Apellido*</label>
                        <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese primer apellido"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="secondLastName" className="block mb-2 text-sm font-medium text-gray-900">Segundo Apellido*</label>
                        <input type="text" id="secondLastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese segundo apellido"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="birthDate" className="block mb-2 text-sm font-medium text-gray-900">Fecha de Nacimiento*</label>
                        <input type="date" id="birthDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">País de Nacimiento*</label>
                        <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese país de nacimiento"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Género*</label>
                        <input type="text" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese género"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="civilStatus" className="block mb-2 text-sm font-medium text-gray-900">Estado Civil*</label>
                        <input type="text" id="civilStatus" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingrese estado civil"/>
                    </div>
                </form>
            </div>
        </div>
    );
};