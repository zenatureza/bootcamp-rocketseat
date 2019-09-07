import Reactotron from 'reactotron-react-native';

// true when developing
if (__DEV__) {
  const tron = Reactotron.configure({ host: '127.0.0.1' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
