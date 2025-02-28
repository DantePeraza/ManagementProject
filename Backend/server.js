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
	const all_data = await db.all(" SELECT * FROM Listing"); 
    console.log(all_data)
	// try {
    //     const courses = [];
    //     const courseMap = {};

    //     all_data.forEach(row => {
    //         if (!courseMap[row.course_id]) {	// Course Check
	// 			courseMap[row.course_id] = { 
	// 				id: row.course_id, 
	// 				name: row.course_name, 
	// 				sections: [] 
	// 			};
	// 			courses.push(courseMap[row.course_id]);
	// 		}
	
	// 		if (row.section_id) {	// Section Check
	// 			courseMap[row.course_id].sections.push({
	// 				id: row.section_id,
	// 				instructor: row.instructor_id,
	// 				instructorName: row.instructor_name,
	// 			});
    //         }
    //     });

        // Respond with the transformed data
    //     console.log({ courses, instructors: instruct_data });
    //     res.json({ courses, instructors: instruct_data });
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    //     res.status(500).json({ error: 'Failed to fetch data' });
    // }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
