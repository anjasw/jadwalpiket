'use strict'

const Schema = use('Schema')

class JadwalSchema extends Schema {
  up () {
    this.create('jadwals', (table) => {
      table.increments()
      table.string('nama')
      table.string('kelas')
      table.string('hari')
      table.timestamps()
    })
  }

  down () {
    this.drop('jadwals')
  }
}

module.exports = JadwalSchema
