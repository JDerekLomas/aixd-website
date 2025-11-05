import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">AIXD</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#tools" className="text-sm hover:text-[var(--accent)] transition-colors">Tools</a>
              <a href="#patterns" className="text-sm hover:text-[var(--accent)] transition-colors">Patterns</a>
              <a href="#learn" className="text-sm hover:text-[var(--accent)] transition-colors">Learn</a>
              <a href="#community" className="text-sm hover:text-[var(--accent)] transition-colors">Community</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Expand Your Human Potential{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent">
                With AI
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 text-balance">
              A practical hub for experience designers learning to shape experiences with artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#learn"
                className="px-8 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Start Learning
              </a>
              <a
                href="#tools"
                className="px-8 py-4 border-2 border-[var(--border)] rounded-lg font-semibold hover:border-[var(--accent)] transition-all"
              >
                Explore Tools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">AI as Augmentation, Not Replacement</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              In 2025, we've moved beyond the hype. AI is not about replacing designers—it's about enhancing
              the creative process. Automate the mundane. Amplify your creativity. Focus on what matters:
              shaping meaningful human experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Use AI Across Your Workflow</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From research synthesis to prototyping to testing—discover practical ways to integrate AI at every stage of design.
              </p>
            </div>

            <div className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-3">Master AI-Native Patterns</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Go beyond chat interfaces. Learn adaptive UIs, refinement controls, and multimodal interactions shaping the future.
              </p>
            </div>

            <div className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3">Share & Learn Together</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a community of designers experimenting with AI, sharing what works, and exploring the frontier together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Essential AI Tools for Designers</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The most impactful tools to augment your creative process in 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "ChatGPT",
                category: "Research & Content",
                description: "Synthesize research findings, draft UX copy, generate ideas, and summarize stakeholder feedback.",
                use: "Try it for: User interview synthesis, content ideation, microcopy generation"
              },
              {
                name: "Claude",
                category: "Strategic Thinking",
                description: "Deep analysis, complex reasoning, and thoughtful critique of design decisions and strategies.",
                use: "Try it for: Design critiques, strategy sessions, accessibility audits"
              },
              {
                name: "Figma AI",
                category: "Design Production",
                description: "Automate repetitive tasks, generate placeholder content, and create wireframes swiftly with plugins.",
                use: "Try it for: Component generation, layout automation, design system management"
              },
              {
                name: "Galileo AI",
                category: "Rapid Prototyping",
                description: "Describe concepts and instantly get wireframes with UI components matching your design system.",
                use: "Try it for: Early-stage ideation, client presentations, concept validation"
              },
              {
                name: "Midjourney / DALL-E",
                category: "Visual Exploration",
                description: "Generate imagery, explore visual styles, and create mood boards at unprecedented speed.",
                use: "Try it for: Concept art, mood boards, visual style exploration"
              },
              {
                name: "Notion AI / Craft",
                category: "Documentation",
                description: "Transform notes into polished documentation, synthesize meetings, and organize research.",
                use: "Try it for: Design docs, research repositories, team wikis"
              }
            ].map((tool, i) => (
              <div key={i} className="border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all hover:shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <span className="text-xs px-3 py-1 bg-[var(--muted)] rounded-full">{tool.category}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
                <p className="text-sm text-[var(--accent)] font-medium">{tool.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Patterns Section */}
      <section id="patterns" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI-Native Design Patterns</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Move beyond chat interfaces—learn the patterns shaping the next generation of AI experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                pattern: "Adaptive UIs",
                description: "Interfaces that dynamically adjust based on user context, preferences, and behavior—not just personalized content, but personalized structure.",
                examples: "Dashboard layouts that reorganize based on usage patterns, menus that surface relevant options first"
              },
              {
                pattern: "Refinement Controls",
                description: "Move away from \"start over\" to iterative improvement. Highlight, tweak, and refine specific parts of AI output.",
                examples: "Partial regeneration, contextual prompts on selection, presets and templates for common adjustments"
              },
              {
                pattern: "Task-Oriented Interfaces",
                description: "Complement or replace open-ended chat with purpose-built controls: sliders, knobs, semantic spreadsheets, infinite canvases.",
                examples: "Temperature controls for tone, sliders for detail level, canvas for spatial AI thinking"
              },
              {
                pattern: "Progressive Disclosure with AI",
                description: "AI surfaces complexity only when needed, keeping interfaces simple while enabling power users to go deep.",
                examples: "Smart defaults that evolve, contextual advanced options, AI-suggested parameters"
              },
              {
                pattern: "Multimodal Interactions",
                description: "Seamlessly blend text, voice, image, and gesture inputs to match the natural flow of creative work.",
                examples: "Voice commands during visual work, image-to-edit workflows, spatial interactions"
              },
              {
                pattern: "Transparent AI Reasoning",
                description: "Show your work. Help users understand why AI made suggestions and build trust through explainability.",
                examples: "Confidence indicators, reasoning traces, alternative paths shown"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all">
                <h3 className="text-xl font-bold mb-3">{item.pattern}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <div className="text-sm text-[var(--accent)]">
                  <strong>Examples:</strong> {item.examples}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore more patterns at{" "}
              <a
                href="https://ainative.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline font-medium"
              >
                ainative.design
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learn" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your AI Design Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Practical resources to help you use AI across your design workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-[var(--accent)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">For Beginners</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>AI Literacy Fundamentals:</strong> How AI actually works (no engineering degree required)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>Your First AI Workflow:</strong> Start with research synthesis using ChatGPT or Claude</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>Prompting Basics:</strong> Write effective prompts that get you better results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>Tool Comparison:</strong> Which AI tool for which design task</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--border)] rounded-xl p-8 hover:border-[var(--accent)] transition-all">
              <h3 className="text-2xl font-bold mb-4">For Practitioners</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>Advanced Prompting:</strong> Chain-of-thought, few-shot examples, context management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>AI-Native Design Systems:</strong> Building design systems that work with AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>Evaluation & Testing:</strong> How to assess AI-generated designs and outputs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">→</span>
                  <span><strong>Case Studies:</strong> Real projects using AI across the design process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Community</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              This is a space for experience designers to experiment, share discoveries, and learn together.
              No gatekeeping, no hype—just practical exploration of AI's potential to enhance human creativity.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border)]">
                <h3 className="font-bold mb-2">Share Your Experiments</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  What's working? What's not? Let's learn from each other's explorations.
                </p>
              </div>
              <div className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border)]">
                <h3 className="font-bold mb-2">Contribute Patterns</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Found a great AI-native pattern? Add it to our growing library.
                </p>
              </div>
              <div className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border)]">
                <h3 className="font-bold mb-2">Connect & Collaborate</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Find other designers exploring the same questions you are.
                </p>
              </div>
            </div>

            <div className="bg-[var(--background)] border-2 border-[var(--accent)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get notified about new resources, patterns, and community events.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--background)] focus:outline-none focus:border-[var(--accent)]"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">AIXD</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
              <p>AI & Experience Design – Expanding human potential with artificial intelligence</p>
              <p className="mt-2">© 2025 AIXD. Built by designers, for designers.</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/aixd" className="text-gray-600 dark:text-gray-400 hover:text-[var(--accent)] transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com/aixd" className="text-gray-600 dark:text-gray-400 hover:text-[var(--accent)] transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
