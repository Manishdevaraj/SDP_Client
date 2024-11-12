

function EventsPage() {
  const eventsData = [
    {
      id: 1,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 4,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 5,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 6,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 7,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 8,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 9,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 10,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 11,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 12,
      brochure: '',
      dateTime: '2024-07-25T10:00:00',
      venue: 'Coimbatore, India',
      description: 'This is a sample event description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // ... other events
  ];
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Start  Volunteering Now!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {eventsData.slice(0, 8).map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col h-full">
              <img src={''} alt="Event Placeholder" className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="flex-grow p-4">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-700 mb-2">{new Date(event.dateTime).toLocaleString()}</p>
                <p className="text-gray-700">{event.venue}</p>
                <p className="text-gray-700">{event.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>  
  );
}

export default EventsPage;