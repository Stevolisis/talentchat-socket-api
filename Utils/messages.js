const moment = require("moment/moment");

const formatMessage = (id,userName,text)=>{
    return {
        id,
        userName,
        text,
        time:moment().format('h:mm a')
    }
}

module.exports = { formatMessage };