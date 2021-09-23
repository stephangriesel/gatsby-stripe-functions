// domain/.netlify/functions/stripe
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'Stripe example'
    }
}