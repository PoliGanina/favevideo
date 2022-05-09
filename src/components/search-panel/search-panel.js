import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                    className="search__panel search-input"
                    placeholder="Start typing the video name..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;