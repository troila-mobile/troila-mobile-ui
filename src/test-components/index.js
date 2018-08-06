import React from 'react';
import Text from './text';
import List from './list';
import TextInput from './text-input';
import InputItem from './input-item';
import Step from './step';
import SpringAnimatedView from './spring-animated-view';

export default [
    {
        name: 'Text',
        view: <Text/>
    }, {
        name: 'List',
        view: <List />
    }, {
        name: 'TextInput',
        view: <TextInput />
    }, {
        name: 'InputItem',
        view: <InputItem />
    }, {
        name: 'Step',
        view: <Step />
    }, {
        name: 'SpringAnimatedView',
        view: <SpringAnimatedView />
    },
]