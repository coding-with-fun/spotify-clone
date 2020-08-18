import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataProvider } from './contexts/DataContext';
import rootReducer, { initialState } from './reducers/rootReducer';

ReactDOM.render(
	<React.StrictMode>
		<DataProvider initialState={initialState} reducer={rootReducer}>
			<App />
		</DataProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
