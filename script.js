document.querySelectorAll('.circle-container li').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        const highlightId = this.getAttribute('data-highlight');
        document.querySelectorAll(`.card .column-line[data-highlight="${highlightId}"]`).forEach(function(col) {
            col.classList.add('highlight');
        });
    });

    item.addEventListener('mouseout', function() {
        const highlightId = this.getAttribute('data-highlight');
        document.querySelectorAll(`.card .column-line[data-highlight="${highlightId}"]`).forEach(function(col) {
            col.classList.remove('highlight');
        });
    });
});



/*
var app = new Vue({
    el: '#app',
    data: {
        highlightedId: null
    },
    methods: {
        highlight(id) {
            this.highlightedId = id;
        },
        removeHighlight() {
            this.highlightedId = null;
        }
    }
}); 
*/