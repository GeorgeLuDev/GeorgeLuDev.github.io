$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Fullstack Engineer", "AI/ML Engineer", "Data Scientist"],
        typeSpeed: 80,
        backSpeed: 20,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Fullstack Engineer", "AI/ML Engineer", "Data Scientist"],
        typeSpeed: 80,
        backSpeed: 20,
        loop: true
    });
});

var descriptionTextArray = ["Dexter Intelligent Desktop","Definitely Not Trello","Age, Gender, and Ethnicity","Credit Card Fraud Detection"];
var techUsedTextArray = [
                        [["Frontend","HTML, CSS, Javascript, Electron"],["Backend","Python"],["AI Model","Pytorch"]],
                        [["Frontend","HTML, CSS, Javascript, React, Bootstrap, Jquery"],["Backend","NodeJS, Express"],["Database","MongoDB"],["Web Server","Nginx"],["Hosting","Amazon Web Services"]],
                        [["AI Model","Pytorch"]],
                        [["Data Analysis","Python"],["Machine Learning","Scikit-Learn"],["Data Visualization","Matplotlib"]]
                        ];

var imageFolderPath = ["dexter","dnt","age","fraud"];
var imageFolderLength = [4,3,4,5];
var activeProject;
var activeImageIndex;
var gallary;

// Open the Modal
Array.from(document.getElementsByClassName("projects")[0].getElementsByClassName("text-over-image")).forEach((item,index) => {
    item.addEventListener('click', event =>{
        activeProject = index;
        activeImageIndex = 0;
        document.getElementById("techList").innerHTML = "";
        // document.getElementById("gallaryImageContainer").innerHTML = "";
        // for (var i = 0; i<imageFolderLength[index];i++){
        //     // console.log(index,i);
        //     document.getElementById("gallaryImageContainer").innerHTML += '<img src="'+ "images/project/" + imageFolderPath[index] + "/" + i +".jpg" +'" alt="" class="hidden">';
        //     // console.log('<img src="'+ "images/project/" + imageFolderPath[index] + "/" + i +".jpg" +'" alt="">');
        // }
        for (var i = 0; i<techUsedTextArray[index].length;i++){
            document.getElementById("techList").innerHTML += '<div class="row"><div class="category-name">' + techUsedTextArray[index][i][0] +':</div><div class="category-list">' + techUsedTextArray[index][i][1]+'</div></div>'
        }
        document.getElementById("descriptionText").innerText = descriptionTextArray[index];
        document.getElementById("myModal").style.display = "block";
        // gallary = document.getElementsByClassName("hidden");
        // gallary[0].classList = "active";
        
    })
});

[document.getElementById("myModal") , document.getElementById("closeIcon")].forEach(item => {
    item.addEventListener('click', event =>{
        if (event.target.id == "myModal" || event.target.id == "closeIcon"){
            document.getElementById("myModal").style.display = "none";
        }
    })
});

document.getElementsByClassName("prev")[0].addEventListener('click', event =>{
    activeImageIndex--;
    if (activeImageIndex < 0){
        activeImageIndex = imageFolderLength[activeProject] - 1;
    }
    document.getElementById("gallaryImage").src= "images/project/" + imageFolderPath[activeProject] + "/" + activeImageIndex +".jpg";
    console.log(activeImageIndex);
})
document.getElementsByClassName("next")[0].addEventListener('click', event =>{
    activeImageIndex++;
    if (activeImageIndex >= imageFolderLength[activeProject]){
        activeImageIndex = 0;
    }
    document.getElementById("gallaryImage").src= "images/project/" + imageFolderPath[activeProject] + "/" + activeImageIndex.toString() +".jpg";
    console.log(activeImageIndex);
})



// function plusSlides(index){
//     document.getElementById("gallaryImage").src="images/banner.jpg"
// }

// .forEach(item => {
//     item.addEventListener('click', event =>{
//         document.getElementById("myModal").style.display = "none";
//     })
// });
// Close the Modal
// function closeModal() {
//     var id = window.event.target.id;
//     if (id == "myModal" || id == "closeIcon"){
//         document.getElementById("myModal").style.display = "none";
//     }
// }

// $(document).click(function(event) {
//     console.log(event.target)
// });