'use strict';

const crypto = require('crypto');

// 密匙
const SECRET_KEY = 'WJiol_8776#';

// md5加密
const md5 = content => {
  const md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex');
};

// 加密函数
const genPassword = password => {
  const str = `passwprd=${password}&key=${SECRET_KEY}`;
  return md5(str);
};

module.exports = {
  genPassword,
};
