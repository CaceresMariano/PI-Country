const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('activity', {

        id:{
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.ENUM('1','2','3','4','5')
           
        },
        duration:{
            type: DataTypes.INTEGER,
            validate:{
                len:[1,60]
            },     
        },
        season:{
            type: DataTypes.STRING,
            validate:{
                isIn:['summer', 'spring', 'autumn', 'winter']
            }
        },


    },
        {
            timestamps: false
        }
    );

}