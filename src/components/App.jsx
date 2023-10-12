// Fichero src/components/App.jsx
import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className="header">
        <i className="icon1 fa-solid fa-bars"></i>
        <img className="logo" src="/src/images/logofinal300.png" alt="logo k-dance war" />
        <i className="icon2 fa-solid fa-user-large"></i>
        <nav className="header__nav">
          <ul className= "header__navUl">
            <li>¿De qué va ésto?</li>
            <li>Grupos</li>
            <li>Reto</li>
            <li>Ranking</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero-opacity">
        <div className="hero">
          <h1 className="hero__title">Dancing to Glory</h1>
          <p className="hero__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi fugiat pariatur dolores ab quae dolorum, quasi harum minima nostrum eum. Non modi nihil numquam, minima optio cum harum rerum.</p>
          <button className="hero__button"><a className="hero__a"href="">¡Participa!</a></button>
        </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
