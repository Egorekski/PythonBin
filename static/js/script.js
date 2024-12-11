document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('enter_snippet_id');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let id = document.getElementById('snippet_id').value;
        if (id) {
            window.location.href = `/snippets/${id}`;
        } else {
            alert('Please enter a valid ID');
        }
    });
});

