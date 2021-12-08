import { Dimensions, StyleSheet, TouchableWithoutFeedbackBase } from "react-native";

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  videoImage: {
    width,
    height: height * 0.4,
  },
  statusBar: {
    width,
    height: 5,
    backgroundColor: '#3F25E5',
  },
  mediaContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  textContainer: {
    width,
    paddingHorizontal: 27,
  },
  tittleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
  buttonContainer: {
    width,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 27,
    justifyContent: 'space-around'
  },
  touchable: {
    backgroundColor: 'rgba(63, 37, 229, 0.15)',
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playContainer: {
    backgroundColor: 'rgba(63, 37, 229, 0.15)',
    height: width * 0.30,
    width: width * 0.30,
    borderRadius: width * 0.30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#3F25E5',
    height: width * 0.28,
    width: width * 0.28,
    borderRadius: width * 0.28,
    justifyContent: 'center',
    alignItems: 'center',

  }

})