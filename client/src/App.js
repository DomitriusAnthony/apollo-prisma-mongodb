import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql  from 'graphql-tag';

const GET_USERS = gql`
  {
    users {
      name
      id
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_USERS}>
          {({data, error, loading}) => {
            if (loading) return <h1>Loading..</h1>;
            if (error) return <p>{error.message}</p>

            console.log(data);

            return data.users.map(user => <p>{user.name}</p>)
          }}
        </Query>
      </div>
    );
  }
}

export default App;
