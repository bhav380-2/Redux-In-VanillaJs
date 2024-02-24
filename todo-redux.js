const redux = require("redux");

//Actions
const ADD_TODO = "ADD TODO";
const TOGGLE_TODO = "Toggle TODO";

// ACTIONS Creators
const addTodo = (text)=>({
    text,
    type:ADD_TODO
});

const toggleTodo = (index)=>({
    index,
    type:TOGGLE_TODO
});

//Initial state
const initialState={
    todos:[]
}


//Reducers
function todoReducer(state=initialState,action){

    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos:state.todos.map((todo,i)=>{
                    if(i==action.index){
                        todo.completed=!todo.completed
                    }
                    return todo;
                })
            }

        default:
            return state;
    }
}

// Creating store
const store = redux.createStore(todoReducer);

// dispatch actions (dispatchers)
store.dispatch(addTodo("study at 8"));
store.dispatch(addTodo("Office at 9am"));
store.dispatch(toggleTodo(0));

//read data from store (selectors)
console.log(store.getState());




