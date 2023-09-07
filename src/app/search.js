import $ from 'jquery';

export function search() {
    let searchLink = document.querySelectorAll('.search-link');

    searchLink.forEach(function (link) {

        link.addEventListener('click', function () {
            let searchName = link.getAttribute('search');
            link.setAttribute('href', `https://autostokyo.webflow.io/cars?search=${searchName}`);
        });
    });
}

export function filter() {
    $(document).ready(function() {
        $("#searchBar").on("input", function() {
            const searchQuery = $(this).val();
    
            // Update URL
            if (history.pushState) {
                const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?search=' + searchQuery;
                window.history.pushState({path:newurl},'',newurl);
            }
    
            // Filter collection list
            filterCollectionList(searchQuery);
        });
    });
    
    function filterCollectionList(query) {

        $(".collection-item").each(function() {
            const itemName = $(this).data("name").toLowerCase();
            if (itemName.includes(query.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
                document.querySelector('#searchEmpty').style.display = 'flex';
            }
        });
    }
}