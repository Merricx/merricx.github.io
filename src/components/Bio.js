import React from 'react';
import profilePic from '../assets/profile.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Merricx`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 350 }}>
          Blog that written lazily by <a href="/about">merricx</a>.{' '}
          &nbsp;Discuss about security, privacy, and cryptography.
        </p>
      </div>
    );
  }
}

export default Bio;
