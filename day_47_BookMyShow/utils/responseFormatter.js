const success = (res, data, message = "Success") => {
  return res.json({
    success: true,
    message,
    data
  });
};

const error = (res, message = "Error", status = 500) => {
  return res.status(status).json({
    success: false,
    message
  });
};

module.exports = { success, error };