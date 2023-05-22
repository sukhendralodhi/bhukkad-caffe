import { Component } from "react";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: 'What',
            loc: 'Where'
        }
    }

    async componentDidMount() {
        const url = await fetch('https://api.github.com/users/sukhendralodhi');
        const data = await url.json();

        this.setState({
            name: data.name,
            loc: data.location
        });
    }

    render() {
        return(
            <>
                <h1>Hello</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.loc}</h1>
            </>
        );
    }
}

export default Profile;