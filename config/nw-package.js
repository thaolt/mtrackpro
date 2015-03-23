module.exports = {
  appName: 'mtrackpro',
  platforms: ['linux64','win32'],
  buildType: function() {
    return this.appVersion;
  }
};