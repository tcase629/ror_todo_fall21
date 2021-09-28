import { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ todoId }) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get(`/api/todos/${todoId}/comments`)
      .then( res => {
        setComments(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/todos/${todoId}/comments`, { comment })
      .then(res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/todo/${todoId}/comments/${id}`, { comment })
      .then( res => {
        let updatedComments = comments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(updatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/todos/${todoId}/comments/${id}`)
      .then( res => {
        setComments( comments.filter( c => c.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>

    </>
  )
}

export default Comments;