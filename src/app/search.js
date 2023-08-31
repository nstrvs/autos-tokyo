export function search() {
    let searchLink = document.querySelectorAll('.search-link');

    searchLink.forEach(function (link) {
        console.log(link);
        link.addEventListener('click', function (e) {
            let searchName = e.target.getAttribute('search');
            console.log(searchName);
        });
    });
}