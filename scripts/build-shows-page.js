const shows=[
    {Date :'Mon Sept 09 2024',Venue:'Ronald Lane ',Location:'San Francisco,CA'},
    {Date :'Tue Sept 17 2024',Venue:'Pier 3 East ',Location:'San Francisco,CA'},
    {Date :'Sat Oct 12 2024', Venue: 'View Lounge ',Location:'San Francisco,CA'},
    {Date :'Sat Nov 16 2024 ',Venue:'Hyatt Agency ',Location:'San Francisco,CA'},
    {Date :'Fri Nov 29 2024 ',Venue: 'Moscow Center',Location:'San Francisco,CA'},
    {Date :'Sat Nov 16 2024 ',Venue:'Hyatt Agency ',Location:'San Francisco,CA'},
    {Date :'Wed Dec 18 2024 ',Venue:'Press Club'   ,Location:'San Francisco,CA'}, 
];
    console.log(shows)
    
    const list=document.getElementById('show__list')
    

    for(let i=0;i<shows.length;i++){
        const showItem=shows[i];
        const showDiv=document.createElement('div');
        showDiv.classList.add('show-item');
        
        const dateDiv = document.createElement('div');
        dateDiv.textContent = showItem.Date;
        dateDiv.classList.add('show-date')

        const venueDiv = document.createElement('div');
        venueDiv.textContent = showItem.Venue;
        venueDiv.classList.add('show-venue');

        const locationDiv = document.createElement('div');
        locationDiv.textContent = showItem.Location;
        locationDiv.classList.add('show-location');
      
        showDiv.appendChild(dateDiv);
        showDiv.appendChild(venueDiv);
        showDiv.appendChild(locationDiv);
        
        // showDiv.textContent=showItem.Date  + showItem.Venue + showItem.Location;
        list.appendChild(showDiv);

        console.log(showDiv)

        const buyTicketRow = document.createElement('div');
        buyTicketRow.classList.add('show-row');
        const buyTicketLink = document.createElement('a');
        buyTicketLink.classList.add('buy-ticket-link');
        buyTicketLink.href = "#";  // Link placeholder
        buyTicketLink.textContent = "Buy Ticket";
        buyTicketRow.appendChild(buyTicketLink);
        showDiv.appendChild(buyTicketRow);

    }
   