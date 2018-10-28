// Importing express and other deps or data
import express from 'express';
import data from './data/data.json'

const app = express();
const PORT = 3000;

// Changing The X-Powered-By in the header
// app.use('/', (req, res) =>
//     res.setHeader('X-Powered_By', 'kaboom.com')
// );

// Creating simple requests
app.get('/', (req, res) =>
    res.json(data)
);

app.post('/newItem', (req, res) => 
    res.send(`A post request with /newItem on port ${PORT}`)
);

app.put('/item', (req, res) => 
    res.send(`An update request with /item on port ${PORT}`)
);

app.delete('/item', (req, res) => 
    res.send(`A delete request with /item on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
    console.log(data)
});