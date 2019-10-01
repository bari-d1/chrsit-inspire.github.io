var firstPost= document.querySelector('.firstPost');
var secondPost = document.querySelector('.secondPost');


secondPost.style.display = 'none';
function readMore(){
    firstPost.style.display = 'none';
    secondPost.style.display = 'block';

}
function goBack(){
    location.replace("christ.html");    
}