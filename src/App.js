import React from 'react';
import './App.css';
import ToastList from './components/ToastList';
import Toast from './components/toast/Toast';

const App = () => {
  return (
    <div className="app">
      <Toast/>
      <ToastList  />
    </div>
  );
};

export default App;