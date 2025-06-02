const Projects = () => {
    return (
      <section id="projects" className="py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-600">A cool project description goes here.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-600">Another awesome project description.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-600">Yet another amazing project.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
