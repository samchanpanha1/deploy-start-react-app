import './App.css';
import React from 'react';
import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
              <h1>HELLO HOME</h1>
               <div className="media block-update-card">
                        <a className="" href="#">
                          <img className="media-object update-card-MDimentions" src="http://qz7fifi7.cdn.imgeng.in/upload/cars/20210125_150042_3260768.jpg?imgeng=/w_auto" />
                        </a>
                        <div className=" update-card-body">
                         <h4 className="">
                             <a href="#">TOYOTA VITZ 2008</a>
                             <a className="btn-button">QUOTATION</a>
                         </h4>
                        </div>
               </div>

            </div>

        );
    }

}

export default Home;
