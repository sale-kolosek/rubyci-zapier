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
//           'https://e860-109-121-61-93.ngrok-free.app/api/v1/builds/passed_builds',
//           {
//             params: {
//               branch: bundle.inputData.branch
//             },
//           }
//         );

//         return {
//           data: response.data,
//         };
//       },
//       {
//         // you must provide auth data for authenticated requests
//         // (just like running a normal trigger)
//         authData: { apiKey: 'hQW9p9lZmGSZhQS8Zh755A' },
//         // put arbitrary function params in `inputData`
//         inputData: {
//         	branch: 'main'
//         },
//       }
//     );

//     expect(results.data).toEqual([
//       {
//        "id": "0a8526d",
// 	     "author": "Aleksandar M",
// 	     "branch_name": "main",
// 	     "commit": "0a8526def2eaef2ec35c6bf69d9c7ba30393a9ce",
// 	     "commit_msg": "Update config.yml",
// 	     "owner": "Aleksandar M.",
// 	     "status": "passed",
// 	     "repo_name": "basic-app"
//       }
//     ]);
//   });
// });
