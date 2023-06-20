const db = require('../data-source')
const userModel = require('../models/UserModel')
const UserEntity = require('../entity/User')
module.exports = class UserController {
    async save({ nome, email, senha }) {
        const user = new userModel(nome, email, senha);
        const userTable = db.getRepository(UserEntity)
        return await userTable.save(user);
    }

    async findUser(email, senha) {
        const findUser = await db.manager.find(UserEntity, { where: { email: email, senha: senha } });
        if (findUser.length === 0) {
            return false
        } else {
            return findUser
        }
    }

    async verifEmail(email) {
        const verifEmail = await db.manager.find(UserEntity, { where: { email: email } });

        if (verifEmail.length === 0) {
            return true
        } else {
            return false
        }
    }
}