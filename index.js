const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./authentication');

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    new_build_pass: {
      key: 'new_build_pass', // uniquely identifies the trigger
      noun: 'Build Pass', // user-friendly word that is used to refer to the resource
      // `display` controls the presentation in the Zapier Editor
      display: {
        label: 'New Build Pass',
        description: 'Triggers when a new build pass.',
      },
      // `operation` implements the API call used to fetch the data
      operation: {
        perform: {
          url: 'https://ruby.ci/api/v1/builds/passed_builds',
        },
        sample: {
          id: 1000021,
          status: 'passed',
          owner: 'tester',
          repo_name: 'Test Repo',
          author: 'tester-kolosek',
          commit: 'd854ede733dc2194c732aadg8f5238db5a5f5zc1',
          commit_msg: 'Commit 1',
          branch_name: 'branch_01'
        },
        // an array of objects is the simplest way
        outputFields: [
          {
            key: 'id',
            label: 'Build ID',
            type: 'integer',
          },
          {
            key: 'status',
            label: 'Build Status',
            type: 'string',
          },
          {
            key: 'owner',
            label: 'Owner Name',
            type: 'string',
          },
          {
            key: 'repo_name',
            label: 'Repo Name',
            type: 'string',
          },
          {
            key: 'author',
            label: 'Author Name',
            type: 'string',
          },
          {
            key: 'commit',
            label: 'Commit ID',
            type: 'string',
          },
          {
            key: 'commit_msg',
            label: 'Commit Message',
            type: 'string',
          },
          {
            key: 'branch_name',
            label: 'Branch Name',
            type: 'string',
          }
        ],
      },
    },
  },

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {},

  resources: {},
};
