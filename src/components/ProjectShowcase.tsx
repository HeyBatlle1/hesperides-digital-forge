import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Brain, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neural Code Assistant',
    description: 'AI-powered code completion and refactoring tool using transformer models',
    tech: ['Python', 'PyTorch', 'FastAPI', 'React'],
    category: 'AI/ML',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/bradleeburton/neural-code-assistant',
    demo: 'https://neural-assistant.demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Quantum Data Visualizer',
    description: 'Real-time quantum computing simulation with 3D visualization',
    tech: ['TypeScript', 'Three.js', 'WebGL', 'Rust'],
    category: 'Simulation',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/bradleeburton/quantum-viz',
    demo: 'https://quantum-viz.demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'Distributed ML Pipeline',
    description: 'Scalable machine learning pipeline for processing terabytes of data',
    tech: ['Go', 'Kubernetes', 'TensorFlow', 'PostgreSQL'],
    category: 'Infrastructure',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/bradleeburton/ml-pipeline',
    demo: null,
    featured: false
  },
  {
    id: 4,
    title: 'Smart Contract Auditor',
    description: 'Automated vulnerability detection for smart contracts using NLP',
    tech: ['Solidity', 'Python', 'NLP', 'Blockchain'],
    category: 'Security',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    github: 'https://github.com/bradleeburton/contract-auditor',
    demo: 'https://contract-auditor.demo.com',
    featured: false
  }
];

const categories = ['All', 'AI/ML', 'Simulation', 'Infrastructure', 'Security'];

export const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient-accent">PROJECT</span>
            <span className="text-foreground"> MATRIX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions crafted with precision and powered by cutting-edge technology.
            Each project represents a unique challenge solved through intelligent design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-cyber'
                  : 'glass text-muted-foreground hover:text-primary hover:border-primary/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative group cursor-pointer ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d' 
                }}
              >
                <div className={`glass rounded-2xl overflow-hidden border transition-all duration-500 ${
                  hoveredProject === project.id 
                    ? 'border-primary/50 shadow-cyber' 
                    : 'border-border/20'
                }`}>
                  {/* Project Header */}
                  <div className={`relative p-6 bg-gradient-to-r ${project.color} text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <project.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-white/80 text-sm">{project.category}</p>
                        </div>
                      </div>
                      
                      {project.featured && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 border-2 border-white/50 rounded-full border-t-white"
                        />
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-mono">Code</span>
                      </motion.a>
                      
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-mono">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 pointer-events-none"
                  />
                </div>

                {/* Floating Elements */}
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full glow-terminal"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};