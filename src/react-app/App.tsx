// src/App.tsx

import { useState, useRef } from "react";
import "./App.css";

interface Site {
	name: string;
	url: string;
	description: string;
}

const sites: Site[] = [
	{
		name: "Service Master Pro",
		url: "https://service-master-pro.danielcepatterson.workers.dev/",
		description: "Service management platform",
	},
	{
		name: "Drum Sequencer",
		url: "https://drum-sequencer.danielcepatterson.workers.dev/",
		description: "Interactive drum sequencer",
	},
	// Add more sites here as needed
];

function App() {
	const [firefplaceActive, setFireplaceActive] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const toggleFireplace = () => {
		setFireplaceActive(!firefplaceActive);
		if (!firefplaceActive && audioRef.current) {
			audioRef.current.play().catch(() => {
				console.log("Fireplace audio autoplay was blocked");
			});
		} else if (audioRef.current) {
			audioRef.current.pause();
		}
	};

	return (
		<>
			<audio
				ref={audioRef}
				loop
				style={{ display: "none" }}
			>
				<source
					src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_8c5d11e3-eebf-4f13-9e32-a5ed8d69c901.mp3"
					type="audio/mpeg"
				/>
			</audio>

			{firefplaceActive && (
				<div className="fireplace-container">
					<div className="fireplace">
						<div className="fireplace-back"></div>
						<div className="flames">
							<div className="flame flame-1"></div>
							<div className="flame flame-2"></div>
							<div className="flame flame-3"></div>
							<div className="flame flame-4"></div>
							<div className="flame flame-5"></div>
						</div>
						<div className="logs"></div>
					</div>
				</div>
			)}

			<button 
				className="fireplace-toggle"
				onClick={toggleFireplace}
			>
				{firefplaceActive ? "🔥 Fireplace On" : "🔥 Start Fireplace"}
			</button>

			<header className="header">
				<nav className="nav-container">
					<h1 className="site-title">Danny Evans Mad Wild Experiments</h1>
					<div className="nav-buttons">
						{sites.map((site) => (
							<a
								key={site.name}
								href={site.url}
								target="_blank"
								rel="noopener noreferrer"
								className="nav-button"
								title={site.description}
							>
								{site.name}
							</a>
						))}
					</div>
				</nav>
			</header>

			<main className="main-content">
				<section className="hero">
					<h2>Welcome</h2>
					<p>
						Explore a collection of experimental projects and tools built with
						cutting-edge technologies.
					</p>
				</section>

				<section className="projects-grid">
					{sites.map((site) => (
						<div key={site.name} className="project-card">
							<h3>{site.name}</h3>
							<p>{site.description}</p>
							<a
								href={site.url}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								Visit Project →
							</a>
						</div>
					))}
				</section>
			</main>
		</>
	);
}

export default App;
