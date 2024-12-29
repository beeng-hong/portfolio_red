'use client';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-500/10"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
          기술 스택
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-500">
              <p className="font-semibold text-center text-pink-400">React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;