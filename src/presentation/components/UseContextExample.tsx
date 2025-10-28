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

/*
useContext:
    - Là hook giúp truyền dữ liệu (state, biến, hàm) giữa các component mà không cần props chain (truyền thủ công qua nhiều cấp).
    - Cấu trúc:
        1️⃣ Tạo context: const MyContext = createContext(defaultValue)
        2️⃣ Cung cấp dữ liệu: <MyContext.Provider value={...}>...</MyContext.Provider>
        3️⃣ Nhận dữ liệu: const value = useContext(MyContext)
    - Dùng khi:
        + Nhiều component lồng nhau cần dùng chung 1 state (ví dụ: theme, user info, ngôn ngữ...).
    - Ưu điểm: 
        + Code gọn hơn so với truyền props liên tục qua nhiều cấp.
        + Tránh "prop drilling".
*/