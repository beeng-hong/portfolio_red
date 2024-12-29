'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">연락처</h2>
        <div className="max-w-xl mx-auto">
          <div className="text-center space-y-4">
            <p>Email: your.email@example.com</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;