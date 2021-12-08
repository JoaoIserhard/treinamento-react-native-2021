import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3F25E5',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '33%',
  }
})

export default styles; 