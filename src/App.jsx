import './App.css';
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Ticket from './components/Ticket.jsx';
import Footer from './components/Footer.jsx';
import { FaCheck } from "react-icons/fa";


function App() {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  // Fetch tickets
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleTicketClick = (ticket) => {
    // Only add if not already in taskStatus
    if (!taskStatus.find(t => t.id === ticket.id)) {
      setTaskStatus(prev => [...prev, ticket]);
      setInProgressCount(prev => prev + 1);
      toast.success(`"In-Progress`, { position: "top-right", duration: 3000 });
    }
  };

  const handleComplete = (ticket) => {
    setTaskStatus(prev => prev.filter(t => t.id !== ticket.id));
    setResolvedTasks(prev => [...prev, ticket]);
    setInProgressCount(prev => prev - 1);
    setResolvedCount(prev => prev + 1);
    toast.success(`Completed`, { position: "top-right", duration: 3000 });
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className='bg-[#eeeeef]'>

        {/* Cards */}
        <Card inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

        {/* Tickets & Task Status Section */}
        <div className="grid md:grid-cols-3 gap-8 container mx-auto px-8 py-12">

          {/* Customer Tickets */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-8">Customer Support Tickets</h1>
            <Ticket tickets={tickets} onTicketClick={handleTicketClick} />
          </div>

          {/* Task Status & Resolved */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h1 className="text-2xl font-bold mb-4">Task Status</h1>
            {taskStatus.length === 0 && <p>Select a ticket to add to Task Status</p>}
            {taskStatus.map(ticket => (
              <div key={ticket.id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                <p className="font-semibold">{ticket.title}</p>
                <button
                  className="bg-green-500 text-white px-3 py-1 mt-2 rounded w-full"
                  onClick={() => handleComplete(ticket)}
                >
                  Complete
                </button>
              </div>
            ))}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h1 className="text-2xl font-bold mb-4">Resolved Task</h1>
            {resolvedTasks.length === 0 && <p>No resolved tasks yet.</p>}
            {resolvedTasks.map(ticket => (
                <div key={ticket.id} className="bg-green-50 p-4 rounded-lg shadow-md mb-4">
                  <p className="font-semibold">{ticket.title}</p>
                <p className="text-green-600 pt-2 flex items-center"><FaCheck className='mr-2' /> Completed</p>
                </div>
            ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
