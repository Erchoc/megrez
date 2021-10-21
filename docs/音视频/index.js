const ffmpeg = require('./FFmpeg');
const streamMedia = require('./流媒体服务');
const imageBase = require('./图片基础');
const videoBase = require('./视频基础');

module.exports = {
  title: '音视频',
  children: [imageBase, videoBase, ffmpeg, streamMedia]
};
