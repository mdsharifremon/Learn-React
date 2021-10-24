import React, { Component } from 'react';
import Profile from './profile';
import Skills from './profile/skills';


class App extends Component {
    render() {
        return (
					<div id="App" className="App">
						<Profile />
						<div style={{ marginBottom: "20px", marginTop: "20px" }}>
							<h2>New Programmers</h2>

							<div style={{ marginTop: "30px" }}>
								<h4>Mr. Remon</h4>
								<Skills />
							</div>

							<div style={{ marginTop: "30px" }}>
								<h4>Mr. Abrar</h4>
								<Skills />
							</div>
						</div>
					</div>
				);
    }
}

export default App;
