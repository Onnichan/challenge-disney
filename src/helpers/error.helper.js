module.exports = function (message, status) {
  const error = new Error();
  error.status = status;
  error.message = message;
  error.head = 'asd';
  throw error;
};
