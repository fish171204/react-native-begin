import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import container from './src/dependencies/dependencies';
import UserService from './src/services/user_service';

export default function App() {
  const userService = container.get<UserService>('UserService');

  return (
    <>
      <View style={styles.appbar}>
        <Button
          title="Press Me"
          onPress={() => {
            userService.hello();
          }}
        />
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appbar: { paddingTop: 100 },
});
