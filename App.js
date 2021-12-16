import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { ThemeProvider } from './src/contexts/theme-provider';
import { RootNavigator } from './src/navigation';
import { store } from './src/state/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#3F25E5' }}>
          <ThemeProvider>
            <RootNavigator />
          </ThemeProvider>
        </SafeAreaView>
      </Provider>

    </>
  );

};

export default App