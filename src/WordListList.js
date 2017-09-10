import React, { Component } from 'react';
import ls from 'local-storage';


class WordListList extends Component {

  render() {
    if (ls.get('wordLists').length === 0) {
      return <p>There are no word lists saved.</p>;
    }
  }

}

export default WordListList;
