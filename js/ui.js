const reviews = document.querySelector(".reviews");

//Telling the page to load DOM content first, then JS
document.addEventListener("DOMContentLoaded", function(){
    //Nav menu
    const menus = document.querySelector(".sidenav");
    M.Sidenav.init(menus, {edge: "left"});
    //Add review
    const forms = document.querySelector(".side-form");
    M.Sidenav.init(forms, {edge: "right"})
});
?*
const renderReview = (data, id) => {
    const html = `
    <div class="card-panel white row">
            <div class="review-detail">
                <img src="/img/avatar1.jpg" class="responsive-img materialboxed" alt="">
                <div class="review-text">
                    <div class="review-title">${data.title}</div>
                    <div class="review-description">${data.description}</div>
                </div>
            </div>
        </div>`;

    reviews.innerHTML + html
};