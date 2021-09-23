5.times do 
  @todo = Todo.create(
    title: Faker::Hobby.activity,
    complete: false
  )

  2.times do
    Comment.create(
      title: Faker::Mountain.name,
      author: Faker::Book.author,
      body: Faker::Lorem.paragraph,
      todo_id: @todo.id
    )
  end
end

puts "Data seeded yo!"
@todos = Todo.all 
@comments = Comment.all
p @todos
p @comments 