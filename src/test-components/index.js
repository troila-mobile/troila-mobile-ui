import React from 'react';
import Text from './text';
import List from './list';
import TextInput from './text-input';

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
    },
]