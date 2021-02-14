
const Conections = require('../connectSheets/connects')
class ControllerJogos {
    async index(req, res){
        try {

            const jogos = await Conections.jogos()
           return  res.status(200).json(jogos)
        }catch(error){
            return res.status(500).json({error: 'Error tente novamente depois'})
        }
    }
}



module.exports = new ControllerJogos

