import { DataTypes, Model } from 'sequelize';
import db from '.';
import Matchs from './Matchs';

class Clubs extends Model {
  id: number;
  clubName: string;

}

Clubs.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clubName: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  tableName: 'clubs',
  timestamps: false,
});


Clubs.hasMany(Matchs, { foreignKey: 'id', as: 'matchs' });

export default Clubs;
