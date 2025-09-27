import React from "react";
import { FaCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Ticket = ({ tickets, onTicketClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {tickets.map(ticket => (
        <div
          key={ticket.id}
          onClick={() => onTicketClick(ticket)}
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold mb-2">{ticket.title}</h2>
            <button className={`flex items-center p-2 rounded-3xl min-w-22 px-3 justify-between ${
              ticket.status === 'Open' ? 'bg-green-300 text-green-800' : 
              ticket.status === 'In-Progress' ? 'bg-yellow-300 text-yellow-800' : 
              'bg-gray-300 text-gray-800'
            }`}>

              <FaCircle className={`mr-1 ${
                ticket.status === 'Open' ? 'text-green-700' : 
                ticket.status === 'In-Progress' ? 'text-yellow-600' : 
                'text-gray-800'
              }`} />
              {ticket.status}
            </button>
          </div>

          <p className="text-gray-600 mb-4">{ticket.description}</p>

          <div className="flex justify-between items-center">
            <div className='text-sm flex gap-2'>
              <p className='text-gray-600'>{ticket.id}</p>
              <p className={`${
                ticket.priority === 'HIGH PRIORITY' ? 'text-[#F83044]' : 
                ticket.priority === 'MEDIUM PRIORITY' ? 'text-[#FEBB0C]' : 
                ticket.priority === 'LOW PRIORITY' ? 'text-[#02A53B]' : '' 
              }`}>{ticket.priority}</p>
            </div>
            
            <div className='text-sm flex gap-2 items-center'>
              <p className='text-gray-600'>{ticket.customer}</p>
              <p className='flex items-center text-gray-600'>
                <CiCalendar className='pr-1 h-8 w-6' />{ticket.createdAt}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
