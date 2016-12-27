import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/navigation/close';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export default class EditDialog extends Component {

    getSelectFieldItems() {
        let items = [];
        const {selectBox = []} = this.props;
        for (let s of selectBox) {
            items.push(
                <MenuItem key={s.value} value={s.value} primaryText={s.title}/>
            );
        }
        return items;
    }

    handleSelectChange = (i) => (event, index, value) => {
        let {numbers} = this.state;
        if (numbers[i]) {
            numbers[i].select = value;
            this.setState({numbers});
        }

    }
    handleTextChange = (i) => (event) => {
        let {numbers} = this.state;
        if (numbers[i]) {
            numbers[i].text = event.target.value;
            this.setState({numbers});
        }

    }
    deleteItem = (i) => () => {
        let {numbers = []} = this.state;
        if (numbers[i]) {
            numbers.splice(i, 1)
        }
        this.setState({numbers});
    }

    getRows() {

        let {numbers} = this.state;
        let listObj = [];
        for (let i = 0; i < numbers.length; i++) {
            listObj.push(
                <div key={i} className="row">
                    <div className="col-4">
                        <SelectField
                            style={{width: '100%'}}
                            value={numbers[i].select}
                            onChange={this.handleSelectChange(i)}
                        >
                            {this.getSelectFieldItems()}
                        </SelectField>
                    </div>
                    <div className="col-4">
                        <TextField
                            type="number"
                            fullWidth={true}
                            id={`text-field-${i}`}
                            onChange={this.handleTextChange(i)}
                            value={numbers[i].text}
                        />
                    </div>
                    <div className="col-4">
                        <FlatButton icon={<Close />} onTouchTap={this.deleteItem(i)}/>
                    </div>
                </div>
            );
        }
        return listObj;
    }

    componentWillMount() {
        let {numbers}=this.props;
        this.state = {numbers};
    }

    onSubmitHandler = () => () => {
        let {onSubmit}=this.props;
        let {numbers}=this.state;
        onSubmit(numbers);
    }
    onCreateHandler = ()=>()=>{
        let {numbers}=this.state;
        numbers.push({
            select:1,
            text:''
        })
        this.setState({numbers})
    }
    render() {
        let {isOpen = false, onClose}=this.props;

        const actions = [
            <RaisedButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.onSubmitHandler()}
            />,
            <FlatButton
                label="Cancel"
                onTouchTap={onClose}
            />

        ];

        return (

            <Dialog actions={actions}
                    modal={true}
                    actionsContainerStyle={{textAlign:'left'}}
                    open={isOpen}
                    onRequestClose={onClose}
            >
                <div className="modal-top">
                    <FlatButton icon={<Close />} onTouchTap={onClose}/>
                </div>
                <br/>
                {this.getRows()}
                <br/>
                <div className="clear-fix"/>
                <div className="text-center">
                    <FlatButton primary={true} onTouchTap={this.onCreateHandler()}>Create</FlatButton>
                </div>


            </Dialog>

        );

    }
}