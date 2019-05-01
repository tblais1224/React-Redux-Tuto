import React, {Component} from 'react'


class AddPokemon extends Component {
    state = {
        name: null,
        lvl: null,
        move: null
    }

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPokemon(this.state);
}

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">lvl:</label>
                    <input type="text" id="lvl" onChange={this.handleChange} />
                    <label htmlFor="name">move:</label>
                    <input type="text" id="move" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPokemon
