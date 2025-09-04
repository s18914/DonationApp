// Importing AsyncStorage from the @react-native-async-storage/async-storage library to persist Redux state
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importing the persistReducer and persistStore functions from the redux-persist library
import { persistReducer, persistStore } from 'redux-persist';

// Importing the combineReducers and configureStore functions from the Redux Toolkit
//import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import User from './reducers/User';
import { logger } from 'redux-logger';

const rootReducer = combineReducers({
  user: User,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Creating a new persisted reducer with the configuration and root reducer
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  // Using the getDefaultMiddleware function from the Redux Toolkit to add default middleware to the store
  // We're passing in an object with the serializableCheck key set to false to avoid serialization errors with non-serializable data
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
