import React from 'react';

// const Welcome = ({ name }) => {
//     return (
//         <h1>Hola {name}</h1>
//     )
// }

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hola {this.props.name}</h1>
        )
    }
}

export default Welcome;