exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: '<h1>Hello WORLD!</h1>'
    });
}