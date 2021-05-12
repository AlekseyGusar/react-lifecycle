import React, { Component } from "react";

export default class Task1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            loading: true
        };
    }

    componentDidMount() {
      fetch('http://localhost:3000/list', { method: 'GET'})
          .then(result => {
              return this.setState({
                  loading: false,
                  list: [...result.data],
              })
          });
    };

    render() {
        const { list, loading } = this.state;
        const listItems = list.map(item => {
            return (
                <li key={item.id}>
                    <div>id: {item.id}</div>
                    <div>name: {item.name}</div>
                    <div>note: {item.note}</div>
                </li>
            )
        })
        return <div> 
            {loading ? <div>Loading...</div> : <ul>{listItems}</ul>}
        </div>
    };
}
