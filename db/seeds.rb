# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Article.create([{
  title: 'I am an article title',
  author: 'john doe',
  url: 'www.nytimes.com',
  date: '2015-12-08'
},
{
  title: 'I am an article title 2',
  author: 'jane doe',
  url: 'www.cnn.com',
  date: '2015-12-08'
},
{
  title: 'I am an article title 3',
  author: 'john doe',
  url: 'www.nytimes.com',
  date: '2015-12-08'
}
])