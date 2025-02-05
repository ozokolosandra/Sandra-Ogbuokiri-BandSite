

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
            avatar: '',
        });
        console.log(response.data)
        displayAllComments();
        // commentList.replaceChildren();
    }
    catch (e) {
        console.log(e);
    }
});


async function displayAllComments() {
    try{
        const response = await axios.get(`${baseURL}/comments?api_key=${apiKey}`);
        const comments = response.data;
        console.log(comments);
        console.log(comments.length);
        commentList.replaceChildren();
        comments.forEach(displayComment);

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

    //const formattedTimestamp = formatTi   mestamp(comment.timestamp);
    const timestampEl = createDiv("comment__time", comment.timestamp);
    commentInfoEl.append(timestampEl);

    const textEl=createDiv("comment__text", comment.comment)
    commentInfoEl.append(textEl);


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
  displayAllComments();
