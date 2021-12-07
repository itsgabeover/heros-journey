import { Link } from "react-router-dom";


function Home({ user }) {
    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return <h1>Welcome, Hero! If you are new here, take this <a href="https://archetypes.jilecek.cz/" target="_blank">quiz</a> to determine your hero archetype</h1>;
    }
  }

  export default Home;