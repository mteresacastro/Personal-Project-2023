// Fichero src/components/App.jsx
import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <i className="fa-solid fa-bars"></i>
        <img className="logo" src="/src/images/logofinal300.png" alt="logo k-dance war" />
        <i className="fa-solid fa-user-large"></i>
      </header>
      <main>
        <div className="hero-opacity">
        <div className="hero">
          <h1>Dancing to Glory</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi fugiat pariatur dolores ab quae dolorum, quasi harum minima nostrum eum. Non modi nihil numquam, minima optio cum harum rerum.</p>
          <button>Participa!</button>
        </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
