'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
    },
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    // userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'userId'
    })
  }

  // BlogPost.associate = (models) => {
  //   BlogPost.hasMany(models.BlogPost, {
  //     foreignKey: 'id', as: 'blogPost'
  //   })
  // }

  return BlogPost;
};
