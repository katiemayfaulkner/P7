/*  LOGIN MODAL  */
let authModal = document.getElementById('authModal');

// hide login modal (temporary)
let hideLogin = document.getElementById('hideAuth');

hideLogin.onclick = function() {  
    authModal.style.visibility = "hidden";
};

/*  COMMENTS MODAL  */
let commentsModal = document.getElementById('commentsModal');

// show comments modal
let showComments = document.getElementById('commentsBtn');

showComments.onclick = function() {  
    commentsModal.style.visibility = "visible";
};

// hide comments modal
let hideComments = document.getElementById('closeComments');

hideComments.onclick = function() {  
    commentsModal.style.visibility = "hidden";
}; 

/*  CREATE POST MODAL  */
let postModal = document.getElementById('postModal');

// show post modal
let showPost = document.getElementById('showPost')

showPost.onclick = function() {  
    postModal.style.visibility = "visible";
};

// hide post modal
let hidePost = document.getElementById('closePost');

hidePost.onclick = function() {  
    postModal.style.visibility = "hidden";
}; 

/*  USER MODAL  */
let userModal = document.getElementById('userModal');
 
// show user modal
let showUser = document.getElementById('showUser')

showUser.onclick = function() {  
    userModal.style.visibility = "visible";
};

// hide user modal
let closeUser = document.getElementById('closeUser')

closeUser.onclick = function() {  
    userModal.style.visibility = "hidden";
};