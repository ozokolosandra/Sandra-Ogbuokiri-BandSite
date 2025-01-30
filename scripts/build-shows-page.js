const shows = [
    { Date: 'Mon Sept 09 2024', Venue: 'Ronald Lane', Location: 'San Francisco, CA' },
    { Date: 'Tue Sept 17 2024', Venue: 'Pier 3 East', Location: 'San Francisco, CA' },
    { Date: 'Sat Oct 12 2024', Venue: 'View Lounge', Location: 'San Francisco, CA' },
    { Date: 'Sat Nov 16 2024', Venue: 'Hyatt Agency', Location: 'San Francisco, CA' },
    { Date: 'Fri Nov 29 2024', Venue: 'Moscow Center', Location: 'San Francisco, CA' },
    { Date: 'Sat Nov 16 2024', Venue: 'Hyatt Agency', Location: 'San Francisco, CA' },
    { Date: 'Wed Dec 18 2024', Venue: 'Press Club', Location: 'San Francisco, CA' }
  ];
  
  const list = document.getElementById('show__list');
  
  // Function to handle the click (for selected state)
  function selectShow(showDiv) {
    const allShows = document.querySelectorAll('.show-item');
    allShows.forEach(item => item.classList.remove('selected'));  // Remove previous selections
    showDiv.classList.add('selected');  // Add selected class to clicked item
  }
  
  // Using a for loop instead of forEach
  for (let i = 0; i < shows.length; i++) {
    const showItem = shows[i];
    const showDiv = document.createElement('div');
    showDiv.classList.add('show-item');
  
    // Create and append individual elements for Date, Venue, and Location
    const dateDiv = document.createElement('div');
    dateDiv.textContent = showItem.Date;
    dateDiv.classList.add('show-date');
    
    const venueDiv = document.createElement('div');
    venueDiv.textContent = showItem.Venue;
    venueDiv.classList.add('show-venue');
    
    const locationDiv = document.createElement('div');
    locationDiv.textContent = showItem.Location;
    locationDiv.classList.add('show-location');
  
    // Append Date, Venue, and Location as separate lines
    showDiv.append(dateDiv, venueDiv, locationDiv);
  
    // Create and append "Buy Ticket" section
    const buyTicketLink = document.createElement('a');
    buyTicketLink.classList.add('buy-ticket-link');
    buyTicketLink.href = "#";
    buyTicketLink.textContent = "Buy Ticket";
    
    const buyTicketRow = document.createElement('div');
    buyTicketRow.classList.add('show-row');
    buyTicketRow.appendChild(buyTicketLink);
    
    showDiv.appendChild(buyTicketRow);
  
    // Add hover and click event listeners
    showDiv.addEventListener('mouseenter', () => showDiv.classList.add('hover'));  // Hover state
    showDiv.addEventListener('mouseleave', () => showDiv.classList.remove('hover'));  // Remove hover state
    showDiv.addEventListener('click', () => selectShow(showDiv));  // Click state (selected)
  
    // Append the whole showDiv to the list
    list.appendChild(showDiv);
  }
  