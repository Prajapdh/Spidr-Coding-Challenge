import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

const InterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    costGuess: '',
    spidrPin: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (e.target.name === 'spidrPin') {
      value = value.replace(/\D/g, '').slice(0, 16);
      if (value.length > 0) {
        value = value.match(/.{1,4}/g)?.join('-') || value;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-[#0D0D0D] text-white relative">
      {/* Decorative circle in the background */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-2 border-[#5EBFB6] opacity-10"></div>
      
      <h2 className="text-5xl font-light mb-3 tracking-wide">Interest Form</h2>
      <p className="text-[#5EBFB6] mb-12 text-base uppercase tracking-widest">Join the Revolution</p>
      
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group">
            <label htmlFor="firstName" className="block text-base uppercase tracking-wider text-[#888] mb-3 transition-colors group-focus-within:text-[#5EBFB6]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-[#333] text-white text-lg focus:outline-none focus:border-[#5EBFB6] transition-colors"
              required
            />
          </div>
          <div className="group">
            <label htmlFor="lastName" className="block text-base uppercase tracking-wider text-[#888] mb-3 transition-colors group-focus-within:text-[#5EBFB6]">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-[#333] text-white text-lg focus:outline-none focus:border-[#5EBFB6] transition-colors"
              required
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="phone" className="block text-base uppercase tracking-wider text-[#888] mb-3 transition-colors group-focus-within:text-[#5EBFB6]">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-0 py-3 bg-transparent border-b-2 border-[#333] text-white text-lg focus:outline-none focus:border-[#5EBFB6] transition-colors"
            required
          />
        </div>

        <div className="group">
          <label htmlFor="email" className="block text-base uppercase tracking-wider text-[#888] mb-3 transition-colors group-focus-within:text-[#5EBFB6]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-0 py-3 bg-transparent border-b-2 border-[#333] text-white text-lg focus:outline-none focus:border-[#5EBFB6] transition-colors"
            required
          />
        </div>

        <div className="group">
          <label htmlFor="costGuess" className="block text-base uppercase tracking-wider text-[#888] mb-3 transition-colors group-focus-within:text-[#5EBFB6]">
            Guess the Air Fryer's Cost
          </label>
          <div className="relative">
            {/* <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#888] text-lg">$</span> */}
            <input
              type="number"
              id="costGuess"
              name="costGuess"
              value={formData.costGuess}
              onChange={handleChange}
              placeholder="$"
              className="w-full pl-8 py-3 bg-transparent border-b-2 border-[#333] text-white text-lg focus:outline-none focus:border-[#5EBFB6] transition-colors"
              required
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="spidrPin" className="block text-base uppercase tracking-wider text-[#888] mb-3 transition-colors group-focus-within:text-[#5EBFB6]">
            Very Secret Spidr PIN
          </label>
          <input
            type="text"
            id="spidrPin"
            name="spidrPin"
            value={formData.spidrPin}
            onChange={handleChange}
            placeholder="####-####-####-####"
            className="w-full px-0 py-3 bg-transparent border-b-2 border-[#333] text-white text-lg font-mono focus:outline-none focus:border-[#5EBFB6] transition-colors"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-16 py-5 px-8 bg-[#5EBFB6] text-white uppercase tracking-wider text-base hover:bg-[#4DA69E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5EBFB6] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] relative overflow-hidden group"
        >
          <span className="relative z-10">Submit Interest</span>
          <div className="absolute inset-0 bg-[#4DA69E] transform translate-y-full transition-transform group-hover:translate-y-0"></div>
        </button>
      </form>
      
      {/* Decorative circle in the background */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border-2 border-[#5EBFB6] opacity-10"></div>
    </div>
  );
};

export default InterestForm; 