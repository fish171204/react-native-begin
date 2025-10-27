// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, View } from 'react-native';
// import container from './src/dependencies/dependencies';
// import UserService from './src/services/user_service';
// import { PostClient } from './src/networking/post/PostClient';

// export default function App() {
//   const userService = container.get<UserService>('UserService');
//   const postClient = container.get<PostClient>('PostClient');

//   return (
//     <>
//       <View style={styles.appbar}>
//         <Button
//           title="Press Me"
//           onPress={() => {
//             postClient.fetchPosts().then(posts => {
//               posts.forEach((e) => {
//                 console.log('===> ', e.id)
//               })
//             })
//           }}
//         />
//       </View>
//       <StatusBar style="auto" />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   appbar: { paddingTop: 100 },
// });


import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import container from './src/dependencies/dependencies';
import UserService from './src/services/user_service';
import { PostClient } from './src/networking/post/PostClient';
import UseStateExample from './src/presentation/components/UseStateExample';
import { UseEffectExample } from './src/presentation/components/UseEffectExample';

export default function App() {
  const userService = container.get<UserService>('UserService');
  const postClient = container.get<PostClient>('PostClient');

  return (
    <>
      <UseEffectExample />
    </>
  );
}

const styles = StyleSheet.create({
  appbar: { paddingTop: 100 },
});
