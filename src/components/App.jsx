// Fichero src/components/App.jsx
import '../styles/App.scss'
import '../styles/core/variables.scss'

function App() {
  return (
    <div>
      <header className="header">
        <i className="icon1 fa-solid fa-bars"></i>
        <img className="logo" src="/src/images/logofinal300.png" alt="logo k-dance war" />
        <i className="icon2 fa-solid fa-user-large"></i>
        <nav className="header__nav">
          <ul className= "header__navUl">
            <li><a className= "header__navUl--li" href="">¿De qué va ésto?</a></li>
            <li><a className= "header__navUl--li" href="">Grupos</a></li>
            <li><a className= "header__navUl--li" href="">Reto</a></li>
            <li><a className= "header__navUl--li" href="">Ranking</a></li>
            <li><a className= "header__navUl--li" href="">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-section">
        <div className="hero">
          <h1 className="hero__title">Dancing to Glory</h1>
          <p className="hero__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi fugiat pariatur dolores ab quae dolorum, quasi harum minima nostrum eum. Non modi nihil numquam, minima optio cum harum rerum.</p>
          <button className="hero__button"><a className="hero__a"href="">¡Participa!</a></button>
        </div>
        </section>
        <section>

        </section>

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
