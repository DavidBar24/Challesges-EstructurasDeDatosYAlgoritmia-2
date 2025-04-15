import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  auth,
  database,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  ref,
  push,
  set,
  serverTimestamp,
  onValue,
  onAuthStateChanged
} from './firebase';

const initialState = {
  user: null,
  messages: [],
  loading: false,
  error: null,
  authLoading: false
};

export const signUpWithEmail = createAsyncThunk(
  'firebase/signUp',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithEmail = createAsyncThunk(
  'firebase/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  'firebase/googleSignIn',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendMessage = createAsyncThunk(
  'firebase/sendMessage',
  async (messageText, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('User not authenticated');
      
      const newMessageRef = push(ref(database, 'messages'));
      await set(newMessageRef, {
        text: messageText,
        timestamp: serverTimestamp(),
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'Anonymous'
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMessages = createAsyncThunk(
  'firebase/fetchMessages',
  async (_, { dispatch }) => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const messages = [];
      snapshot.forEach((child) => {
        messages.push({ id: child.key, ...child.val() });
      });
      dispatch(messagesReceived(messages));
    });
    return unsubscribe;
  }
);

export const listenToAuthChanges = createAsyncThunk(
  'firebase/authListener',
  async (_, { dispatch }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }));
      } else {
        dispatch(clearUser());
      }
    });
  }
);

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    messagesReceived: (state, action) => {
      state.messages = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(signUpWithEmail.pending, (state) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(signUpWithEmail.fulfilled, (state) => {
        state.authLoading = false;
      })
      .addCase(signUpWithEmail.rejected, (state, action) => {
        state.authLoading = false;
        state.error = action.payload;
      })
      .addCase(signInWithEmail.pending, (state) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(signInWithEmail.fulfilled, (state) => {
        state.authLoading = false;
      })
      .addCase(signInWithEmail.rejected, (state, action) => {
        state.authLoading = false;
        state.error = action.payload;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state) => {
        state.authLoading = false;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.authLoading = false;
        state.error = action.payload;
      });
  }
});

export const { setUser, clearUser, messagesReceived } = firebaseSlice.actions;
export default firebaseSlice.reducer;