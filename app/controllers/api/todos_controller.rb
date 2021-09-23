class Api::TodosController < ApplicationController
  # only the crud action
  # new or the edit no longer here 
  # new and edit form is in the react side now 
  # index, show, create, update, destroy
  # redirect_to no more 
  # return data, html, xml json 
  # json object notation for passing data
  def index
    render json: Todo.all
  end
  
  def show 
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def create 
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Todo.find(params[:id]).destroy
    render json: { message: 'Todo Deleted' }
  end

  private 
    # { todo: {title: "", complete: false}}
    def todo_params
      params.require(:todo).permit(:title, :complete)
    end
end