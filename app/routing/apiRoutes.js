
// Require Friends data
const Friends = require('../data/friends');


module.exports = (app) => {
    // GET: /api/getfriends
    // Return Friends data as JSON object
    app.get('/api/getfriends', (req, res) => {
        res.json(Friends);
    });

    // POST: /api/compareFriends
    // Send friend object via ajax, compare it with the friends in the database, and return closest match
    app.post('/api/compareFriends', (req, res) => {
        // Grabs the posted data
        let user = req.body;
        // Set lowestDifference to high, to account for de minimis
        let lowestDifference = 2000;
        // index of lowest matching difference
        let lowestIdx = 0;
        // Open a loop through  friends object
        for(var i = 0; i < Friends.length; i++) {
            let tempDifference = 0; // Temporary difference
            // Loop through the user scores.
            for(var j = 0; j < user.scores.length; j++) {
                // Add absolute value of diffs to temp variable
                tempDifference += Math.abs(user.scores[j] - Friends[i].scores[j])
            }
            // Check if this userscore difference is lower than the current lowest
            if(tempDifference < lowestDifference) { 
                // If it is, assign the index of the friend and reassign the lowest difference
                lowestIdx = i;
                lowestDifference = tempDifference;
            }
        }
        // Add the new user to the friends object
        Friends.push(user);
        // Send the matching user back to the form.
        res.json(Friends[lowestIdx]);
    });
};