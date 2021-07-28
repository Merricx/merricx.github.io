import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Page Not Found</h1>
          <p>
            Sorry, the page you looking for either doesn't exist or removed 😥
          </p>
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

export default NotFoundPage;
