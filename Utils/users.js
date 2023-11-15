const users = [];

const userJoin = (id,userName,room)=>{
    const user = {id ,userName, room};
    users.push(user);

    return user;
}

const getCurrentUser = (id)=>{
    return users.filter(user=>user.id === id)[0];
}

const getRoomUsers = (room)=>{
    console.log(users,room);
    return users.filter(user=>user.room === room);
}

module.exports = { userJoin, getCurrentUser, getRoomUsers, };