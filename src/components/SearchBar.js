import React from 'react';
import { TextInput } from 'react-native';

class SearchyBar extends React.Component {

      onInputChange(term) {
          this.props.onTermChange(term);
      }

    render() {
        return (
          <TextInput
          style={{height: 40}}
            onChangeText={(text) => this.onInputChange(text)}
            placeholder='Type Here Plz' />
        );
    }
}

export default SearchyBar;
