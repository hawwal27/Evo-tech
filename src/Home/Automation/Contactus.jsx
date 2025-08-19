import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-12">
          Whether you're curious about automation, want a demo, or just want to say hello — we're here to talk.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid gap-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-gray-600"
      >
        <p>
          Or email us directly at{' '}
          <a href="mailto:hello@evotech.com" className="text-blue-600 hover:underline">
            hello@evotech.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
