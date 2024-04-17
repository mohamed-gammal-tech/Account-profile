function makeActive(element) {
    // Remove 'active' class from all elements
    var links = document.getElementsByClassName('nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    // Add 'active' class to the element that was clicked
    element.classList.add('active');
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
