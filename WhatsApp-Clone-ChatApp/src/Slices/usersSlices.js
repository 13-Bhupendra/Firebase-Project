import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { store, auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//* Signup Users - auth
const signUpUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = {
    email : userCredential.user.email,
    displayName: userCredential.user.displayName,
    image: userCredential.user.photoURL,
     uid: userCredential.user.uid
  }
  // return userCredential.user;
  return user
};

//* Sign In Users
export const signInUser = createAsyncThunk(
  "users/signIn",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user =  {
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
      image: userCredential.user.photoURL,
    };

    return user;
  }
);

//* Fetch Users data (Firestore)
export const fetchUserData = createAsyncThunk("users/FetchData", async () => {
  const querySnapshot = await getDocs(collection(store, "users"));
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
});

//* Post users Data
export const addNewUsersData = createAsyncThunk(
  "users/PostData",
  async ({ email, password, name }) => {
    const authUser = await signUpUser(email, password);
    if (authUser) {
      const docRef = await addDoc(collection(store, "users"), {
        email,
        password,
        name,
        uid: authUser.uid, 
      });
      return {
        id: docRef.id,
        uid: authUser.uid,
        email: email,
        name: name,
        password: password,
        displayName : name
      };
    }
    return null;
  }
);

//* Delete Users data
export const deleteUsersData = createAsyncThunk(
  "users/DeleteData",
  async (id) => {
    await deleteDoc(doc(store, "users", id));
    return id;
  }
);

//* Update User data (to be implemented later)
// !export const updateUsersData = createAsyncThunk(
// !  "users/updateData",
//!   async () => {}
// !);

const initialState = {
  currentUser: null,
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearCurrentUser : (state)=>{
      state.currentUser = null
    }
  },

  extraReducers: (builder) => {
    //! Fetch data
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.error.message || "Can't fetch users!";
        state.isLoading = false;
      });

    //! Post Data
    builder
      .addCase(addNewUsersData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewUsersData.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentUser = action.payload;
          state.users.push(action.payload);
        }
        state.isLoading = false;
      })
      .addCase(addNewUsersData.rejected, (state, action) => {
        state.error = action.error.message || "User not added!";
        state.isLoading = false;
      });

    //! Delete Data
    builder
      .addCase(deleteUsersData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUsersData.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteUsersData.rejected, (state, action) => {
        state.error = action.error.message || "User not removed!";
        state.isLoading = false;
      });

    //! Sign in Users
    builder
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        const user = action.payload
        state.currentUser =user
        state.isLoading = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.error = action.error.message || "User not found!";
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
export const {clearCurrentUser} = userSlice.actions;