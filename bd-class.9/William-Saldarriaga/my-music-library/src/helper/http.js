export const serverError = (res, message) => {
    console.log(message);
    res.status(500).json({
        message: message || 'Internal Server Error',
        status: 500
    });
};
