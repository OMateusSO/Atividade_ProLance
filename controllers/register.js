const db = require('../routes/db-config')

const register = async (req, res) => {
    const user = req.body
    if (!user.email || !user.password || !user.nome) {
        return res.json({ status: "error", error: "Por favor entre com seu email e senha" })
    } else {

        db.query('SELECT email FROM cliente WHERE email = ?', [user.email], async (err, result) => {
            if (err) throw err

            if (result[0]) {
                return res.json({ status: "error", error: "Email já se encontra registrado" })
            }
            else {
                const sql = "INSERT INTO cliente (nome, email, senha) VALUES (?, ?, ?)";
                db.query(sql, [`${user.nome}`, `${user.email}`, `${user.password}`], (error, result) => {
                    if (error) throw error
                    return res.json({ status: "success", success: "Usuário registrado com sucesso" })
                })
            }
        })
    }
}

module.exports = register;



