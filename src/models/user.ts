import {DataTypes} from "sequelize"
import {sequelize}  from "../config/mysql"
export const user = sequelize.define("users",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.ENUM({values: ["user","admin"]})
    }

},{
    timestamps:true,

}) 