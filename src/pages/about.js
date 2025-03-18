import React from "react";
import Layout from "../components/Layout";
import profilePic from "../assets/profile.png";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>About Me</h1>
          <hr></hr>
          <img
            style={{
              width: "128px",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src={profilePic}
          />
          <p>
            Hi, I am <b style={{ color: "var(--blue)" }}>Imam Al-Fath</b>,
            a security researcher from Indonesia that passionate about cryptography
            and security.
            <br></br>
            In my (rare) free times, I play CTF with SKSD
            Team, especially crypto challenges.<br></br>
          </p>
          <h3>Get in touch</h3>
          <ul style={{ marginLeft: "10px" }}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/merricx"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/merrricx"
              >
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="mailto:imam@merri.cx">
                Email
              </a>
            </li>
          </ul>
        </main>
        <hr></hr>
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
