const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors  = require('cors');

PORT=8080;

// connect to db
let db;
(async () => {
	db = await open({
		filename: 'Management_Data.db',
		driver: sqlite3.Database
	});
})();

app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());

app.get('/rentals', async (req, res) => {
	try {
		const all_data = await db.all(" SELECT * FROM Listing"); 
        const rentals = [];
		// const rentalsMap = {};

		// all_data.forEach(row => {
		// 	if (!rentalsMap[row.id]) {  // Assuming `id` is a unique identifier
        //         rentalsMap[row.id] = { ...row }; // Store unique listings
        //         rentals.push(rentalsMap[row.id]);
        //     }
        // });
		rentals.push(all_data);
		res.json(all_data);   
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
