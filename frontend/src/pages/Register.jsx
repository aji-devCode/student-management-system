import React, { useState } from 'react'
import InputContainer from '../components/InputBox';

const Register = () => {
        const [ currentStep, setCurrentStep ] = useState( 1 );
        const [ formData, setFormData ] = useState({
                email: "",
                password: "",
                confirmPassword: "",

                firstName: "",
                lastName: "",
                dateOfBirth: "",
                sex: "",
                nationality: "",
                phoneNumber: "",

                studentID: "",
                enrollmentYear: "",
                programDegree: "",
                department: "",

                streetAddress: "",
                city: "",
                stateProvince: "",
                postalCode: "",
                country: "",

                emergencyContactName: "",
                emergencyContactRelationship: "",
                emergencyContactPhone: "",
        });
        const handleChange = ( e ) => {
                setFormData({
                        ...formData,
                        [ e.target.name ]: e.target.value
                })
        };
        const handleSubmit = ( e ) => {
                e.preventDefault();
                console.log( "Form Submitted") ;
        };
        return (
                <div className='bg-gray-50 min-h-screen py-12 px-4'>
                        {/* Progress Indicator */}
                        <div className='max-w-4xl mx-auto'>
                                <div className='mb-8'>
                                        {/* Steps indicators */}
                                        <div className='flex justify-between items-center relative'>
                                        {/* Progress bar background */}
                                        <div className='absolute left-0 right-0 top-5 h-1 bg-gray-200 rounded-full z-0'>
                                                <div 
                                                className='absolute left-0 top-0 h-1 bg-blue-600 rounded-full transition-all duration-300'
                                                style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                                                />
                                </div>
        
                                {/* Step circles */}
                                {[1, 2, 3, 4, 5].map((step) => (
                                        <div key={step} className='flex flex-col items-center relative z-10'>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300
                                                        ${currentStep >= step ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-600'}`}>
                                                        {step}
                                                </div>
                                                <div className={`text-xs mt-2 text-center ${currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                                                        {step === 1 && "Register"}
                                                        {step === 2 && "Profile"}
                                                        {step === 3 && "Academic"}
                                                        {step === 4 && "Address"}
                                                        {step === 5 && "Emergency"}
                                                </div>
                                        </div>
                                ))}
                        </div>
                </div>
                        </div>
                        {/* Register */}
                        <form onsSubmit={ handleSubmit }>
                                {currentStep === 1 && (
                                        <div className='bg-white rounded-lg shadow-xl p-8 border border-gray-100 max-w-4xl justify-center mx-auto'>
                                                <div className='border-b-2 border-gray-200 mb-6'>
                                                        <p className='flex justify-center py-2  uppercase font-bold text-2xl text-gray-800'>Create Account</p>
                                                        <p className='text-center text-gray-600 pb-4'>Enter your login credentials</p>
                                                </div>
                                                <div className='space-y-4'>
                                                        <div>
                                                                <InputContainer 
                                                                        type='email' 
                                                                        name='email' 
                                                                        value={ formData.email } 
                                                                        onChange={ handleChange } 
                                                                        placeholder='student@example.com' 
                                                                        required={ true }
                                                                        label='Email address'
                                                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                                                        error=''
                                                                        />
                                                        </div>
                                                        <div>
                                                                <InputContainer 
                                                                        type='password' 
                                                                        name='password' 
                                                                        value={ formData.password } 
                                                                        onChange={ handleChange } 
                                                                        placeholder='Enter password' 
                                                                        required={ true }
                                                                        label='Password'
                                                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                                                        error=''
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                )}

                        </form>
                        {/* Profile Management */}
                        {/* Academic Information */}
                        {/* Address Information */}
                        {/* Emergency Contact Information */}
                </div>
        )
}

export default Register
