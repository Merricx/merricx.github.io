import React from 'react';
import Layout from '../components/Layout';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>About Me</h1>
          <hr></hr>
          <p>
            Hi, <b style={{ color: 'var(--blue)' }}>merricx</b> here. I am
            security engineer from Indonesia that passionate about cryptography
            and data security.<br></br>In my free times, I play CTF with SKSD
            Team, especially crypto challenges.<br></br>
          </p>
          <p>Get in touch:</p>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/merricx">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/merricx_">
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:imam@merri.cx">
                Email
              </a>
            </li>
          </ul>
        </main>
        <footer>
          <h4>
            <a href="/">← Back</a>
          </h4>
        </footer>
      </Layout>
    );
  }
}

export default AboutPage;
