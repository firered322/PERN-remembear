import React, { useState } from "react";

const EditTodo = (props) => {
  const [description, setDesc] = useState(props.todo.description);
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${props.todo.todo_id}`,
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/"
    } catch (error) {
      console.error(error.messages);
    }
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-dark"
        data-toggle="modal"
        data-target={`#${props.todo.todo_id}`}
      >
        Edit Todo
      </button>

      <div className="modal" id={`${props.todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                defaultValue={description}
                onChange={(e) => setDesc(e.target.value)}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditTodo;
