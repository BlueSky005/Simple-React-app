import React from 'react';
import DisplayBoard from '../components/displayBoard';
import Data from './Data.json';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <DisplayBoard products={Data} />
      </div>
    )
  }
}
