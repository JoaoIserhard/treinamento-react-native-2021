import React from 'react';
import { SafeAreaView } from 'react-native';

import { ThemeProvider } from './src/contexts/theme-provider';
import { RootNavigator } from './src/navigation';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#3F25E5' }}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );

};

export default App