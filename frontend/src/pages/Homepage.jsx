import React from "react";

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
                                                <p className="text-sm font-medium text-gray-700 mb-1">
                                                        Email address
                                                </p>
                                                <input
                                                        type="text"
                                                        placeholder="Enter email address"
                                                        required
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        />
                                        </div>
                                        <div>
                                                <p className="text-sm font-medium text-gray-700 mb-1">Password</p>
                                                <input
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                        </div>
                                </div>
                                <div>
                                        <button className="bg-blue-500 w-full py-2">
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
