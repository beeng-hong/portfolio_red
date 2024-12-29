'use client';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">
          프로젝트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-green-500 transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold mb-2 text-green-400">프로젝트 제목</h3>
              <p className="text-gray-400">프로젝트 설명</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">React</span>
              <span className="px-3 py-1 text-sm bg-teal-500/10 text-teal-400 rounded-full">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;