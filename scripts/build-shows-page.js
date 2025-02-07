// const shows = [
//     { Date: 'Mon Sept 09 2024', Venue: 'Ronald Lane', Location: 'San Francisco, CA' },
//     { Date: 'Tue Sept 17 2024', Venue: 'Pier 3 East', Location: 'San Francisco, CA' },
//     { Date: 'Sat Oct 12 2024', Venue: 'View Lounge', Location: 'San Francisco, CA' },
//     { Date: 'Sat Nov 16 2024', Venue: 'Hyatt Agency', Location: 'San Francisco, CA' },
//     { Date: 'Fri Nov 29 2024', Venue: 'Moscow Center', Location: 'San Francisco, CA' },
//     { Date: 'Wed Dec 18 2024', Venue: 'Press Club', Location: 'San Francisco, CA' }
//   ];


  let apiKey = "02dac415-1b1d-4c56-a21b-0ab8fd60ac9b";
  let baseURL='https://unit-2-project-api-25c1595833b2.herokuapp.com'
  
  
  const list = document.getElementById('show__list'); 

  async function shows() {
    try{
        const response = await axios.get(`${baseURL}/showdates?api_key=${apiKey}`);
        const shows = response.data; 
        console.log(shows)
        renderShows(shows)

    }
    catch (e) {
        console.log(e);
    }
}
shows();
  
  
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
  
function renderShows(shows){  
  const topLabel = document.createElement('div');
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

    createPairCell("DATE", showItem.date, showDiv);
    createPairCell("VENUE", showItem.place, showDiv);
    createPairCell("LOCATION", showItem.location, showDiv);
  
    // Create and append "Buy Ticket" section
    const buyTicketLink = document.createElement('a');
    buyTicketLink.classList.add('buy-ticket-link');
    buyTicketLink.href = "#";
    buyTicketLink.textContent = "Buy Tickets";
    
    const buyTicketRow = document.createElement('div');
    buyTicketRow.classList.add('show-row');
    buyTicketRow.appendChild(buyTicketLink);
    
    showDiv.appendChild(buyTicketRow);

     // create an empty div in order to add the divider
     const showDivder = document.createElement('div');
     showDivder.classList.add('show-divider')
     showDiv.appendChild(showDivder);

    // remove the hover here and have them in css
    showDiv.addEventListener('mouseenter', () => showDiv.classList.add('hover'));  // Hover state
    showDiv.addEventListener('mouseleave', () => showDiv.classList.remove('hover'));  // Remove hover state
    showDiv.addEventListener('click', () => selectShow(showDiv));  // Click state (selected)
  
    list.appendChild(showDiv);

  }
}

  // renderShows();
 
  function createPairCell(label, text, parentEl){
    const pairDiv = document.createElement('div');
    pairDiv.classList.add("show__pair-info");

    const labelEl = document.createElement('h3');
    labelEl.classList.add("show__label");
    labelEl.innerText =label;

    const textEl = document.createElement('p');

    if(label==="DATE" && text){
      const dateObj = new Date(Number(text));
      const weekday = dateObj.toLocaleString('en-US', { weekday: 'short' });
      const month = dateObj.toLocaleString('en-US', { month: 'short' });
      const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
      const year = dateObj.getFullYear();
      text = `${weekday} ${month} ${day} ${year}`;
    }
    
    textEl.textContent = text;
    textEl.classList.add('show-date');

    pairDiv.append(labelEl, textEl);

    parentEl.appendChild(pairDiv);
  }