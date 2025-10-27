import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from "react";

const UseStateExample = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.appbar}>
            <View>
                <Text>{count}</Text>
                <Button title='increase' onPress={() => {
                    setCount((count + 1));
                }} />
            </View>

            <View style={styles.appbar}>
                <Button title='decrease' onPress={() => {
                    setCount((count - 1));
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appbar: { paddingTop: 100 },
});


export default UseStateExample;