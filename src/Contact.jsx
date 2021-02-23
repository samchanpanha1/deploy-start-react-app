import React from 'react';

const divStyle = {
    color:'red'
};

class Contact extends React.Component {

    render() {
        return (
          <div className="App">
            <h1>HELLO Contact</h1>
            <div style={divStyle}>
               <h2>Contact Page</h2>
               <main>
                   <p>This section contains information Contact...</p>
               </main>
           </div>
          </div>
        )
    }
}



export default Contact;
