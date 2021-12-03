module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('New day', {
        description: 'Create a new day',
        prompts: [{
            type: 'input',
            name: 'day',
            message: 'What day would you like to generate?'
        }],
        actions: [{
            type: 'addMany',
            destination: 'day-{{day}}',
            templateFiles: 'plop-templates/*',
            stripExtensions: 'hbs'
        }]
    });
};