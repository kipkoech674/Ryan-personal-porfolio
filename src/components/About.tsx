import { Code, Zap, Globe, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable, and efficient code is not just a skill—it\'s a craft I\'ve mastered.',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Rapidly adapting to new technologies and frameworks to stay ahead in the ever-evolving tech landscape.',
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Building solutions that transcend borders and solve real-world problems for users worldwide.',
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Committed to delivering exceptional results and exceeding expectations on every project.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Turning Ideas Into Reality
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Ryan Kipkoech, a software engineer currently pursuing my degree at Kirinyaga University in Kenya.
              My journey in tech began with a simple curiosity about how things work—and that curiosity has evolved
              into a passion for building innovative solutions that matter.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in full-stack development, with a keen eye for creating seamless user experiences and
              robust backend systems. Whether it's crafting pixel-perfect interfaces or architecting scalable APIs,
              I approach every challenge with creativity and precision.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Beyond code, I'm driven by impact. I believe technology should empower people, solve real problems,
              and create opportunities. That's why I'm constantly learning, building, and pushing myself to grow
              as both an engineer and a problem solver.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    3+
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
                    Years of Learning
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    & Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
