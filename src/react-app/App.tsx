// src/App.tsx

import "./App.css";

interface Site {
	name: string;
	url: string;
	description: string;
}

const sites: Site[] = [
	{
		name: "Service Master Pro",
		url: "https://servicemaster.example.com",
		description: "Service management platform",
	},
	{
		name: "Drum Sequencer",
		url: "https://drumsequencer.example.com",
		description: "Interactive drum sequencer",
	},
	// Add more sites here as needed
];

function App() {
	return (
		<>
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
