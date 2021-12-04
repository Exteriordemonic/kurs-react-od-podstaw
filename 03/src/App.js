import React from 'react';
import Form from './components/Form/Form';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';

const initialStateItems = [
    {
        image: 'https://scroll.morele.net/wp-content/uploads/2021/08/avatar-2-kiedy-premiera.png',
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://scroll.morele.net/wp-content/uploads/2021/08/avatar-2-kiedy-premiera.png',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://scroll.morele.net/wp-content/uploads/2021/08/avatar-2-kiedy-premiera.png',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://scroll.morele.net/wp-content/uploads/2021/08/avatar-2-kiedy-premiera.png',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    }
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        console.log(form.get('name'));
    }

    render() {
        return (
            <div>
                <ListWrapper
                    items={this.state.items}
                />
                <Form submitFn={this.addItem} />
            </div>
        )
    }
};

export default App;
