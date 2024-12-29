'use client';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto backdrop-blur-lg bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <p className="text-lg text-gray-300">
            여기에 자기소개를 작성하세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;