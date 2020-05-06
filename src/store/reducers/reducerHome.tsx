export interface stateTS {
    trips: [
        {
            id: string;
            date: string;
            mainImg: string;
            title: string;
            desc: [{ text: string; img: string | any }, { text: string; img: string | any }];
        },
    ];
    tickets: [
        {
            id: string;
            date: string;
            mainImg: string;
            title: string;
            desc: {
                text: string;
                img: string;
            };
        },
    ];
}

const initialState: stateTS = {
    trips: [
        {
            id: '',
            date: '2020-02-02',
            mainImg: '',
            title: '',
            desc: [
                { text: '', img: '' },
                { text: '', img: '' },
            ],
        },
    ],
    tickets: [
        {
            id: '',
            date: '',
            mainImg: '',
            title: '',
            desc: {
                text: '',
                img: '',
            },
        },
    ],
};

export const reducer = (state = initialState, action: any): stateTS => {
    switch (action.type) {
        default:
            return state;
    }
};
