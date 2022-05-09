import { Component } from 'react';

import './add-form.scss';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.url) return;
        this.props.onAdd(this.state.name, this.state.url);
        this.setState({
            name: '',
            url: ''
        })
    }

    render() {
        const {name, url} = this.state;

        return (
            <div className="add__form">
                <h3>Add new video</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Video name"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Copy video URL here"
                        name="url"
                        value={url} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">submit</button>
                </form>
            </div>
        )
    }
}

export default AddForm;