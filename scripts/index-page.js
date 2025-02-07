

let apiKey = "02dac415-1b1d-4c56-a21b-0ab8fd60ac9b";
let baseURL='https://unit-2-project-api-25c1595833b2.herokuapp.com'

 const commentList=document.getElementById('list');

const formEL = document.getElementById('form');


formEL.addEventListener("submit" , async function newComment(e){
    e.preventDefault();

    try{
        const response=await axios.post(`${baseURL}/comments?api_key=${apiKey}`,{
            name:e.target.name.value,
            comment:e.target.comment.value,
            //likes:e.target.likes.value,
            
            
        });
        console.log("hello" ,e.target);
        console.log(response.data)
        displayAllComments();
        formEL.reset()
        // commentList.replaceChildren();
    }
    catch (e) {
        console.log(e);
    }
});


async function displayAllComments(createLikes) {
    try{
        const response = await axios.get(`${baseURL}/comments?api_key=${apiKey}`);
        const comments = response.data; 
        const id = comments.id;
        comments.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        commentList.replaceChildren();
        comments.forEach(displayComment);
        console.log(comments);


    }
    catch (e) {
        console.log(e);
    }
}

const emptyAvatar ='';



function displayComment(comment){
    const commentEl=createDiv('comment')

    const commentInfoEl=createDiv('comment__info');
    commentEl.append(commentInfoEl);

    
    const avatar=comment.avatar !=="" ? comment.avatar: emptyAvatar
    const avatarEl=createAvatar('comment__image', emptyAvatar, comment.name);
    commentEl.append(avatarEl);

    const nameEl=createDiv("comment__name", comment.name);
    commentInfoEl.append(nameEl);

    const formattedTimestamp = formatTimestamp(comment.timestamp);
    const timestampEl = createDiv("comment__time", formattedTimestamp);
    commentInfoEl.append(timestampEl);

    const textEl=createDiv("comment__text", comment.comment)
    commentInfoEl.append(textEl);

    const likeEl=createLikes("comment__likes",comment.likes, comment.id);
    commentInfoEl.append(likeEl);


    commentList.prepend(commentEl);

}


function createDiv(className, text) {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = text;
    return div;
  }

  function createAvatar(className) {
    const img = document.createElement("img");
    img.className = className;
    return img;
  }

  function createLikes(className, likes, id) {
    const button = document.createElement("button");
    button.className = className;

    const likeIcon = document.createElement("img");
    likeIcon.src = "../assets/Icons/SVG/icon-like.svg";  
    likeIcon.alt = "Like Icon";  
    likeIcon.className = "like-icon"; 
    button.appendChild(likeIcon);
    const likesText = document.createElement("span"); 
    likesText.textContent = ` ${likes}`;
    button.appendChild(likesText);

    //button.innerHTML = ` ${likes}`; 

    button.addEventListener("click", async function() {
        try {
            likes++;
            button.innerHTML = `${likes}`;
            const status = await axios.put(`${baseURL}/comments/${id}/like?api_key=${apiKey}`, {
                likes
            });

            if (status.status !== 200) {

                console.error("Error updating likes on the backend");
            }
        } catch (e) {
            console.error("Error updating likes:", e);
        }
    });

    return button;
}



  displayAllComments();

  function formatTimestamp(timestamp) {
    const now = new Date();
    const timeDifference = now - new Date(parseInt(timestamp)); 
    const seconds = Math.floor(timeDifference / 1000);  
    const minutes = Math.floor(seconds / 60);  
    const hours = Math.floor(minutes / 60);  
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7); 
    const months = Math.floor(days / 30);
    const years = Math.floor(days/365)  ;

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 7) {
        return `${days} days ago`;
    } else if (weeks < 4) {
        return `${weeks} weeks ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    
    }
}
 
