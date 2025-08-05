import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Star, GitFork, Calendar, FileText, Code2 } from 'lucide-react';

const repositories = [
  {
    id: 1,
    name: 'Safety-Companion.com',
    description: 'A comprehensive safety platform providing real-time safety information and resources',
    language: 'TypeScript',
    stars: 28,
    forks: 4,
    lastUpdate: '3 weeks ago',
    readme: `# Safety Companion

A comprehensive safety platform providing real-time safety information and resources to help individuals and organizations make informed decisions about their safety and security.

## Features
- 🚨 Real-time safety alerts and notifications
- 📍 Location-based safety information
- 🔒 Personal safety resources and tips
- 📊 Safety analytics and reporting
- 🌐 Community-driven safety network

## Live Website
Visit [safety-companion.com](https://safety-companion.com) to explore the platform.

## Technology Stack
- React/TypeScript frontend
- Node.js backend
- Real-time data processing
- Geolocation services
- Responsive design

## Mission
Empowering communities with accessible safety information and tools to make informed decisions about their personal and collective security.`,
    private: false,
    topics: ['safety', 'web-app', 'typescript', 'react', 'security']
  },
  {
    id: 2,
    name: 'TrailMedic.Org',
    description: 'Medical resource platform for outdoor enthusiasts and first responders',
    language: 'TypeScript',
    stars: 15,
    forks: 2,
    lastUpdate: '2 weeks ago',
    readme: `# TrailMedic.org

A comprehensive medical resource platform designed specifically for outdoor enthusiasts, wilderness first responders, and medical professionals working in remote environments.

## Features
- 🏥 Medical protocols and procedures
- 🎒 Emergency medical kit recommendations
- 📚 Educational resources and training materials
- 📍 Location-specific medical considerations
- 🚑 Emergency response guidelines

## Live Website
Visit [trailmedic.org](https://trailmedic.org) to access medical resources.

## Target Audience
- Wilderness first responders
- Outdoor enthusiasts and hikers
- Medical professionals in remote settings
- Search and rescue teams
- Adventure tour guides

## Technology Stack
- Modern web technologies
- Mobile-responsive design
- Offline capability for remote areas
- Medical content management system

## Mission
Providing accessible, reliable medical information and resources to enhance safety and response capabilities in outdoor and remote environments.`,
    private: false,
    topics: ['medical', 'wilderness', 'first-aid', 'outdoor', 'emergency-response']
  },
  {
    id: 3,
    name: 'medical-mcp-server',
    description: 'Medical Model Context Protocol server for healthcare AI applications',
    language: 'Python',
    stars: 7,
    forks: 1,
    lastUpdate: '1 week ago',
    readme: `# Medical MCP Server

A specialized Model Context Protocol (MCP) server designed for medical and healthcare AI applications, providing structured access to medical data and resources.

## Features
- 🏥 Medical data protocols and standards
- 🤖 AI model integration for healthcare
- 📊 Structured medical information access
- 🔒 HIPAA-compliant data handling
- 🔌 Extensible plugin architecture

## Installation
\`\`\`bash
pip install medical-mcp-server
\`\`\`

## Usage
\`\`\`python
from medical_mcp_server import MedicalMCPServer

server = MedicalMCPServer()
server.start()
\`\`\`

## Supported Protocols
- HL7 FHIR
- DICOM integration
- Medical terminology standards
- Clinical decision support

## Security & Compliance
- HIPAA compliance features
- Data encryption and security
- Audit logging
- Access control mechanisms

## Use Cases
- Healthcare AI applications
- Medical research platforms
- Clinical decision support systems
- Medical data integration`,
    private: false,
    topics: ['medical', 'mcp', 'healthcare-ai', 'python', 'api-server']
  },
  {
    id: 4,
    name: 'DocAmy',
    description: 'AI-powered medical documentation and analysis platform',
    language: 'Python',
    stars: 12,
    forks: 3,
    lastUpdate: '4 days ago',
    readme: `# DocAmy

An AI-powered medical documentation and analysis platform designed to streamline healthcare workflows and improve patient care through intelligent document processing.

## Features
- 📄 Automated medical document processing
- 🤖 AI-powered clinical analysis
- 📊 Medical data extraction and structuring
- 🔍 Intelligent search and retrieval
- 📈 Clinical insights and analytics

## Core Capabilities
- Natural language processing for medical texts
- Clinical note analysis and summarization
- Medical coding assistance
- Patient data organization
- Compliance and audit trails

## Technology Stack
- Python backend with ML/AI frameworks
- Natural language processing engines
- Medical terminology databases
- Secure data processing pipeline
- API-first architecture

## Benefits
- Reduced documentation time for healthcare providers
- Improved accuracy in medical record keeping
- Enhanced clinical decision making
- Streamlined workflow automation
- Better patient care coordination

## Security & Privacy
- HIPAA-compliant processing
- End-to-end encryption
- Secure API access
- Audit logging and monitoring`,
    private: false,
    topics: ['ai', 'medical-documentation', 'nlp', 'healthcare', 'python']
  }
];

const languageColors = {
  Python: '#3776ab',
  'Q#': '#512bd4',
  Solidity: '#363636',
  TypeScript: '#3178c6',
  Rust: '#000000',
  Go: '#00add8'
};

export const GitRepositories = () => {
  const [selectedRepo, setSelectedRepo] = useState<number | null>(null);

  return (
    <section id="repos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-cyber font-bold mb-6">
            <span className="text-gradient-primary">CODE</span>
            <span className="text-foreground"> REPOSITORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source contributions and innovative projects that push the boundaries 
            of technology. Each repository tells a story of problem-solving and innovation.
          </p>
        </motion.div>

        {/* Repository Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Repository List */}
          <div className="space-y-6">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                onClick={() => setSelectedRepo(repo.id)}
                className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${
                  selectedRepo === repo.id 
                    ? 'border-primary/50 shadow-cyber' 
                    : 'border-border/20 hover:border-primary/30'
                }`}
              >
                {/* Repository Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <GitBranch className="w-5 h-5 text-muted-foreground" />
                    <h3 className="font-mono font-semibold text-lg text-foreground">
                      {repo.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {repo.description}
                </p>

                {/* Repository Meta */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language as keyof typeof languageColors] }}
                      />
                      <span className="text-muted-foreground">{repo.language}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Updated {repo.lastUpdate}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Selection Indicator */}
                {selectedRepo === repo.id && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="h-1 bg-gradient-primary rounded-full mt-4"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* README Viewer */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <AnimatePresence mode="wait">
              {selectedRepo ? (
                <motion.div
                  key={selectedRepo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl overflow-hidden border border-primary/20"
                >
                  {/* README Header */}
                  <div className="bg-secondary/30 px-6 py-4 border-b border-border/20">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="font-mono font-semibold">README.md</h3>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Code2 className="w-3 h-3" />
                        <span>Live Preview</span>
                      </div>
                    </div>
                  </div>

                  {/* README Content */}
                  <div className="p-6 max-h-[600px] overflow-y-auto">
                    <div className="prose prose-invert prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-mono">
                        {repositories.find(r => r.id === selectedRepo)?.readme}
                      </pre>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="bg-secondary/20 px-6 py-4 border-t border-border/20">
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span className="text-sm font-mono">View on GitHub</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 glass border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-mono">Star</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass rounded-2xl p-8 text-center border border-border/20"
                >
                  <GitBranch className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a Repository</h3>
                  <p className="text-muted-foreground">
                    Click on any repository to view its README and explore the code
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};