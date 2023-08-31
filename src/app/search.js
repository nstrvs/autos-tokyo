export function search() {
    let searchLink = document.querySelectorAll('.search-link');

    searchLink.forEach(function (link) {

        link.addEventListener('click', function () {
            let searchName = link.getAttribute('search');
            console.log(searchName);
        });
    });
}