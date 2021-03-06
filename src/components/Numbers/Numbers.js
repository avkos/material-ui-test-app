import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EditDialog from './EditDialog';
import {List, ListItem} from 'material-ui/List';
export default class Numbers extends Component {
    componentWillMount() {
        let {
            state = {
                numbers: [
                    {select: 1, text: '22'},
                    {select: 3, text: '11'},
                    {select: 2, text: '33'},
                ],
            }
        }= this.props;
        this.state = {
            ...state, selectBox: [
                {value: 1, title: 'Ones'},
                {value: 2, title: 'Twice'},
                {value: 3, title: 'Triple'},
                {value: 4, title: 'Quad'}
            ]
        }

    };


    render() {
        const {isOpenDialog = false, numbers = [], selectBox = []}=this.state;
        return (
            <div>
                <List>
                    {this.getListItems()}
                </List>

                <RaisedButton label="Edit" onTouchTap={this.handleOpen()}/>
                {isOpenDialog && <EditDialog isOpen={isOpenDialog}
                                             numbers={[...numbers]}
                                             selectBox={selectBox}
                                             onClose={this.handleClose()}
                                             onSubmit={this.handleSubmit()}/>}
            </div>
        );
    }

    handleOpen = () => () => {
        this.setState({isOpenDialog: true});
    };

    handleClose = () => () => {
        console.log(this.state)
        this.setState({isOpenDialog: false});
    };
    handleSubmit = () => (numbers) => {
        this.setState({isOpenDialog: false, numbers});
    };

    getListItems() {
        let {numbers = []} = this.state;
        let listObj = [];
        for (let i = 0; i < numbers.length; i++) {
            listObj.push(
                <ListItem key={i} primaryText={`Select: ${numbers[i].select}, Text: ${numbers[i].text}`}/>
            );
        }
        return listObj;
    }

}

