'use strict'
const Jadwal = use('App/Models/Jadwal')
class PiketController {
    async index({ view }){
        const jadwal = await Jadwal.all()
        return view.render('index',{
            judul:'Jadwal Piket',   
            jadwal:jadwal.toJSON()
        })
        
    }
}

module.exports = PiketController
