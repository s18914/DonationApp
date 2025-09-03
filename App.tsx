import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getFontFamily } from './assets/fonts/helper';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{ fontSize: 70, fontWeight: getFontFamily('700') }}>
          Hello worldd
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
