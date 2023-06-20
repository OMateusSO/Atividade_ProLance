const UserController = require('./UserController')

const register = async (req, res) => {
    const user = req.body
    if (!user.email || !user.password || !user.nome) {
        return res.json({ status: "error", error: "Por favor entre com seu email e senha" })
    } else {

        const verifEmail = await new UserController().verifEmail(user.email)
        if (verifEmail) {
            const userSaved = {
                nome: user.nome,
                email: user.email,
                senha: user.password
            }
            new UserController().save(userSaved)
            return res.json({ status: "success", success: "Usuário registrado com sucesso" })

        } else {
            return res.json({ status: "error", error: "Email já se encontra registrado" })

        }
    }
}

module.exports = register;



