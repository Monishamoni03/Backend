const errorMiddleware = (error, req, res, next) => {
    //status code setting
    const errorStatus = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(errorStatus);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack,
      });
};

module.exports = { errorMiddleware };