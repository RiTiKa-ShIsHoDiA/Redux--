# Redux--
Installation of REDUX
1.create a react project 
2. install redux and RTK(redux toolkit)
      npm install react-redux
      npm install @reduxjs/toolkit
3. create STORE in /app.js use configurestore({}) provided by rtk
4. create your feature  /feature/todos/tododSlice 
        1.first intialize state 
        2.create your slice using createSlice({}), intialize with state , add all reducers relted to added state.
        3.export individually all reducers(for use in further components) or slice(store know about it)
5. 2 methods for update state 
       1.useSelector()  // for fetching value in state 
       2.useDispatch() // for add value in state 
       
      
      
