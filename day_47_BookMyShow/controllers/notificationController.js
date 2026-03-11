const Notification = require("../models/Notification");

exports.sendNotification = async (req, res) => {

  const notification = await Notification.create({
    user: req.body.userId,
    title: req.body.title,
    message: req.body.message
  });

  res.json(notification);
};

exports.getNotifications = async (req, res) => {

  const notifications = await Notification.find({ user: req.user.id });

  res.json(notifications);
};