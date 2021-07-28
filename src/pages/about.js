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
            security engineer from Indonesia that passioned about cryptography
            and data security in general. I also plays CTF sometimes when not
            doing anything, especially crypto challenges.<br></br>
          </p>
          <p>Get in touch with me:</p>
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
              <a target="_blank" href="https://telegram.me/merricx">
                Telegram
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
