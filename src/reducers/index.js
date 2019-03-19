export default(state, action) =>  {
    console.log(action, 'action');
    console.log(state, 'state');


    switch (action.type) {
        case 'ama':
            return {
                // DO SOMETHING
            };
        case 'fiaz':
            return {
                // DO SOMETHING
            };
        default: return (state);
    }
}