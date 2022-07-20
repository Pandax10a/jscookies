Cookies.set(`username`, `Iambestuser`);
let click_event = document.getElementById(`clickhere`);



click_event.addEventListener(`click`, button_clicks);

function button_clicks (detail) {
    Cookies.set(`button_clicked`, `yes`);
}

let user_1 = Cookies.get(`button_clicked`);
if(user_1 !== undefined) {
    document.body.insertAdjacentHTML(`afterbegin`, `<h1> congratulation on baking a cookie</h1>`);
}
