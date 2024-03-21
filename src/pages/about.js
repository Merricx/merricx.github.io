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
            Hi, <b style={{ color: "var(--blue)" }}>merricx</b> here. I am
            security engineer from Indonesia that passionate about cryptography
            and security.<br></br>In my (rare) free times, I play CTF with SKSD
            Team, especially crypto challenges.<br></br>
          </p>
          <h3>Get in touch</h3>
          <ul style={{ marginLeft: "10px" }}>
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
