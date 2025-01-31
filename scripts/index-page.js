

const comments = [
    { 
        name: "Victor Pinto", 
        avatar: '', 
        timestamp: '11/02/2023',
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." 
    },
    {  
        name: "Christina Cabrera", 
        avatar: '', 
        timestamp: '10/28/2023', 
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." 
    },
    { 
        name: "Isaac Tadesse",
        avatar: '', 
        timestamp: '10/20/2023', 
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." 
    }
];

const commentList=document.getElementById('list');
comments.forEach(displayAllComments);

function displayAllComments(comment){
    const commentEl=createDiv('comment')

    const commentInfoEl=createDiv('comment__info');
    commentEl.append(commentInfoEl);

    const avatarEl=comment.avatar !=="" ? createAvatar("comment__image", comment.avatar, comment.name):createDiv("comment__no-avatar");
    commentEl.append(avatarEl);

    const nameEl=createDiv("comment__name", comment.name);
    commentInfoEl.append(nameEl);

    const formattedTimestamp = formatTimestamp(comment.timestamp);
    const timestampEl = createDiv("comment__time", formattedTimestamp);
    commentInfoEl.append(timestampEl);

    const textEl=createDiv("comment__text", comment.text)
    commentInfoEl.append(textEl);


    commentList.prepend(commentEl);

}

function formatTimestamp(timestamp) {
    if (typeof timestamp === "string") {
        return timestamp;
    }
    // this below will format the date as month/day/year
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return timestamp.toLocaleDateString('en-US', options);
}

function createDiv(className, text) {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = text;
    return div;
  }

  function createAvatar(className, src, alt) {
    const img = document.createElement("img");
    img.className = className;
    img.src = src;
    img.alt = alt;
    return img;
  }
const form= document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const comment = {
        name: e.target.name.value,
        avatar: '',
        timestamp: new Date(),
        text: e.target.comment.value,
      };
comments.push(comment);
commentList.replaceChildren();
comments.forEach(displayAllComments);
form.reset();
    });