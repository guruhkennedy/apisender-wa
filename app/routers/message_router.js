const { Router } = require("express");
const {
  sendMessage,
  sendBulkMessage,
  login,
} = require("../controllers/message_controller");
const MessageRouter = Router();

MessageRouter.all("/send-message", sendMessage);
MessageRouter.all("/send-bulk-message", sendBulkMessage);
MessageRouter.all("/login", login);

module.exports = MessageRouter;
