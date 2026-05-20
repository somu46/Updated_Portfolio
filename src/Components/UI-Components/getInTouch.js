import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';

const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      () => {
        toast.success('Message sent successfully!');
        form.current.reset();
      },
      () => {
        toast.error('Failed to send. Please try again.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          name="your_name"
          placeholder="John Doe"
          required
          className="input-field"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          name="your_email"
          placeholder="john@example.com"
          required
          className="input-field"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
          className="input-field resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
          bg-gray-900 dark:bg-white text-white dark:text-gray-900
          hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200"
      >
        <Send size={15} />
        Send Message
      </button>
    </form>
  );
};

export default GetInTouch;
