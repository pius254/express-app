/**
 * Author: Pius Muriithi
 * Email: piusmuriithi1@gmail.com
 * Note: Some Tests have been done using Postman
 */

// Importing express and other deps or data
import express from 'express';
import data from './data/data.json'

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Loading static files in images folder using /images path
app.use('/images', express.static('images'));

// Changing The X-Powered-By in the header
// app.use('/', (req, res) =>
//     res.setHeader('X-Powered_By', 'kaboom.com')
// );

// Creating simple routes
app.get('/', (req, res) =>
    res.json(data)
);

// Using Parameters in routes
app.get('/item/:id', (req, res, next) => {
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.send(data[user]);
    next();
}, (req, res, next) => {
    console.log("Did you get the data?");
    next();
}, (req, res) =>
    console.log("Yes, i did.")
);

// Route chaining
app.route('/item')
    .get((req, res) => {
        res.send(`A get request with /item route on port ${PORT}`)
    })

    .post((req, res) => 
        res.send(`A post request with /item route on port ${PORT}`)
    )
    .put((req, res) => 
        res.send(`An update request with /item route on port ${PORT}`)
    )

    .delete((req, res) => 
        res.send(`A delete request with /item route on port ${PORT}`)
    )
    // End: Route Chaining

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
    console.log(data)
});