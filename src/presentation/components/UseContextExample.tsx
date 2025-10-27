import { createContext, useContext, useState } from "react";
import { View, Text } from "react-native";

const UserContext = createContext("Guest"); // mặc định an toàn

export const UseContextExample = () => {
    const [userName, setUserName] = useState("Dang Khoa");

    return (
        <UserContext.Provider value={userName}>
            <View>
                <ProfileComponent />
            </View>
        </UserContext.Provider>
    );
};

const ProfileComponent = () => <HeaderComponent />;

const HeaderComponent = () => <AvatarComponent />;

const AvatarComponent = () => {
    const userName = useContext(UserContext);
    return (
        <View>
            <Text>{userName}</Text>
        </View>
    );
};
