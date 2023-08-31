export function search() {
    let searchLink = document.querySelectorAll('.search-link');

    searchLink.forEach(function (link) {
        let searchName = link.getAttribute('search');
        console.log(searchName);
    });
}