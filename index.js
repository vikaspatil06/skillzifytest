import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Network, 
  BookOpen, 
  Laptop, 
  ChevronRight, 
  CheckCircle, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Menu, 
  X,
  Play,
  Zap,
  Lightbulb,
  Sparkles,
  MessageSquare,
  Bug,
  Loader,
  ArrowLeft,
  Copy,
  Download
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ setCurrentPage, activePage, toggleAiModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'compiler', label: 'AI Compiler' },
    { id: 'course', label: 'Python Course' },
    { id: 'practicals', label: 'Practicals' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-blue-50 p-2 rounded-lg">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Skillzify</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-medium transition-colors ${
                  activePage === item.id 
                    ? 'text-blue-600 font-bold' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={toggleAiModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg shadow-blue-600/20 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Sparkles size={16} /> AI Tutor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-600 p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setIsMenuOpen(false); }}
                className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                  activePage === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => { toggleAiModal(); setIsMenuOpen(false); }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles size={16} /> Open AI Tutor
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Code className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-white tracking-tight">Skillzify</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Smart coding learning platform powered by AI. Master programming with visualization.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors"><Github size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
          <ul className="space-y-3">
            {['Features', 'AI Compiler', 'Python Course', 'Practicals'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => setCurrentPage(item.toLowerCase().includes('python') ? 'course' : item.toLowerCase().replace(' ', ''))}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight size={14} /> {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> Notes</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-sm">support@skillzify.com</span>
            </li>
          </ul>
          <div className="mt-6 bg-teal-600 rounded-xl p-6 text-center shadow-lg">
            <p className="text-white font-bold mb-2">Start Learning Today!</p>
            <button onClick={() => setCurrentPage('course')} className="text-white text-sm hover:underline">Get Started Free →</button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© 2025 Skillzify. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const HomePage = ({ setCurrentPage, toggleAiModal }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative z-10">
            <div className="inline-block mb-4 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              New: AI Interactive Mode
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Master Programming with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">AI-Powered Visualization</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Learn coding the smart way with real-time execution, algorithm breakdowns, and comprehensive learning resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={() => setCurrentPage('course')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
                Start Learning Free <ChevronRight size={20} />
              </button>
              <button onClick={toggleAiModal} className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-3.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                Try AI Compiler <Terminal size={20} className="text-blue-600" />
              </button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> No credit card required</div>
              <div className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> Free forever for basics</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white flex items-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
                AI-Powered Learning
              </div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Coding Dashboard" className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-lg cursor-pointer hover:bg-slate-800 transition-colors" onClick={toggleAiModal}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Sparkles size={12} /> Click to analyze</span>
                </div>
                <div className="font-mono text-xs text-green-400">
                  <span className="text-purple-400">def</span> <span className="text-blue-400">visualize</span>(code):<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> ai.analyze(code)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Preview */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
          <p className="text-lg text-slate-600">Our comprehensive platform combines cutting-edge AI technology with proven learning methods.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer" onClick={() => setCurrentPage('compiler')}>
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6"><Cpu className="w-8 h-8 text-blue-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Compiler</h3>
            <p className="text-slate-600 mb-6">Execute code in real-time with instant feedback. Detailed error analysis included.</p>
            <span className="text-blue-600 font-semibold flex items-center gap-1">Try Now <ChevronRight size={16} /></span>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all cursor-pointer" onClick={() => setCurrentPage('course')}>
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6"><BookOpen className="w-8 h-8 text-orange-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Courses</h3>
            <p className="text-slate-600 mb-6">Step-by-step learning paths from basics to advanced algorithms.</p>
            <span className="text-orange-600 font-semibold flex items-center gap-1">Learn More <ChevronRight size={16} /></span>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all cursor-pointer" onClick={() => setCurrentPage('practicals')}>
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6"><Zap className="w-8 h-8 text-green-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Practicals</h3>
            <p className="text-slate-600 mb-6">100+ real-world practicals with step-by-step solutions.</p>
            <span className="text-green-600 font-semibold flex items-center gap-1">Explore <ChevronRight size={16} /></span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/binary-code.png")' }}></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Coding Journey?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button onClick={() => setCurrentPage('course')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-600/30 transition-transform transform hover:scale-105">
            🚀 Get Started Today - It's Free!
          </button>
        </div>
      </div>
    </section>
  </div>
);

const FeaturesPage = ({ toggleAiModal }) => (
  <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Platform <span className="text-blue-600">Features</span></h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explore the powerful tools we've built to help you master programming faster.</p>
    </div>

    <div className="space-y-24">
      {/* Feature 1 */}
      <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
            <Cpu className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Intelligent AI Compiler</h2>
          <p className="text-lg text-slate-600 mb-6">
            Write, run, and debug code directly in your browser. Our AI doesn't just catch errors—it explains them in plain English and suggests fixes.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={20} className="text-green-500" /> Real-time syntax checking</li>
            <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={20} className="text-green-500" /> Performance optimization tips</li>
            <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={20} className="text-green-500" /> Support for Python, JS, and C++</li>
          </ul>
          <button onClick={toggleAiModal} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">Try Compiler</button>
        </div>
        <div className="bg-slate-900 rounded-2xl p-4 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="rounded-xl opacity-90" alt="Compiler" />
        </div>
      </div>

      {/* Feature 2 */}
      <div className="lg:grid lg:grid-cols-2 gap-16 items-center lg:grid-flow-row-dense">
        <div className="lg:col-start-2">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <Network className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Visual Logic Flow</h2>
          <p className="text-lg text-slate-600 mb-6">
            Struggling to understand an algorithm? One click generates a dynamic flowchart that visualizes the execution path of your code.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={20} className="text-green-500" /> Auto-generated flowcharts</li>
            <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={20} className="text-green-500" /> Step-through debugging</li>
            <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={20} className="text-green-500" /> Export diagrams for assignments</li>
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xl lg:col-start-1">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="rounded-xl" alt="Flowcharts" />
        </div>
      </div>
    </div>
  </div>
);

const CoursePage = () => (
  <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Master <span className="text-blue-600">Python</span></h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">A structured journey from "Hello World" to advanced data structures.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {['Introduction to Python', 'Variables & Data Types', 'Control Flow', 'Functions & Modules', 'Data Structures', 'OOP Basics', 'File Handling', 'API Integration', 'Final Project'].map((module, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">Module {i + 1}</span>
            {i < 3 ? <CheckCircle size={18} className="text-green-500" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>}
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{module}</h3>
          <p className="text-slate-500 text-sm mb-4">Learn the core concepts with interactive examples and quizzes.</p>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: i < 3 ? '100%' : '0%' }}></div>
          </div>
          <span className="text-xs text-slate-400">{i < 3 ? 'Completed' : 'Locked'}</span>
        </div>
      ))}
    </div>
  </div>
);

const PracticalsPage = () => (
  <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
    <div className="flex justify-between items-end mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Practicals Library</h1>
        <p className="text-slate-600 mt-2">Hands-on exercises to test your knowledge.</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm">All</button>
        <button className="text-slate-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50">Beginner</button>
        <button className="text-slate-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50">Advanced</button>
      </div>
    </div>

    <div className="space-y-4">
      {[
        { title: 'Fibonacci Sequence Generator', diff: 'Easy', lang: 'Python' },
        { title: 'Palindrome Checker', diff: 'Easy', lang: 'Python' },
        { title: 'Binary Search Algorithm', diff: 'Medium', lang: 'Python' },
        { title: 'Linked List Implementation', diff: 'Medium', lang: 'Python' },
        { title: 'Dijkstra Shortest Path', diff: 'Hard', lang: 'Python' },
      ].map((item, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between hover:border-blue-300 transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-mono font-bold">
              {i + 1}
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{item.title}</h3>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.diff === 'Easy' ? 'bg-green-100 text-green-700' : item.diff === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{item.diff}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{item.lang}</span>
              </div>
            </div>
          </div>
          <ChevronRight className="text-slate-400" />
        </div>
      ))}
    </div>
  </div>
);

const CompilerPage = ({ toggleAiModal }) => (
  <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col animate-fade-in">
    <div className="mb-6 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Online Compiler</h1>
        <p className="text-slate-600">Write, run, and share your code.</p>
      </div>
      <button onClick={toggleAiModal} className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg font-bold shadow-md flex items-center gap-2">
        <Sparkles size={16} /> AI Assistant
      </button>
    </div>
    <div className="flex-1 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
      <div className="flex-1 border-r border-slate-700 flex flex-col">
        <div className="bg-slate-800 p-3 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-slate-400 text-sm font-mono">main.py</span>
          </div>
          <button className="text-slate-400 hover:text-white"><Play size={16} /></button>
        </div>
        <div className="flex-1 p-4 font-mono text-sm text-slate-300">
          <p><span className="text-purple-400">def</span> <span className="text-blue-400">main</span>():</p>
          <p className="pl-4"><span className="text-slate-500"># Write your code here</span></p>
          <p className="pl-4">print(<span className="text-green-400">"Hello, Skillzify!"</span>)</p>
          <br/>
          <p>if __name__ == <span className="text-green-400">"__main__"</span>:</p>
          <p className="pl-4">main()</p>
        </div>
      </div>
      <div className="h-48 md:h-auto md:w-1/3 bg-slate-950 p-4 font-mono text-sm text-green-400">
        <div className="mb-2 text-slate-500 uppercase text-xs font-bold tracking-wider">Terminal Output</div>
        $ python main.py<br/>
        Hello, Skillzify!<br/>
        <br/>
        $ _
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [showAIModal, setShowAIModal] = useState(false);
  
  // AI Feature State
  const [aiMode, setAiMode] = useState('explain');
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Gemini API Integration
  const handleGenerate = async () => {
    if (!userInput.trim()) return;
    
    setIsLoading(true);
    setError('');
    setAiResponse('');

    const apiKey = ""; // Runtime environment provides this
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    let prompt = "";
    if (aiMode === 'explain') {
      prompt = `You are Skillzify's expert coding tutor. Explain the following code snippet step-by-step in simple, beginner-friendly terms. Use analogies if helpful. Code:\n${userInput}`;
    } else if (aiMode === 'debug') {
      prompt = `You are Skillzify's expert coding debugger. Analyze the following code for bugs. Provide the corrected code and explain the fix. Code:\n${userInput}`;
    } else if (aiMode === 'concept') {
      prompt = `You are Skillzify's computer science professor. Explain the following programming concept clearly and concisely. Provide a small Python example. Concept:\n${userInput}`;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      if (!response.ok) throw new Error('Failed to fetch response');
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
      setAiResponse(text);
    } catch (err) {
      setError("Oops! Our AI servers are a bit busy. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    switch(activePage) {
      case 'home': return <HomePage setCurrentPage={setActivePage} toggleAiModal={() => setShowAIModal(true)} />;
      case 'features': return <FeaturesPage toggleAiModal={() => setShowAIModal(true)} />;
      case 'compiler': return <CompilerPage toggleAiModal={() => setShowAIModal(true)} />;
      case 'course': return <CoursePage />;
      case 'practicals': return <PracticalsPage />;
      default: return <HomePage setCurrentPage={setActivePage} toggleAiModal={() => setShowAIModal(true)} />;
    }
  };

  return (
    <div className="font-sans text-slate-800 antialiased bg-slate-50 min-h-screen flex flex-col">
      <Navbar setCurrentPage={setActivePage} activePage={activePage} toggleAiModal={() => setShowAIModal(true)} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setCurrentPage={setActivePage} />

      {/* Redesigned AI Tutor Modal (Analyze Window) */}
      {showAIModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[80vh] flex flex-col overflow-hidden animate-scale-up border border-slate-700">
            
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between border-b border-slate-700 shrink-0">
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg">
                      <Sparkles className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">AI Mentor Workspace</h3>
                      <p className="text-slate-400 text-xs">Powered by Gemini 2.0</p>
                    </div>
                 </div>
                 {/* Mode Switcher Pills */}
                 <div className="hidden md:flex bg-slate-800 rounded-lg p-1 ml-6">
                    <button onClick={() => setAiMode('explain')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${aiMode === 'explain' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Explain</button>
                    <button onClick={() => setAiMode('debug')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${aiMode === 'debug' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Debug</button>
                    <button onClick={() => setAiMode('concept')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${aiMode === 'concept' ? 'bg-green-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Concept</button>
                 </div>
              </div>
              <button onClick={() => setShowAIModal(false)} className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-full transition-colors"><X size={24} /></button>
            </div>

            {/* Main Split View */}
            <div className="flex-1 flex overflow-hidden">
               
               {/* LEFT PANEL: INPUT / CODE EDITOR */}
               <div className="w-1/2 flex flex-col border-r border-slate-200 bg-slate-50">
                  <div className="p-3 bg-white border-b border-slate-200 flex justify-between items-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                     <span className="flex items-center gap-2"><Code size={14} /> Source Code / Input</span>
                     <button className="flex items-center gap-1 hover:text-blue-600" onClick={() => setUserInput('')}>Clear</button>
                  </div>
                  <textarea 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-1 p-4 bg-slate-50 resize-none font-mono text-sm text-slate-800 focus:outline-none leading-relaxed"
                    placeholder={
                      aiMode === 'explain' ? "// Paste code here to get an explanation...\ndef fibonacci(n):\n    if n <= 1: return n\n    return fibonacci(n-1) + fibonacci(n-2)" : 
                      aiMode === 'debug' ? "// Paste buggy code here...\nfor i in range(10)\n    print(i)" :
                      "Type a concept to learn (e.g., 'What is Recursion?')..."
                    }
                    spellCheck="false"
                  ></textarea>
                  <div className="p-4 border-t border-slate-200 bg-white">
                    <button 
                      onClick={handleGenerate}
                      disabled={isLoading || !userInput.trim()}
                      className="w-full bg-slate-900 hover:bg-blue-700 text-white py-3 rounded-lg font-bold shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       {isLoading ? <Loader className="animate-spin" size={18} /> : <Play size={18} fill="currentColor" />}
                       {isLoading ? "Analyzing..." : "Run Analysis"}
                    </button>
                  </div>
               </div>

               {/* RIGHT PANEL: AI OUTPUT */}
               <div className="w-1/2 flex flex-col bg-white">
                  <div className="p-3 border-b border-slate-100 flex justify-between items-center text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                     <span className="flex items-center gap-2"><Sparkles size={14} className="text-blue-500" /> AI Feedback</span>
                     <div className="flex gap-2">
                       <button className="hover:text-blue-600"><Copy size={14} /></button>
                       <button className="hover:text-blue-600"><Download size={14} /></button>
                     </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
                     {error && (
                       <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-sm flex items-start gap-3">
                         <Bug size={18} className="mt-0.5 shrink-0" />
                         {error}
                       </div>
                     )}

                     {!aiResponse && !isLoading && !error && (
                       <div className="h-full flex flex-col items-center justify-center text-slate-400">
                          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Sparkles size={32} className="text-slate-300" />
                          </div>
                          <p className="text-sm">Run analysis to see results</p>
                       </div>
                     )}

                     {isLoading && (
                        <div className="space-y-4 animate-pulse">
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                        </div>
                     )}

                     {aiResponse && (
                       <div className="prose prose-slate prose-sm max-w-none">
                         <div className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
                           {aiResponse}
                         </div>
                       </div>
                     )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
