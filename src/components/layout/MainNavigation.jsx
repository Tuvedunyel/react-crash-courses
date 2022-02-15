import { Link } from 'react-router-dom';

function MainNavigation () {
    return (
      <header>
        <h1>React Mettups</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/new-meetup'>New meet up</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation;