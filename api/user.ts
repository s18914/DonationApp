import auth from '@react-native-firebase/auth';

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({ displayName: fullName });
    return user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'The email you entered is already in use.' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Please enter a valid email address.' };
    }
    return { error: 'Something went wrong with your request.' };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error: any) {
    if (error.code === 'auth/invalid-credential') {
      return { status: false, error: 'Please enter a correct password' };
    } else if (error.code === 'auth/invalid-email') {
      return {
        status: false,
        error:
          'The email you entered does not exist. Please create a new account.',
      };
    }
    return { status: false, error: 'Something went wrong' };
  }
};

export const logOut = async () => {
  await auth().signOut();
};
