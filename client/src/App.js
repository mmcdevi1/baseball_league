import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MainRoutes from './router';

import actions from './actions';

const { fetchTeams } = actions.teamActions;

class App extends Component {
	componentDidMount () {
		const { fetchTeams } = this.props;

		fetchTeams();
	}

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <MainRoutes />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchTeams })(App);
