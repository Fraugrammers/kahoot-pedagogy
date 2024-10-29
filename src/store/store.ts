import { configureStore, Store } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { apiSlice } from './api/mainApi';

const store: Store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
});

const persistor = persistStore(store);

export { store, persistor };