const users = [{
    id: 1,
    displayName: 'Đình Khôi',
    email: 'mkgketban123@gmail.com',
    password: '$2b$10$1vlRwOnWfFL0RzuDnqMNeutfatr8lr0.pw0hshMrjsqZfEJO..EbG'
}]

exports.findByEmail = function(email) {
    return users.find(u => u.email === email);
};

exports.findById = function(id) {
    return users.find(u => u.id === id);
};
exports.validatePassword = function(hash, password) {
    return bcrypt.compareSync(password, hash);
};