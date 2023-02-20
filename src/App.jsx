import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
// components
import Gogumas from './components/Gogumas';
import Display from './components/Display';
import Likes from './components/Likes';
// import './App.css';

export default function App() {
    return (
        <Provider store={store}> 
        {/* 생성한 store를 사용하기 위해 Provider componet로 감싸준다 */}
            <div className='app'>
                <Gogumas />
                <Display />
                <Likes />
            </div>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('app')); 

