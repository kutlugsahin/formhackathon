import React, {createClass, PropTypes, Component} from 'react'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Form from './components/Form';

var cls = {
	backgroundColor: '#ccc',
	height: '30px',
	fontSize: '28px'
}

import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Navbar/>
				<div className="container-fluid">
					<Sidebar/>
					<Form/>
				</div>
			</div>
		)
	}
}

export default App;
