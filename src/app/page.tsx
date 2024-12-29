'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  // 물방울 효과를 위한 상태
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // 초기 물방울 생성
    const initialBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <main className="bg-black text-white relative overflow-hidden">
      <Header />
      <div>
        {/* 배경 물방울 효과 */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="bubble absolute"
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: ['0%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
            }}
          />
        ))}

        {/* Hero 섹션 */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div 
            style={{ opacity, scale }}
            className="text-center z-10 space-y-6 glass-effect p-12 rounded-3xl"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold tracking-tight"
            >
              개발자 이름
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-gray-400"
            >
              프론트엔드 개발자
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <a href="#projects" 
                 className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full 
                          font-medium hover:bg-white/20 transition-colors border border-white/20">
                프로젝트 보기
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* 컴포넌트들 */}
        <div className="max-w-7xl mx-auto px-4 space-y-32 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <Contact />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}