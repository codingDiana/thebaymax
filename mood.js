// Survey
//     .StylesManager
//     .applyTheme("default");
//
// var json = {
//     questions: [
//         {
//             "type": "boolean",
//             "name": "bool",
//             "title": "Please answer the question",
//             "label": "Are you 21 or older?",
//             "isRequired": true
//         }
//     ]
// };
//
// window.survey = new Survey.Model(json);
//
// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .innerHTML = "result: " + JSON.stringify(result.data);
//     });
//
// $("#surveyElement").Survey({model: survey});
