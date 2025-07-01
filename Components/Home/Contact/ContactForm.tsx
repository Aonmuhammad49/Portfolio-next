// Components/Home/Contact/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  const [result, setResult] = React.useState<string>('');
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const accessKey = 'b8475d6c-c46a-4ea0-b6c8-373afc5ea186';

    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('✅ Form Submitted Successfully!');
        event.currentTarget.reset();
      } else {
        console.error('Submission Error:', data);
        setResult(`❌ ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setResult('❌ Network error. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#140c1c] rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto shadow-lg h-full">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Let&apos;s Work Together!
      </h1>
      <p className="text-gray-400 mt-3 text-center text-sm md:text-base">
        Have a project or idea you&apos;d like to discuss? Fill out the form, and we&apos;ll get back to you.
      </p>

      <form onSubmit={onSubmit} className="mt-10 space-y-6">
        {/* Name and Last Name Input */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            className="flex-1 bg-[#1e1b24] text-white placeholder:text-gray-500 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:shadow-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="flex-1 bg-[#1e1b24] text-white placeholder:text-gray-500 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:shadow-lg"
            required
          />
        </div>

        {/* Email and Phone Input */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="flex-1 bg-[#1e1b24] text-white placeholder:text-gray-500 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:shadow-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="flex-1 bg-[#1e1b24] text-white placeholder:text-gray-500 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:shadow-lg"
          />
        </div>

        {/* Select Service */}
        <select
          name="service"
          id="service"
          defaultValue=""
          className="w-full bg-[#1e1b24] text-white px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:shadow-lg"
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="fullstack">Fullstack Development</option>
        </select>

        {/* Message */}
        <textarea
          rows={6}
          name="message"
          placeholder="Your Message"
          className="w-full bg-[#1e1b24] text-white placeholder:text-gray-500 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:shadow-lg"
          required
        ></textarea>

        {/* Submit Button and Result Message */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#7947df] to-[#5c2fb7] hover:from-[#5c2fb7] hover:to-[#7947df] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {result && (
            <p
              className={`mt-4 font-medium ${
                result.startsWith('✅') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {result}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
