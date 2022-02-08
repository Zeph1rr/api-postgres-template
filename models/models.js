const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const SomeModel = sequelize.define('some_model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    some_unique_string: {type: DataTypes.STRING, unique: true},
    some_string: {type: DataTypes.STRING},
    some_string_with_default: {type: DataTypes.STRING, defaultValue: "some_string_with_default"}
})

module.exports = {SomeModel}