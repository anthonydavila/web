'use client'

import React, { useState, useEffect } from 'react'
import { Linkedin, Github, ArrowRight, Rocket, Server, MessageCircle, Database, BarChart } from 'lucide-react'
import Image from 'next/image'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ContactModal from './ContactModal'

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.getElementById(to)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <a href={`#${to}`} onClick={handleClick} className="hover:text-blue-300 transition-colors cursor-pointer">
            {children}
        </a>
    )
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
        <Icon size={20} aria-hidden="true" />
        <span className="sr-only">{label}</span>
    </a>
)

const Star = ({ x, y, size }: { x: number; y: number; size: number }) => {
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;

    return (
        <div
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
                top: `${y}%`,
                left: `${x}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
            }}
        />
    );
};

const ShootingStar = () => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const angle = Math.random() * 360;

    return (
        <div
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: `rotate(${angle}deg)`,
            }}
        />
    );
};

const StarField = () => {
    const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);
    const [shootingStars, setShootingStars] = useState<number[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: 100 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
        }));
        setStars(newStars);

        const shootingStarInterval = setInterval(() => {
            setShootingStars(prev => [...prev, Date.now()]);
        }, 5000);

        return () => clearInterval(shootingStarInterval);
    }, []);

    return (
        <div className="fixed inset-0" aria-hidden="true">
            {stars.map((star, i) => (
                <Star key={i} {...star} />
            ))}
            {shootingStars.map(key => (
                <ShootingStar key={key} />
            ))}
        </div>
    );
};

const CustomTabs = ({ tabs }: { tabs: { label: string; content: React.ReactNode; icon: React.ElementType }[] }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="flex space-x-2 mb-4 bg-purple-900/50 p-1 rounded-full">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                            activeTab === index ? 'bg-purple-700 text-white' : 'text-gray-300 hover:text-white'
                        }`}
                        aria-selected={activeTab === index}
                        role="tab"
                    >
                        <tab.icon className="mr-2 h-4 w-4" />
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="bg-purple-800/50 border border-purple-600 rounded-lg p-6">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default function SpacePortfolioWithParallax() {
    const tabs = [
        {
            label: "Skills",
            icon: Rocket,
            content: (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Frontend Skills</h3>
                    <ul className="list-disc list-inside mb-6">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3 className="text-2xl font-semibold mb-4">Backend Skills</h3>
                    <ul className="list-disc list-inside mb-6">
                        <li>Spring Boot</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>
            ),
        },
        {
            label: "Projects",
            icon: BarChart,
            content: (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">DataAnalytic Project</h3>
                    <p className="mb-4">
                        DataAnalytic is an innovative platform that uses the Dynamic Query Engine as its backend, allowing users to connect databases intuitively and efficiently. With just a few clicks, users can transfer information to our AI system for advanced exploration and analysis.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mp3f6NMPQplEzNQNVKS093oBoP6P7k.png"
                                alt="DataAnalytic Homepage"
                                width={600}
                                height={300}
                                className="rounded-lg w-full h-auto mb-2"
                            />
                            <p className="text-sm text-center">DataAnalytic Homepage</p>
                        </div>
                        <div>
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SZnfjmfvF7MNtvHH4WY1PMt6Glp16R.png"
                                alt="DataAnalytic Database Connection"
                                width={600}
                                height={300}
                                className="rounded-lg w-full h-auto mb-2"
                            />
                            <p className="text-sm text-center">DataAnalytic Database Connection</p>
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside mb-4">
                        <li>Secure Database Connection: Connect your databases with optimized security for technical professionals.</li>
                        <li>AI-Powered Exploration: Transform your data into practical knowledge with predictive analysis.</li>
                        <li>Universal Access: Access advanced analysis tools previously available only to large enterprises.</li>
                        <li>Flexibility and Control: Explore your data at your own pace with complete security and control.</li>
                    </ul>
                    <p>
                        This project showcases my skills in both frontend and backend development, as well as my ability to work with complex data systems and AI integration. It demonstrates my capability to create intuitive user interfaces and implement robust backend solutions for data analysis and management.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <ParallaxProvider>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white font-sans overflow-hidden relative">
                <StarField />

                <nav className="flex justify-between items-center p-6 relative z-10">
                    <div className="w-12 h-12 relative overflow-hidden rounded-full bg-purple-600 flex items-center justify-center">
                        <span className="text-xl font-bold">AD</span>
                    </div>
                    <ul className="flex space-x-6">
                        <li><NavLink to="home">Home</NavLink></li>
                        <li><NavLink to="skills-and-projects">Skills & Projects</NavLink></li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <SocialLink href="https://www.linkedin.com/in/anthony-d%C3%A1vila-3818b42b3/" icon={Linkedin} label="LinkedIn" />
                        <SocialLink href="https://github.com/anthonydavila" icon={Github} label="GitHub" />
                        <SocialLink href="https://wa.me/86210768" icon={MessageCircle} label="WhatsApp" />
                    </div>
                </nav>

                <section id="home">
                    <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-20 relative z-10">
                        <Parallax translateY={[-20, 20]} className="max-w-2xl mb-10 md:mb-0">
                            <div className="bg-purple-800 inline-block px-4 py-2 rounded-full mb-4">
                                Welcome to my Portfolio
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Anthony Dávila</h1>
                            <p className="text-lg mb-8">
                                I'm a junior developer passionate about creating innovative web solutions.
                                With a strong foundation in technologies like Spring Boot, Next.js, and Tailwind CSS,
                                I'm constantly expanding my skills and taking on new challenges in web development.
                            </p>
                            <ContactModal />
                        </Parallax>
                        <div className="relative w-full md:w-[500px] h-[300px] md:h-[500px]">
                            <Parallax
                                translateY={[40, -40]}
                                rotate={[-5, 5]}
                                scale={[0.8, 1.2]}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/Purple planet and space.svg"
                                    alt="Purple planet in space"
                                    layout="fill"
                                    objectFit="contain"
                                    className="animate-float"
                                />
                            </Parallax>
                            <Parallax
                                translateX={['-50%', '50%']}
                                translateY={['-100%', '100%']}
                                rotate={[-15, 15]}
                                scale={[0.5, 1.5]}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >
                                <Image
                                    src="/Astronaut.svg"
                                    alt="Astronaut reading a book"
                                    width={150}
                                    height={150}
                                    className="animate-float-slow"
                                />
                            </Parallax>
                        </div>
                    </main>
                </section>

                <section id="skills-and-projects" className="px-6 md:px-20 py-16 relative z-10">
                    <h2 className="text-4xl font-bold mb-8 text-center">Skills & Projects</h2>
                    <p className="text-center mb-12 max-w-2xl mx-auto">
                        Explore my journey through web development and data analytics.
                        From frontend to backend, discover the projects that showcase my skills.
                    </p>
                    <CustomTabs tabs={tabs} />
                </section>

                <Parallax translateY={[0, 100]} className="absolute top-1/4 left-1/4">
                    <div className="w-4 h-4 bg-blue-300 rounded-full opacity-50" />
                </Parallax>
                <Parallax translateY={[0, -100]} className="absolute bottom-1/4 right-1/4">
                    <div className="w-6 h-6 bg-purple-400 rounded-full opacity-50" />
                </Parallax>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(5deg); }
                    }
                    @keyframes float-slow {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(-5deg); }
                    }
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 1; }
                    }
                    @keyframes shooting-star {
                        0% { transform: translateX(0) translateY(0); opacity: 1; }
                        100% { transform: translateX(300px) translateY(300px); opacity: 0; }
                    }
                    .animate-float {
                        animation: float 10s ease-in-out infinite;
                    }
                    .animate-float-slow {
                        animation: float-slow 15s ease-in-out infinite;
                    }
                    .animate-twinkle {
                        animation: twinkle 4s ease-in-out infinite;
                    }
                    .animate-shooting-star {
                        animation: shooting-star 1s ease-out forwards;
                    }
                    .filter-purple {
                        filter: hue-rotate(45deg) saturate(150%) brightness(70%);
                    }
                `}</style>
            </div>
        </ParallaxProvider>
    )
}