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