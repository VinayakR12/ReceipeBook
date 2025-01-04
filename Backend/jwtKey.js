// generateKey.js
// const crypto = require('crypto');
import crypto from 'crypto';

const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);
