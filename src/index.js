import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer/index';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';
import routes from './routes';

const store = createStoreWithMdware(reducers);
ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes}>
			<App/>
		</Router>
	</Provider>
	,document.getElementById('root'));
registerServiceWorker();
