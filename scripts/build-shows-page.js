const shows = [
    { Date: 'Mon Sept 09 2024', Venue: 'Ronald Lane', Location: 'San Francisco, CA' },
    { Date: 'Tue Sept 17 2024', Venue: 'Pier 3 East', Location: 'San Francisco, CA' },
    { Date: 'Sat Oct 12 2024', Venue: 'View Lounge', Location: 'San Francisco, CA' },
    { Date: 'Sat Nov 16 2024', Venue: 'Hyatt Agency', Location: 'San Francisco, CA' },
    { Date: 'Fri Nov 29 2024', Venue: 'Moscow Center', Location: 'San Francisco, CA' },
    { Date: 'Wed Dec 18 2024', Venue: 'Press Club', Location: 'San Francisco, CA' }
  ];

  
  const list = document.getElementById('show__list');

  
  // Function to handle the click (for selected state)
  let lastClickedShowItem=null;
  function selectShow(showDiv) {
    if(lastClickedShowItem){
      lastClickedShowItem.classList.remove()
    }
      else {
        lastClickedShowItem=showDiv;
      lastClickedShowItem.classList.add
      }
    // const allShows = document.querySelectorAll('.show-item');
    // allShows.forEach(item => item.classList.remove('selected'));  // Remove previous selections
    // showDiv.classList.add('selected');  // Add selected class to clicked item
  }
  // add more functions

  // create h3 headings for date, venue and location, have the classs name, show label
  // show__label--tablet , display none intially , by making it display bock at tablet breakpoint
  
function renderShows(){  const topLabel = document.createElement('div');
  topLabel.classList.add("show__top-label");
  const dateEL = document.createElement('h3');
    dateEL.classList.add("show__label");
    dateEL.innerText ='DATE';

    const venueEl = document.createElement('h3');
    venueEl.classList.add("show__label");
    venueEl.innerText ='VENUE';

    const locationEl =document.createElement('h3');    
    locationEl.classList.add("show__label");
    locationEl.innerText='LOCATION';
    
    topLabel.append(dateEL, venueEl, locationEl);


  for (let i = 0; i < shows.length; i++) {
    const showItem = shows[i];
    const showDiv = document.createElement('div');
    showDiv.classList.add('show-item');
  
    // Create and append individual elements for Date, Venue, and Location
    // add a class anme called show label, in css, make the display none for tablet
     
    // change to p tags instead of divs, use h3 for date, venue and location
   
    // pair div for date, venus and location

    createPairCell("DATE", showItem.Date, showDiv);
    createPairCell("VENUE", showItem.Venue, showDiv);
    createPairCell("LOCATION", showItem.Location, showDiv);

    // const pairDateDiv = document.createElement('div');
    // pairDiv.classList.add("show__pair-info");

    // const dateEL = document.createElement('h3');
    // dateEL.classList.add("show__label");
    // dateEL.innerText ='DATE';

    // const TextEl = document.createElement('p');
    // dateDiv.textContent = showItem.Date;
    // dateDiv.classList.add('show-date');
    // pairDateDiv.append(dateEL, dateTextEl);

    // const venueDiv = document.createElement('p');
    // venueDiv.textContent = showItem.Venue;
    // venueDiv.classList.add('show-venue');
    
    // const locationDiv = document.createElement('p');
    // locationDiv.textContent = showItem.Location;
    // locationDiv.classList.add('show-location');
  
    // Append Date, Venue, and Location as separate lines
    
    //showDiv.append(dateDiv, venueDiv, locationDiv);
  
    // Create and append "Buy Ticket" section
    const buyTicketLink = document.createElement('a');
    buyTicketLink.classList.add('buy-ticket-link');
    buyTicketLink.href = "#";
    buyTicketLink.textContent = "Buy Ticket";
    
    const buyTicketRow = document.createElement('div');
    buyTicketRow.classList.add('show-row');
    buyTicketRow.appendChild(buyTicketLink);
    
    showDiv.appendChild(buyTicketRow);

    // remove the hover here and have them in css
    showDiv.addEventListener('mouseenter', () => showDiv.classList.add('hover'));  // Hover state
    showDiv.addEventListener('mouseleave', () => showDiv.classList.remove('hover'));  // Remove hover state
    showDiv.addEventListener('click', () => selectShow(showDiv));  // Click state (selected)
  
    list.appendChild(showDiv);

  }
}

  renderShows();
 
  function createPairCell(label, text, parentEl){
    const pairDiv = document.createElement('div');
    pairDiv.classList.add("show__pair-info");

    const labelEl = document.createElement('h3');
    labelEl.classList.add("show__label");
    labelEl.innerText =label;

    const textEl = document.createElement('p');
    textEl.textContent = text;
    textEl.classList.add('show-date');

    pairDiv.append(labelEl, textEl);

    parentEl.appendChild(pairDiv);
  }