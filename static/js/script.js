let id = document.getElementById('snippet_id').value
let btn = document.getElementById('enter_snippet_id')

btn.addEventListener('click', () => {
    window.location.href = `/snippet/${id}`
})
