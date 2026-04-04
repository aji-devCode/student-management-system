import React, { useState } from "react";
import InputContainer from "../components/InputBox";

const Register = () => {
const [currentStep, setCurrentStep] = useState(1);
const [formData, setFormData] = useState({
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

const [errors, setErrors] = useState({});

const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                });

                if (errors[e.target.name]) {
                        setErrors({
                                ...errors,
                                [e.target.name]: "",
                        });
                }
        };

const handleSubmit = (e) => {
                e.preventDefault();
                console.log("Form Submitted", formData);

        };

        const validateStep = () => {
        const newErrors = {};

        if (currentStep === 1) {
                if (!formData.email) newErrors.email = "Email is required";
                        else if (!/\S+@\S+\.\S+/.test(formData.email))
                        newErrors.email = "Email is invalid";

                if (!formData.password) newErrors.password = "Password is required";
                        else if (formData.password.length < 6)
                        newErrors.password = "Password must be at least 6 characters";

                if (!formData.confirmPassword)
                        newErrors.confirmPassword = "Please confirm your password";
                else if (formData.password !== formData.confirmPassword)
                        newErrors.confirmPassword = "Passwords do not match";
                } else if (currentStep === 2) {
                        if (!formData.firstName) newErrors.firstName = "First name is required";
                        if (!formData.lastName) newErrors.lastName = "Last name is required";
                        if (!formData.dateOfBirth)
                                newErrors.dateOfBirth = "Date of birth is required";
                        if (!formData.sex) newErrors.sex = "Please select your sex";
                        if (!formData.nationality)
                                newErrors.nationality = "Nationality is required";
                        if (!formData.phoneNumber)
                                newErrors.phoneNumber = "Phone number is required";
                } else if (currentStep === 3) {
                        if (!formData.studentID) newErrors.studentID = "Student ID is required";
                        if (!formData.enrollmentYear)
                                newErrors.enrollmentYear = "Enrollment year is required";
                        if (!formData.programDegree)
                                newErrors.programDegree = "Program/Degree is required";
                        if (!formData.department) newErrors.department = "Department is required";
                } else if (currentStep === 4) {
                        if (!formData.streetAddress)
                                newErrors.streetAddress = "Street address is required";
                        if (!formData.city) newErrors.city = "City is required";
                        if (!formData.stateProvince)
                                newErrors.stateProvince = "State/Province is required";
                        if (!formData.postalCode)
                                newErrors.postalCode = "Postal code is required";
                        if (!formData.country) newErrors.country = "Country is required";
                } else if (currentStep === 5) {
                        if (!formData.emergencyContactName)
                                newErrors.emergencyContactName = "Emergency contact name is required";
                        if (!formData.emergencyContactRelationship)
                                newErrors.emergencyContactRelationship = "Relationship is required";
                        if (!formData.emergencyContactPhone)
                                newErrors.emergencyContactPhone = "Emergency phone number is required";
                }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        };

        const nextStep = (e) => {
                e.preventDefault(); 

                if (validateStep()) {
                        if (currentStep < 5) {
                                setCurrentStep(currentStep + 1);
                        }
                }
        };

        const prevStep = (e) => {
                e.preventDefault();
                if (currentStep > 1) {
                        setCurrentStep(currentStep - 1);
                }
        };

        return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
                {/* Progress Indicator */}
                <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                                <div className="flex justify-between items-center relative">
                                        {/* Progress bar background */}
                                        <div className="absolute left-0 right-0 top-5 h-1 bg-gray-200 rounded-full z-0">
                                                <div
                                                        className="absolute left-0 top-0 h-1 bg-blue-600 rounded-full transition-all duration-300"
                                                        style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                                                />
                                        </div>

                                        {[1, 2, 3, 4, 5].map((step) => (
                                        <div
                                                key={step}
                                                className="flex flex-col items-center relative z-10"
                                        >
                                                <div
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300
                                                                        ${currentStep >= step ? "bg-blue-600 text-white shadow-lg" : "bg-gray-300 text-gray-600"}`}
                                                >
                                                        {step}
                                                </div>
                                                <div
                                                        className={`text-xs mt-2 text-center ${currentStep >= step ? "text-blue-600 font-medium" : "text-gray-500"}`}
                                                >
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

                        {/* Registration Form */}
                        <form onSubmit={handleSubmit}>
                                {/* Step 1: Account Registration */}
                                {currentStep === 1 && (
                                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                                        <div className="border-b-2 border-gray-200 mb-6">
                                                <p className="flex justify-center py-2 uppercase font-bold text-2xl text-gray-800">
                                                Create Account
                                                </p>
                                                <p className="text-center text-gray-600 pb-4">
                                                Enter your login credentials
                                                </p>
                                        </div>
                                        <div className="space-y-4">
                                                <InputContainer
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="student@example.com"
                                                        required
                                                        label="Email address"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        error={errors.email}
                                                />

                                                <InputContainer
                                                        type="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        placeholder="Enter password"
                                                        required
                                                        label="Password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        error={errors.password}
                                                />

                                                <InputContainer
                                                        type="password"
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                        placeholder="Confirm password"
                                                        required
                                                        label="Confirm Password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        error={errors.confirmPassword}
                                                />
                                        </div>
                                </div>
                                )}

                                {/* Step 2: Profile Information */}
                                {currentStep === 2 && (
                                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                                        <div className="border-b-2 border-gray-200 mb-6">
                                                <p className="flex justify-center py-2 uppercase font-bold text-2xl text-gray-800">
                                                Profile Information
                                                </p>
                                                <p className="text-center text-gray-600 pb-4">
                                                Tell us about yourself
                                                </p>
                                        </div>
                                        <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputContainer
                                                                type="text"
                                                                name="firstName"
                                                                value={formData.firstName}
                                                                onChange={handleChange}
                                                                placeholder="John"
                                                                required={true}
                                                                label="First Name"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.firstName}
                                                        />

                                                        <InputContainer
                                                                type="text"
                                                                name="lastName"
                                                                value={formData.lastName}
                                                                onChange={handleChange}
                                                                placeholder="Doe"
                                                                required={true}
                                                                label="Last Name"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.lastName}
                                                        />
                                                </div>

                                                        <InputContainer
                                                                type="date"
                                                                name="dateOfBirth"
                                                                value={formData.dateOfBirth}
                                                                onChange={handleChange}
                                                                placeholder="Date of Birth"
                                                                required={true}
                                                                label="Date of Birth"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.dateOfBirth}
                                                        />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Sex
                                                                </label>
                                                                <select
                                                                        name="sex"
                                                                        value={formData.sex}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                                                                errors.sex ? "border-red-500" : "border-gray-300"
                                                                        }`}
                                                                >
                                                                        <option value="">Select</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                        <option value="other">Other</option>
                                                                </select>
                                                                {errors.sex && (
                                                                        <p className="text-red-500 text-xs mt-1">{errors.sex}</p>
                                                                )}
                                                        </div>
                                                        <InputContainer
                                                                type="text"
                                                                name="nationality"
                                                                value={formData.nationality}
                                                                onChange={handleChange}
                                                                placeholder="Filipino"
                                                                required={true}
                                                                label="Nationality"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.nationality}
                                                        />
                                                </div>

                                                <InputContainer
                                                        type="tel"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber}
                                                        onChange={handleChange}
                                                        placeholder="+639 123 4567"
                                                        required={true}
                                                        label="Phone Number"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        error={errors.phoneNumber}
                                                />
                                        </div>
                                </div>
                                )}

                                {/* Step 3: Academic Information */}
                                {currentStep === 3 && (
                                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                                        <div className="border-b-2 border-gray-200 mb-6">
                                                <p className="flex justify-center py-2 uppercase font-bold text-2xl text-gray-800">
                                                Academic Information
                                                </p>
                                                <p className="text-center text-gray-600 pb-4">
                                                Your educational details
                                                </p>
                                        </div>
                                        <div className="space-y-4">
                                                <InputContainer
                                                        type="text"
                                                        name="studentID"
                                                        value={formData.studentID}
                                                        onChange={handleChange}
                                                        placeholder="STU123456"
                                                        required={true}
                                                        label="Student ID"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        error={errors.studentID}
                                                />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputContainer
                                                                type="text"
                                                                name="enrollmentYear"
                                                                value={formData.enrollmentYear}
                                                                onChange={handleChange}
                                                                placeholder="2024"
                                                                required={true}
                                                                label="Enrollment Year"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.enrollmentYear}
                                                        />
                                                        <InputContainer
                                                                type="text"
                                                                name="programDegree"
                                                                value={formData.programDegree}
                                                                onChange={handleChange}
                                                                placeholder="Bachelor of Science in Computer Science"
                                                                required={true}
                                                                label="Program/Degree"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.programDegree}
                                                        />
                                                </div>
                                                <InputContainer
                                                        type="text"
                                                        name="department"
                                                        value={formData.department}
                                                        onChange={handleChange}
                                                        placeholder="Computer Science"
                                                        required={true}
                                                        label="Department"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        error={errors.department}
                                                />
                                        </div>
                                </div>
                                )}

                                {/* Step 4: Address Information */}
                                {currentStep === 4 && (
                                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                                        <div className="border-b-2 border-gray-200 mb-6">
                                                <p className="flex justify-center py-2 uppercase font-bold text-2xl text-gray-800">
                                                Address Information
                                                </p>
                                                <p className="text-center text-gray-600 pb-4">
                                                Where do you currently live?
                                                </p>
                                        </div>
                                        <div className="space-y-4">
                                                <InputContainer
                                                        type="text"
                                                        name="streetAddress"
                                                        value={formData.streetAddress}
                                                        onChange={handleChange}
                                                        placeholder="123 Main Street"
                                                        required={true}
                                                        label="Street Address"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        error={errors.streetAddress}
                                                />
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputContainer
                                                                type="text"
                                                                name="city"
                                                                value={formData.city}
                                                                onChange={handleChange}
                                                                placeholder="New York"
                                                                required={true}
                                                                label="City"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.city}
                                                        />
                                                        <InputContainer
                                                                type="text"
                                                                name="stateProvince"
                                                                value={formData.stateProvince}
                                                                onChange={handleChange}
                                                                placeholder="NY"
                                                                required={true}
                                                                label="State/Province"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.stateProvince}
                                                        />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputContainer
                                                                type="text"
                                                                name="postalCode"
                                                                value={formData.postalCode}
                                                                onChange={handleChange}
                                                                placeholder="10001"
                                                                required={true}
                                                                label="Postal Code"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.postalCode}
                                                        />
                                                        <InputContainer
                                                                type="text"
                                                                name="country"
                                                                value={formData.country}
                                                                onChange={handleChange}
                                                                placeholder="United States"
                                                                required={true}
                                                                label="Country"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.country}
                                                        />
                                                </div>
                                        </div>
                                </div>
                                )}

                                {/* Step 5: Emergency Contact */}
                                {currentStep === 5 && (
                                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                                        <div className="border-b-2 border-gray-200 mb-6">
                                                <p className="flex justify-center py-2 uppercase font-bold text-2xl text-gray-800">
                                                Emergency Contact
                                                </p>
                                                <p className="text-center text-gray-600 pb-4">
                                                Who should we contact in case of emergency?
                                                </p>
                                        </div>
                                        <div className="space-y-4">
                                                <InputContainer
                                                        type="text"
                                                        name="emergencyContactName"
                                                        value={formData.emergencyContactName}
                                                        onChange={handleChange}
                                                        placeholder="Jane Doe"
                                                        required={true}
                                                        label="Emergency Contact Name"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        error={errors.emergencyContactName}
                                                />
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputContainer
                                                                type="text"
                                                                name="emergencyContactRelationship"
                                                                value={formData.emergencyContactRelationship}
                                                                onChange={handleChange}
                                                                placeholder="Parent"
                                                                required={true}
                                                                label="Relationship"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.emergencyContactRelationship}
                                                        />

                                                        <InputContainer
                                                                type="tel"
                                                                name="emergencyContactPhone"
                                                                value={formData.emergencyContactPhone}
                                                                onChange={handleChange}
                                                                placeholder="+639 123 4567"
                                                                required={true}
                                                                label="Emergency Phone Number"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                error={errors.emergencyContactPhone}
                                                        />
                                                </div>
                                        </div>
                                </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="max-w-4xl mx-auto mt-6 flex justify-between">
                                        {currentStep > 1 && (
                                                <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
                                                >
                                                        Previous
                                                </button>
                                        )}

                                {currentStep < 5 ? (
                                        <button
                                                type="button"
                                                onClick={nextStep}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ml-auto"
                                        >
                                                Next
                                        </button>
                                ) : (
                                <button
                                        type="submit"
                                        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 ml-auto"
                                >
                                        Submit Registration
                                </button>
                                )}
                                </div>
                        </form>
                </div>
        </div>
        );
        };

        export default Register;
