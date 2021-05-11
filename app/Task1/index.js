import React, { Component } from "react";
import axios from 'axios';

export default class Task1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            loading: true
        };
    }

    componentDidMount() {
      axios.get('http://localhost:3000/list')
          .then(result => {
              console.log(result);
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
