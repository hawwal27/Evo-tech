import { motion } from 'framer-motion';

const AboutAutomation = () => {
  return (
    <section id="about-automation" className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 drop-shadow">
          Empowering the Future with Automation
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10">
          At EvoTech Solutions, we craft intelligent automation systems that elevate industries and ignite innovation.
          Our mission is to merge human ingenuity with cutting-edge technology, building seamless workflows that
          accelerate growth and unlock untapped potential.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {/* Feature 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Seamless Integration</h3>
          <p className="text-gray-600">
            We build solutions that plug into your systems like magic — reducing friction, not adding it.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-indigo-500">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Human-Centric Design</h3>
          <p className="text-gray-600">
            Automation isn't about replacing people — it's about empowering them to focus on creativity and impact.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Scalable Intelligence</h3>
          <p className="text-gray-600">
            From startups to enterprises, our systems grow with your ambition — smart, adaptive, and future-proof.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-xl text-gray-800">
          Discover how automation can transform your workflow — <br />
          <span className="text-blue-700 font-semibold">less effort, more impact.</span>
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition">
          Start Your Journey
        </button>
      </motion.div>
    </section>
  );
};

export default AboutAutomation;
