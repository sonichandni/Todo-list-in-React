import React from "react";
import "./styles.css";

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newItem: ""
    };
  }

  addItem(item, e) {
    if (item !== "") {
      const list = [...this.state.list];

      const newItem = {
        id: Date.now(),
        item: item,
        isDone: false
      };
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== id);
    this.setState({
      list: updateList
    });
  }

  updateItem(item) {
    this.setState({
      newItem: item
    });
  }

  render() {
    return (
      <>
        Add your todo item here...
        <br />
        <input
          type="text"
          name="itemInput"
          value={this.state.newItem}
          onChange={e => this.updateItem(e.target.value)}
        />
        <br />
        <button
          name="addItem"
          onClick={e => this.addItem(this.state.newItem, e)}
        >
          {" "}
          Add Item{" "}
        </button>
        <br />
        <br />
        Item List:
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <>
                <li key={item.id}>
                  {item.item}{" "}
                  <button
                    name="deleteItem"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete It!
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}
