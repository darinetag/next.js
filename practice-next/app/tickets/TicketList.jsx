//fetch data and revalidate it 
async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets",
  {
    next: {
      revalidate: 0
    }
  })

  return res.json();
}
async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="m-8 bg-slate-800">
          <h3 className=" m-3 font-bold text-white">{ticket.title}</h3>
          <p className="text-white m-3">{ticket.body.slice(0, 200)}...</p>
          <div className="bg-green-400 w-32 text-center text-white">
            {ticket.priority}priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && <p>There are no tickets</p>}
    </>
  );
}

export default TicketList;
