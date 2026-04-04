import React from "react";
import InputBox from "../components/InputBox";

const Homepage = () => {
        return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-lg p-8">
                        {/* Card */}
                        <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                                <div className="text-center mb-6">
                                        <p className="text-2xl font-bold text-gray-800 uppercase">
                                        Student Management System
                                        </p>
                                </div>
                                <div className="space-y-4">
                                        <div>
                                                <InputBox
                                                        type="email"
                                                        placeholder="Enter email address"
                                                        required={true}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        label="Email address"
                                                />
                                        </div>
                                        <div>
                                                <InputBox
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        required={true}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        label="Password"
                                                />
                                        </div>
                                </div>
                                <div className="mt-4">
                                        <button className="bg-blue-500 w-full py-2 cursor-pointer hover:bg-blue-400 transition-colors duration-300">
                                                <p className="text-white font-bold text-lg">Login</p>
                                        </button>
                                        <div>
                                                <p className="text-sm text-gray-600 mt-4 text-center">
                                                Don't have an account?{" "}
                                                        <a href="/register" className="text-blue-500 hover:underline">
                                                        Register here
                                                        </a>
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        );
};

export default Homepage;
