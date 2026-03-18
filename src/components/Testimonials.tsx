import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVenture Inc.',
      content: 'Ryan transformed our vision into reality with exceptional skill and professionalism. His ability to understand complex requirements and deliver elegant solutions is outstanding. The e-commerce platform he built has increased our sales by 150%.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'David Omondi',
      role: 'Product Manager, InnovateLabs',
      content: 'Working with Ryan was a game-changer for our startup. He not only delivered high-quality code but also provided valuable insights that improved our product strategy. His dedication and technical expertise are unmatched.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Emily Chen',
      role: 'CTO, EduTech Solutions',
      content: 'Ryan is one of the most talented developers I\'ve worked with. His clean code, attention to detail, and ability to tackle complex problems make him stand out. The learning platform he developed has positively impacted thousands of students.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'James Wangari',
      role: 'Founder, LocalBiz Kenya',
      content: 'Ryan built our business management system from scratch, and it\'s been running flawlessly for over a year. His problem-solving skills and commitment to excellence make him a developer you can truly rely on.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Engineering Lead, CloudSphere',
      content: 'Ryan\'s contributions to our open-source projects have been invaluable. His code is always well-documented, thoroughly tested, and follows best practices. He\'s a developer who truly cares about quality.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Michael Kimani',
      role: 'Startup Founder',
      content: 'I hired Ryan for a critical project with a tight deadline, and he exceeded all expectations. His communication, technical skills, and ability to deliver under pressure are exceptional. I highly recommend him!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from clients and collaborators I've had the privilege to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="w-10 h-10 text-blue-600/20 dark:text-blue-400/20 absolute top-4 right-4" />

              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
