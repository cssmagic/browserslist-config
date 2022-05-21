'use strict'

const mobile = require('./preset/mobile')
const desktop = require('./preset/desktop')

const both = [
	...mobile,
	...desktop,
]

module.exports = both
