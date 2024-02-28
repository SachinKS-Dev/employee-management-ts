// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import EmployeeList from './EmployeeList';
import MyForm from './MyForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/form" element={<MyForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
