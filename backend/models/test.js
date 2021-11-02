module.exports = (sequelize, DataTypes) => {
  return sequelize.define('student', {
    student_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(50),
      allowNull:false
    },
    roll_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique:true
    },
  },
  {
    tableName: "student_student"
  });
}