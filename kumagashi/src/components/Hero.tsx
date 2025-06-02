import { Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Gaurashree. 👋</h1>
      <p className="text-lg md:text-xl mb-6">Kumagashi is a celebration of dance, from ancient rituals to modern performances. 
        Join us as we uncover the stories behind movements, costumes, and cultures.</p>
      <div className="flex gap-4">
        <a href="https://github.com/dillikibaddie" target="_blank" rel="noreferrer">
          <Github className="w-6 h-6 hover:text-gray-600" />
        </a>
        <a href="https://linkedin.com/in/dillikibaddie" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-600" />
        </a>
      </div>
    </section>
  )
}

export default Hero