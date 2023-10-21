const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('theTrains.db');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    db.all('SELECT station_name FROM trains', (err, data) => {
        res.render('index', { stations: data });
    })
});

app.post('/search', (req, res) => {
    const station = req.body.from;
    db.all('SELECT * FROM trains WHERE station_name = ?', [station], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('search', { trains: rows, station: station });
    });
});

app.get('/book/:trainID', (req, res) => {
    const train = req.params.trainID;
    db.get('SELECT * FROM trains WHERE id = ?', [train], (err, row) => {
        res.render('book', { train: row })
    })
})

app.post('/ticket/:trainID', (req, res) => {
    const train_no = req.params.trainID;
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    const quantity = req.body.quantity;
    const create_seats = [];
    
    for(let i = 0; i < quantity; i++) {
        let seat = Math.floor(Math.random() * 100);
        create_seats.push('S' + seat);
    }
    const seats = create_seats.join(', ');

    db.get('SELECT * FROM trains WHERE id = ?', [train_no], (err, row) => {
        const ticket = db.prepare('INSERT INTO tickets (train_number, train_name, station_name, departure, name, date, seats, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        ticket.run([train_no, row.train_name, row.station_name, row.departure, name, date, seats, phone], (err) => {
            if (err) {
                throw err;
            }
            res.render('ticket', { ticket: req.body, train: row, seats: seats })
        })
    })
})

app.get('/tickets', (req, res) => {
    db.all('SELECT * FROM tickets', (err, rows) => {
        res.render('mybookings', { tickets: rows })
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
