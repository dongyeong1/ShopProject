
module.exports =(sequelize,DataTypes)=>{
    const Image=sequelize.define('Image',{ //Mysql에는 images테이블생성
        
        src:{
            type:DataTypes.STRING(200),
            allowNull:false,
        },
    },{
        charset:'utf8',
        collate:'utf8_general_ci'//이모티콘저장
    });
    Image.associate=(db)=>{
        // db.Image.belongsTo(db.Post)
    };
return Image

}