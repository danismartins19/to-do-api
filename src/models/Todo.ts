import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface TodoInstance extends Model {
    id: number,
    title: string,
    done: boolean
}

export const Todo = sequelize.define<TodoInstance>("Todo", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true   
    },
    title:{ 
        type: DataTypes.STRING
    },
    done:{ 
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: "todos",
    timestamps: false
})

