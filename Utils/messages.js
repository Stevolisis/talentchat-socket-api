const moment = require("moment/moment");

const formatMessage = (id,username,text)=>{
    return {
        id,
        username,
        text,
        time:moment().format('h:mm a')
    }
}

module.exports = { formatMessage };