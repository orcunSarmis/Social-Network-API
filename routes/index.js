const router = require('express');
const apiRoutes = require('./api')

router.request('/api', apiRoutes);

router.request((req, res) => res.send('Wrong route!'));

module.exports = router;