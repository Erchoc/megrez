const architecture = require('./底层架构');
const fs = require('./文件系统');
const shell = require('./Shell编程');

module.exports = {
  title: '基础篇',
  children: [architecture, fs, shell]
};
