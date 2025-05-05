import React from 'react';

export default function LandingPage({ setPage }) {
    return (
        <div className="w-full max-w-7xl">
            <section className="py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                            Simplify Gyanam School Management. Empower Educators.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our comprehensive platform streamlines administrative tasks, enhances communication, and provides powerful analytics to help your school operate at peak efficiency.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() => setPage('register')}
                                className="bg-blue-900 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-800 transition font-medium"
                            >
                                Get Started
                            </button>
                            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className="bg-blue-500 rounded-lg shadow-xl aspect-video flex items-center justify-center text-white">
                        <img src="https://images.unsplash.com/photo-1709290749293-c6152a187b14?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dashboard preview" className="rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Key Features</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to manage your educational institution with ease and efficiency.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <i className="fas fa-user-tie text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Staff Management</h3>
                        <p className="text-gray-600">Efficiently manage teacher profiles, schedules, and performance tracking.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <i className="fas fa-user-graduate text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Student Portal</h3>
                        <p className="text-gray-600">Complete student management from enrollment to progress tracking and beyond.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <i className="fas fa-file-invoice-dollar text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Fee Management</h3>
                        <p className="text-gray-600">Streamline fee collection, generate invoices, and track payments efficiently.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <i className="fas fa-chart-line text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Reports & Analytics</h3>
                        <p className="text-gray-600">Generate comprehensive reports and gain insights through intuitive analytics.</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">How It Works</h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Create Your Account</h3>
                                    <p className="text-gray-600">Sign up with your school details and create administrative accounts.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Set Up Your School</h3>
                                    <p className="text-gray-600">Configure classes, departments, fee structures, and academic years.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Add Users</h3>
                                    <p className="text-gray-600">Import or add students, teachers, and staff members to the system.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Start Managing</h3>
                                    <p className="text-gray-600">Begin using the platform for daily operations and administration.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2 bg-white rounded-lg shadow-xl">
                        <img src="https://images.unsplash.com/photo-1698993082050-19ca94c62fb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Platform setup illustration" className="rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-blue-900 text-white rounded-lg my-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to transform your Gyanam school management?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">Join thousands of educational institutions already benefiting from our platform.</p>
                </div>
                <div className="flex justify-center gap-6">
                    <button 
                        onClick={() => setPage('register')}
                        className="bg-white text-blue-900 px-8 py-3 rounded-lg shadow-md hover:bg-blue-50 transition font-medium"
                    >
                        Start Free Trial
                    </button>
                    <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-medium">
                        Schedule Demo
                    </button>
                </div>
            </section>

            <section className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Users Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Trusted by educational institutions worldwide.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-bold">Muhammad Aamir</h4>
                                <p className="text-sm text-gray-500">Principal, Gyanam School</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"This platform has transformed how we manage our school. The administrative burden has been significantly reduced, allowing us to focus more on education."</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-bold">Muhammad Ibrahim</h4>
                                <p className="text-sm text-gray-500">IT Director, Gyanam Education Group</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"The fee management system is incredibly efficient. We've reduced payment processing time by 75% and improved our financial tracking capabilities."</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-bold">Muhammad Khizer</h4>
                                <p className="text-sm text-gray-500">Admin, Gyanam Academy</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"The customer support is exceptional. Any questions we have are answered promptly, and the regular updates continue to improve the platform."</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-bold">Muhammad Sufiyan</h4>
                                <p className="text-sm text-gray-500">Staff, Gyanam Education Group</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"The customer support is exceptional. Any questions we have are answered promptly, and the regular updates continue to improve the platform."</p>
                    </div>
                </div>
            </section>
        </div>
    );
}