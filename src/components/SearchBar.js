import React from 'react';
import { SearchBar } from 'react-native-elements'

class SearchyBar extends React.Component {
  constructor() {
          super();
          this.state = { term: '' }
      }

      onInputChange(term) {
          this.setState({term});
          this.props.onTermChange(term);
      }

    render() {
        return (
          <SearchBar
            onChange={event => this.onInputChange(event.target.value)}
            placeholder='Type Here Plz' />
        );
    }
}

export default SearchyBar;
