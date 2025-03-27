import { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';


const PersonalDetails: React.FC = () => {
    const [activeStep, setActiveStep] = useState('personalDetails');
    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        dateOfBirth: '',
        nationality: 'Nigeria',
        residentialAddress: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
            <div className="max-w-lg w-full p-8 text-white">
                {activeStep === 'personalDetails' && (
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Your Full Name As Appears On Document"
                                className="w-full bg-[#1D1B29] border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email Address</label>
                            <input
                                type="email"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleChange}
                                placeholder="Your Email Address"
                                className="w-full bg-[#1D1B29] border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Date of Birth</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                                <input
                                    type="text"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    placeholder="01-11-2025"
                                    className="w-full bg-[#1D1B29] border border-gray-700 rounded-md py-2 px-8 text-white placeholder-gray-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Nationality</label>
                            <div className="relative">
                                <select
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="w-full bg-[#1D1B29] border border-gray-700 rounded-md py-2 px-3 text-white appearance-none"
                                >
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="SouthAfrica">South Africa</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Residential Address</label>
                            <input
                                type="text"
                                name="residentialAddress"
                                value={formData.residentialAddress}
                                onChange={handleChange}
                                placeholder="Home Address"
                                className="w-full bg-[#1D1B29] border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500"
                            />
                        </div>
                    </form>
                )}
            </div>
    );
};

export default PersonalDetails;