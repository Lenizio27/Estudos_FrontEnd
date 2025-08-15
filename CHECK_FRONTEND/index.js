let btMobileHeader = document.getElementById("btMobileHeader");
let navMobile = document.getElementById("navMobile");

btMobileHeader.addEventListener("click", () => {
    navMobile.classList.toggle('is-open');
    btMobileHeader.classList.toggle('bt-fixed')
});

