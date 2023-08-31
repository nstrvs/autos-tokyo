export function search() {
    let searchLink = document.querySelectorAll('.search-link');

    searchLink.forEach(function (link) {
        let getClass = link.getAttribute('class');
        console.log(getClass);
        link.addEventListener('click', function (e) {
            let searchName = e.target.getAttribute('search');
            console.log(searchName);
        });
    });
}