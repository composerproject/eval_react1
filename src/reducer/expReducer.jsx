
export const initialState = {
    // input values
    title: '',
    amount: 0,
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
    

    default:
        return initialState;
}
}
  