function AboutPage() {
  return (
    <div className="card p-4">
      <h1>About This Project</h1>
      <p>
        MealDB Recipe Finder is a React single-page application built for CSC 365.
        It helps users search for recipes, filter by category or cuisine, view
        recipe details, save favorites, and store personal notes.
      </p>

      <h2 className="mt-4">Tech Stack</h2>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>React Router</li>
        <li>Bootstrap</li>
        <li>TheMealDB API</li>
        <li>localStorage</li>
      </ul>
    </div>
  )
}

export default AboutPage