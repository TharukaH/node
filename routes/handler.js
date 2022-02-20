const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [
        {
            "firstLine": "React JS",
            "secondLine": "Node JS",
        }
    ];
    res.end(JSON.stringify(str));
});

module.exports = router;