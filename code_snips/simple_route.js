const express = require('express');
const app = express();
const port = 3000

let balance = 0;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`Welcome Page
        <button onclick="redirectToApi()">Go to API</button>
        <script>
            function redirectToApi() {
                window.location.href = '/api';
            }
        </script>`);
  });

app.get('/api', (req, res) => {
    res.send(`Api Page
        <button onclick="redirectTohome()">Go to Home</button>
        <script>
            function redirectTohome() {
                window.location.href = '/';
            }
        </script>`)
})

app.listen(port, () => {
    console.log("listening on port " + port)
})

