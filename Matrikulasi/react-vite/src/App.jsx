import React from "react";
// prop validation
// import Props from "./props";
import { Routes, Route, Link } from 'react-router-dom'
import {HomePage, AboutPage, FaqPage, Link as link} from './Routing/Routing'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '/about',
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target,
      };
    })
  }

  render() {
    return (
      <>
        <header>
          <nav>
            {/* Native Routing */}
            {/* <ul>
              <li>
                <Link target='/' navigate={this.navigate}>
                  Home
                </Link>
              </li>
              <li>
                <Link target='/about' navigate={this.navigate}>
                  About
                </Link>
              </li>
              <li>
                <Link target='/faq' navigate={this.navigate}>
                  FAQ
                </Link>
              </li>
            </ul> */}

            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/faq'>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          {/* Native Routing */}
          {/* { this.state.page === '/' && <HomePage />}
          { this.state.page === '/about' && <AboutPage />}
          { this.state.page === '/faq' && <FaqPage />} */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
      </>
    )
  }
}

export default App;


