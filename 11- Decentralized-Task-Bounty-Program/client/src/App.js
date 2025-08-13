import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskFrom'; // Note: using existing filename TaskFrom.js
import UserProfile from './components/UserProfile';
import NetworkStatus from './components/NetworkStatus';

function App() {
  return (
    <Router>
      <div className="app">
        <NetworkStatus />
        <header className="app-header">
          <h1>🎯 Decentralized Task Bounty Platform</h1>
          <nav>
            <a href="/">Tasks</a> | 
            <a href="/create-task"> Create Task</a> | 
            <a href="/profile"> Profile</a>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;