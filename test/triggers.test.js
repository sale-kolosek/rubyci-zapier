// /* globals describe, expect, test */

// const zapier = require('zapier-platform-core');

// const App = require('../index');
// const appTester = zapier.createAppTester(App);

// describe('triggers', () => {
//   test('new build pass', async () => {
//     const results = await appTester(
//       // your in-line function takes the same [z, bundle] arguments as normal
//       async (z, bundle) => {
//         // requests are made using your integration's actual middleware
//         // make sure to pass the normal `bundle` arg to `appTester` if your requests need auth
//         const response = await z.request(
//           'https://8470-109-121-61-93.ngrok-free.app/api/passed_builds',
//           {
//             params: {},
//           }
//         );

//         return {
//           data: response.data,
//         };
//       },
//       {
//         // you must provide auth data for authenticated requests
//         // (just like running a normal trigger)
//         authData: { apiKey: 'Ma8pVDStntQMDfjwyXV1Mw' },
//         // put arbitrary function params in `inputData`
//         inputData: {},
//       }
//     );

//     expect(results.data).toEqual([
//       {
//           "id": 1000021,
//           "status": "passed",
//           "repo_name": "TestProject1",
//           "owner": "sale",
//           "author": "sale-kolosek",
//           "commit": "das231sda123132",
//           "commit_msg": "Commit 1",
//           "branch_name": "Test 1"
//       },
//       {
//           "id": 1000022,
//           "status": "passed",
//           "repo_name": "TestProject1",
//           "owner": "sale",
//           "author": "sale-kolosek",
//           "commit": "faz23dssda12f332",
//           "commit_msg": "Commit 2",
//           "branch_name": "Test 2"
//       }
//     ]);
//   });
// });
