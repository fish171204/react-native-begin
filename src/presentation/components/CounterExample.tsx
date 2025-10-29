import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store";
import { Button, StyleSheet, Text, View } from "react-native";
import { decrement, increment } from "../../slices/counterSlice";
import container from "../../dependencies/dependencies";

export const CounterExample = () => {
    const count = useSelector((state: Store) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View style={styles.ali}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>{count} </Text>
                <Button title="+"
                    onPress={() => dispatch(increment())} />
            </View>


            <Button title="-"
                onPress={() => dispatch(decrement())} />
        </View>
    );
}

const styles = StyleSheet.create({
    ali: { top: 100 },
    container: { paddingBottom: 20 }
})