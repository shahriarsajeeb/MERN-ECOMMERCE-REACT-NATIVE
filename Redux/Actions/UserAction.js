import axios from 'axios';

// Login User
export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({
      type: 'userLoginRequest',
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `https://mern-nest-ecommerce.herokuapp.com/api/v2/login`,
      {email, password},
      config,
    );
    dispatch({
      type: 'userLoginSuccess',
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: 'userLoginFalse',
      payload: error.response.data.message,
    });
  }
};

// Registration User
export const register = (name, email, password, avatar) => async dispatch => {
  try {
    dispatch({type: 'userCreateRequest'});

    const {data} = await axios.post(
      `https://mern-nest-ecommerce.herokuapp.com/api/v2/registration`,
      {name, email, password, avatar},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    dispatch({type: 'userCreateSuccess', payload: data.user});
  } catch (error) {
    dispatch({
      type: 'userCreateFail',
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async dispatch => {
  try {
    dispatch({type: 'userLoadRequest'});

    const {data} = await axios.get(
      `https://mern-nest-ecommerce.herokuapp.com/api/v2/me`,
    );

    dispatch({type: 'userLoadSuccess', payload: data.user});
  } catch (error) {
    dispatch({type: 'userLoadFailed', payload: error.response.data.message});
  }
};

// Log out User

export const logOutUser = () => async dispatch => {
  try {
    await axios.get(`https://mern-nest-ecommerce.herokuapp.com/api/v2/logout`);
    dispatch({type: 'userLogOutSucess'});
  } catch (error) {
    dispatch({type: 'userLogOutFail', payload: error.response.data.message});
  }
};

// Forgot Password
export const forgotPassword = (email) => async dispatch => {
  try {
    dispatch({type: 'forgotPasswordRequest'});

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `https://mern-nest-ecommerce.herokuapp.com/api/v2/password/forgot`,
      {email},
      config,
    );
    dispatch({type: 'forgotPasswordSuccess', payload: data.message});
  } catch (error) {
    dispatch({
      type: 'forgotPasswordFailed',
      payload: error.response.data.message,
    });
  }
};
