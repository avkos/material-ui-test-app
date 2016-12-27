import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';

import '../index.css';
import App from '../App';
import EditDialog from '../components/Numbers/EditDialog';

storiesOf('App', module)
    .add('default view', () => {
        let state = {
            isOpenDialog: false,
            numbers: [
                {select: 1, text: '22'},
                {select: 3, text: '11'},
                {select: 2, text: '33'},
            ]
        };
        action('state')(state)
        return <App state={state}/>
    })
    .add('open dialog', () => {
        let state = {
            isOpenDialog: true,
            numbers: [
                {select: 1, text: '22'},
                {select: 3, text: '11'},
                {select: 2, text: '33'},
            ]
        };
        action('state')(state)
        return <App state={state}/>
    })

