import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';

export default class ListItems extends Component {


    render() {
        let {list = []} = this.props;
        let listObj = [];
        for (let l of list) {
            listObj.push(
                <ListItem>
                    <span>{l.select}</span>
                    <span>{l.text}</span>
                </ListItem>
            );
        }
        return  listObj;
    }
}

