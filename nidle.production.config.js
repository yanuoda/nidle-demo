module.exports = {
  name: 'production-assets', 
  mode: 'production',
  type: 'publish', 
  stages: [
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
          secure: true,
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
            sourceBranch: 'release',
            targetBranch: 'master',
            codeReview: false,
            autoMerge: true,
            removeSourceBranch: true
          }
        }
      ]
    }
  ]
}
