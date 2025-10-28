import { useEffect, useState, useRef } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native"

export const UseRefExample = () => {
    const [inputValue, setInputValue] = useState("");
    var count = useRef(5);
    useEffect(() => {
        count.current += 1;
    }, [inputValue]);
    return (
        <>
            <View style={styles.ali}>
                <Text>{count.current}</Text>
                <TextInput
                    style={{ backgroundColor: "gray" }}
                    value={inputValue}
                    onChangeText={(e) => setInputValue(e)} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    ali: { paddingTop: 100 }
})

/*
    useRef: 
    - Là hook giúp lưu trữ một giá trị (hoặc tham chiếu tới phần tử) mà KHÔNG làm component re-render khi thay đổi.
    - Giá trị được lưu trong thuộc tính `.current`.
    - Thường dùng để:
    + Giữ biến đếm hoặc dữ liệu qua nhiều lần render mà không reset.
    + Truy cập trực tiếp vào phần tử DOM hoặc component con (trong React Native: TextInput, View,...).
    Ví dụ: const count = useRef(0);
        count.current += 1; // cập nhật nhưng không gây re-render
*/