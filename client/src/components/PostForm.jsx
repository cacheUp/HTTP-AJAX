import React from "react";

function ItemForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    if (props.isUpdating) {
      props.updateItem();
    } else {
      props.addItem();
    }
  }

  return (
    <div>
      <h2>{props.isUpdating ? "Update Item" : "Add New Item"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={props.item.name}
          placeholder="Name"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <input
          type="text"
          name="description"
          value={props.item.description}
          placeholder="Description"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <input
          type="text"
          name="imageUrl"
          value={props.item.imageUrl}
          placeholder="Image Url"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <button type="submit" className="md-button form-button">
          {props.isUpdating ? "Update item" : "Add new Item"}
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
