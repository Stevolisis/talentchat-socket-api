const users = [];

const userJoin = (id,userName,room)=>{
    const user = {id ,userName, room};
    users.push(user);

    return user;
}

const getCurrentUser = (id)=>{
    return users.filter(user=>user.id === id)[0];
}

module.exports = { userJoin, getCurrentUser, };