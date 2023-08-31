export function search() {
    let searchLink = document.querySelectorAll('.search-link');

    searchLink.forEach(function (link) {
        let searchName = link.target.getAttribute('search');
        console.log(searchName);
        link.addEventListener('click', function (e) {
            
        });
    });
}