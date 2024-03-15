
export const initialState = {
    // input values
    title: 'Monkey D Luffy',
    amount: 300,
    category: '',
    total: 12,
    categories: [
        { 
            name: 'Alimentation',
            total: 12,
            expenses: [
                {
                    title: 'Ramen',
                    amount: 12
                }
            ]
        },
        { 
            name: 'Logement',
            total: 0,
            expenses: []
        },
        {   
            name: 'Transport',
            total: 0,
            expenses: []
        },
        {   
            name: 'Divertissement',
            total: 0,
            expenses: []
        },
        {   
            name: 'Santé',
            total: 0,
            expenses: []
        },
        { 
            name: 'Education',
            total: 0,
            expenses: []
        },
        { 
            name: 'Autres',
            total: 0,
            expenses: []
        }
    ]
}




export const reducer = (state, action) => {


    switch (action.type) {
        case 'add':
            return {
                ...state,
                categories: state.categories.map((category) => {
                    if (category.name === state.category) {
                        return { ...category, expenses: [...category.expenses, {title: state.title, amount: state.amount}]};
                    }
                    return category;
                })
            };
        case 'set_input':
            return {
                ...state,
                [action.payload.inputName]: action.payload.inputValue
            };
        case 'set_category':
            return {
                ...state,
                category: action.payload
            };
        default:
            return initialState;
    }
}
  