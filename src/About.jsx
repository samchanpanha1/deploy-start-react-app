import React from 'react';

const divStyle = {
    color:'red'
};

class About extends React.Component {

    render() {
        return (
          <div className="App">
            <h1>HELLO About</h1>
            <div style={divStyle}>
               <h2>About Page</h2>
               <main>
                   <p>This section contains information about...</p>
               </main>
           </div>
          </div>
        )
    }
}



export default About;
