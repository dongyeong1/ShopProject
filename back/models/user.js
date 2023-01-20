module.exports =(sequelize,DataTypes)=>{
    const User=sequelize.define('User',{ //Mysql에는 users테이블생성
        //id는기본
        email:{
            type:DataTypes.STRING(30),
            allowNull:false,//필수
            unique:true,//고유한값
        },
        nickname:{
            type:DataTypes.STRING(30),
            allowNull:false,//필수
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false//필수
        },

    },{
        charset:'utf8',
        collate:'utf8_general_ci'//한글저장
    });
User.associate=(db)=>{
    // db.User.hasMany(db.Post)
    // db.User.hasMany(db.Comment)
    // db.User.belongsToMany(db.Post,{through:'Like',as:'Liked'})//좋아요
    // db.User.belongsToMany(db.User,{through:'Follow',as:'Followers',foreignkey:'FollowingId'})
    // db.User.belongsToMany(db.User,{through:'Follow',as:'Followings',foreignkey:'FollowerId'})


};
return User

}
