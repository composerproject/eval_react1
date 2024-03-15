
export const initialState = {
    // input values
    title: 'Monkey D Luffy',
    amount: 300,
    category: 'Alimentation',
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

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


export const reducer = (state, action) => {


    switch (action.type) {
        case 'add':
            return {
                ...state,
                total: Number(state.total) + Number(state.amount),
                categories: state.categories.map((category) => {
                    if (category.name === state.category) {
                        const newExp = {title: capitalizeFirstLetter(state.title), amount: state.amount};
                        const newTotal = Number(category.total) + Number(state.amount);
                        return { 
                            ...category, 
                            total: newTotal,
                            expenses: [...category.expenses, newExp]
                        };
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
  