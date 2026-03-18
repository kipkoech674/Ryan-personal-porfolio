import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      problem: 'Local businesses needed an affordable way to sell online without complex setup.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management System',
      description: 'A collaborative project management tool with real-time updates, team analytics, and automated workflow features.',
      problem: 'Teams struggled to coordinate tasks and track progress across distributed members.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'WebSockets', 'Shadcn UI'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI-Powered Study Assistant',
      description: 'An intelligent learning platform that uses AI to generate personalized study materials and quizzes based on uploaded content.',
      problem: 'Students needed personalized study resources tailored to their learning pace and style.',
      tech: ['React', 'Python', 'OpenAI API', 'FastAPI', 'MongoDB'],
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A modern chat app with end-to-end encryption, file sharing, video calls, and group messaging capabilities.',
      problem: 'Existing solutions lacked privacy and were bloated with unnecessary features.',
      tech: ['React', 'Socket.io', 'Node.js', 'Redis', 'WebRTC'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics platform with historical data visualization, forecasting, and location-based alerts.',
      problem: 'Users needed accessible weather insights beyond basic forecasts for planning and decision-making.',
      tech: ['React', 'D3.js', 'Express', 'Weather API', 'Chart.js'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking with AI-powered categorization, budget insights, and financial goal tracking.',
      problem: 'People struggled to maintain consistent expense tracking and understand spending patterns.',
      tech: ['Next.js', 'Supabase', 'TensorFlow.js', 'Recharts', 'TypeScript'],
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing solutions that blend creativity, technical excellence, and real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    Problem Solved:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    {project.problem}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
