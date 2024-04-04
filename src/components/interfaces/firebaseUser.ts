import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface AuthContextType {
    user: FirebaseAuthTypes.User |null;
    // onGoogleButtonPress: () => Promise<FirebaseAuthTypes.UserCredential | false>;
    onGoogleButtonPress: () => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
    error: any;
}


