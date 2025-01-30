
const comments = [
    { 
        name: "Victor Pinto", 
        timestamp: new Date(),
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." 
    },
    {  
         name: "Christina Cabrera", 
        timestamp: new Date(), 
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." 
    },
    { 
        name: "Isaac Tadesse",
        timestamp: new Date(), 
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." 
    }
];


function displaySingleComment(comment) {
    const commentList = document.getElementById('comment-list');

    const commentEl = document.createElement('div');
    commentEl.classList.add("comment");

    const nameOfCommenter = document.createElement('div');
    nameOfCommenter.classList.add('name');
    nameOfCommenter.textContent = comment.name;

    const timestampEl = document.createElement("div");
    timestampEl.classList.add("comment__timestamp");
    timestampEl.textContent = new Date(comment.timestamp).toLocaleString();

    const textEl = document.createElement("div");
    textEl.classList.add("comment__text");
    textEl.textContent = comment.text;

    commentEl.appendChild(nameOfCommenter);
    commentEl.appendChild(timestampEl);
    commentEl.appendChild(textEl);

    commentList.appendChild(commentEl);
}


function displayAllComments() {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = ''; 

    comments.forEach(displaySingleComment); 
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment__text').value;

    
    const newComment = {
        name: name,
        timestamp: new Date(),
        text: commentText
    };

    comments.unshift(newComment);

    
    document.getElementById('name').value = '';
    document.getElementById('comment__text').value = '';

    
    displayAllComments();
});

window.onload = displayAllComments;
