const reviews = document.querySelector("#reviews-container");

//Telling the page to load DOM content first, then JS
document.addEventListener("DOMContentLoaded", function() {
    //Nav menu
    const menus = document.querySelectorAll(".sidenav");
    M.Sidenav.init(menus, {edge: "left"});
    //Add review
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, {edge: "right"});
});

const renderReview = (data, id) => {
    const html = `
    <div class="card-panel white row" data-id ="${id}">
        <div class="review-detail">
            <img src="/img/avatar1.jpg" class="responsive-img materialboxed" alt="">
            <div class="review-text">
                <div class="review-title">${data.title}</div>
                <div class="review-description">${data.description}</div>
            </div>
        </div>
    </div>`;

    reviews.innerHTML += html;
};