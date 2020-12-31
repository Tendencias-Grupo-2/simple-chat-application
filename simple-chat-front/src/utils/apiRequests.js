import axios from 'axios';

// Make a GET request with a shorthand method
axios.get('https://api.github.com/users/hacktivist123');

// Make a Post Request with a shorthand method
axios.post('/signup', {
    firstName: 'Axcel',
    lastName: 'Espinal'
});
