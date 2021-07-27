import React from 'react';
import axios from 'axios'

// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
            .then((res) => { console.log(res) })
    }
    render() {
        return (
            <div>hello world</div>
        )
    }
}


export default App;
