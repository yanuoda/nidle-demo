module.exports = {
  name: 'nidle-demo', 
  mode: 'development',
  type: 'publish', 
  stages: [
    {
      name: 'download',
      timeout: 0, 
      steps: [
        {
          name: 'clone',
          enable: true, 
          package: 'nidle-plugin-clone', 
          timeout: 0, 
          retry: 0
        },
        {
          name: 'nvm',
          enable: true, 
          package: 'nidle-plugin-nvm', 
          timeout: 0, 
          retry: 0
        },
        {
          name: 'install',
          enable: true, 
          package: 'nidle-plugin-install', 
          timeout: 0, 
          retry: 0
        }
      ]
    },
    {
      name: 'build',
      timeout: 0, 
      steps: [
        {
          name: 'build',
          enable: true, 
          package: 'nidle-plugin-build', 
          timeout: 0, 
          retry: 0,
          options: {
            output: 'dist',
            buildShell: 'release.sh'
          }
        }
      ]
    },
    {
      name: 'publish',
      timeout: 0, 
      steps: [
        {
          name: 'scp',
          enable: true, 
          package: 'nidle-plugin-scp', 
          timeout: 0, 
          retry: 0,
          options: {
            decompress: true
          }
        },
        {
          name: 'merge-request',
          enable: true, 
          package: 'nidle-plugin-merge', 
          timeout: 0, 
          retry: 0,
          secure: true,
          options: {
            apiUrl: 'http://gitbj.haihangyun.com/api/v4',
            privateToken: 'zxwDdcKGhwwxBGyS6D1y',
            targetBranch: 'release',
            codeReview: true,
            autoMerge: false,
            removeSourceBranch: false
          }
        }
      ]
    }
  ]
}
