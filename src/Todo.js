import React, { Component } from 'react';
import { createItem } from './Redux/Actions';
import { connect } from 'react-redux';

class Todo extends Component {
    addItem = () => {
        const newItem = Math.random() + '_item';
        this.props.createItem(newItem);
    }
    render() {
        const items = this.props.items;
        return (
            <div>
                <button onClick={this.addItem}>Create Item</button>
                <button>Delete Item</button>
                <ul>
                {
                    items.map(item => {
                        return (
                            <li id={item.id} key={item.id}>
                                {item.description}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(createItem(item))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)