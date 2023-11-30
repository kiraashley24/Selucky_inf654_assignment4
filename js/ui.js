// setup materialize components
document.addEventListener("DOMContentLoaded", function(){
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);

    var items = document.querySelectorAll(".collapsible");
    M.Collapsible.init(items);
});

const reviews = document.querySelector("#reviews-container");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
    if(user) {
        //toggle UI elements
        loggedOutLinks.forEach((item) => (item.style.display = "none"));
        loggedInLinks.forEach((item) => (item.style.display = "block"));
    }else {
        loggedInLinks.forEach((item) => (item.style.display = "none"));
        loggedOutLinks.forEach((item) => (item.style.display = "block"));
        
    }
}

//Telling the page to load DOM content first, then JS
document.addEventListener("DOMContentLoaded", function() {
    //Nav menu
    const menus = document.querySelectorAll(".sidenav");
    M.Sidenav.init(menus, {edge: "left"});
    //Add review
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, {edge: "right"});
});

//Populate data when user is logged in
const setupReviews = (data) => {
    let html = "";
    data.forEach((doc) => {
        const review = doc.data();
        const li=`
        <div class="card-panel white row" data-id ="${review.id}">
            <div class="review-detail">
                <img src="/img/avatar1.jpg" class="responsive-img materialboxed" alt="">
                <div class="review-text">
                    <div class="review-title">${review.title}</div>
                    <div class="review-description">${review.description}</div>
                </div>
                <div class="review-delete">
                <i class="material-icons hoverable" data-id ="${review.id}">delete_outline</i>
                </div>
            </div>
        </div>`;
        html += li;
    });

    reviews.innerHTML = html;
    
};

const renderReview = (data, id) => {
    const html = `
    <div class="card-panel white row" data-id ="${id}">
        <div class="review-detail">
            <img src="/img/avatar1.jpg" class="responsive-img materialboxed" alt="">
            <div class="review-text">
                <div class="review-title">${data.title}</div>
                <div class="review-description">${data.description}</div>
            </div>
            <div class="review-delete">
                <i class="material-icons hoverable" data-id ="${id}">delete_outline</i>
            </div>
        </div>
    </div>`;

    reviews.innerHTML += html;
};

  //remove review from DOM
  const removeReview = (id) => {
    const review = document.querySelector(`.review[data-id ='${id}']`);
    // console.log(review);
    review.remove();
  };


