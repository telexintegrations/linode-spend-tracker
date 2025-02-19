class SendMessageError extends Error{
    constructor(message, originalError=null){
        super(message);
        this.name = "SendMessageError";
        this.originalError = originalError;
    }
}

module.exports = SendMessageError;