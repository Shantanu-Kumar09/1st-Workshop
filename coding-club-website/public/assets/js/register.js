document.getElementById('student-registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;

    // Simulate saving the data (you can replace this with an API call)
    console.log('Student Registered:', { name, email, phone, course, year });

    alert('Thank you for registering, ' + name + '!');

    // Reset the form
    event.target.reset();
});