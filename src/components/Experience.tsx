import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Software Developer',
      organization: 'Self-Employed',
      period: '2023 - Present',
      description: 'Building custom web applications for clients across various industries, from e-commerce to education technology.',
      achievements: [
        'Delivered 10+ successful projects with 100% client satisfaction',
        'Reduced client operational costs by 40% through automation',
        'Implemented scalable solutions serving 1000+ users',
      ],
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      organization: 'Tech Startup Kenya',
      period: 'Jan 2023 - Jun 2023',
      description: 'Collaborated with a team to develop a fintech platform connecting small businesses with microloans.',
      achievements: [
        'Developed responsive UI components used by 500+ daily users',
        'Optimized database queries reducing load time by 60%',
        'Mentored 2 junior developers on React best practices',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Kirinyaga University',
      period: '2021 - Present',
      description: 'Pursuing a comprehensive education in computer science with focus on software engineering and data structures.',
      achievements: [
        'Maintained a strong GPA while building real-world projects',
        'Led university tech club organizing 5+ hackathons',
        'Published research on AI applications in agriculture',
      ],
    },
    {
      type: 'work',
      title: 'Open Source Contributor',
      organization: 'Various Projects',
      period: '2022 - Present',
      description: 'Contributing to open-source projects and building tools used by the developer community.',
      achievements: [
        'Made 100+ contributions to React ecosystem projects',
        'Created npm packages with 1K+ downloads',
        'Actively engaged in code reviews and mentoring',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of continuous growth, learning, and creating impact
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        {exp.type === 'education' ? (
                          <GraduationCap className="w-6 h-6 text-white" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg z-10 flex-shrink-0">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div className="flex-1 w-full md:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
