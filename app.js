Cookies.set(`username`, `Iambestuser`);
let click_event = document.getElementById(`clickhere`);



click_event.addEventListener(`click`, button_clicks);

function button_clicks (detail) {
    Cookies.set(`button_clicked`, `yes`);
}
