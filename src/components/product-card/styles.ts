import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 70,
    paddingVertical: 4,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'visible',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    position: 'relative',
    zIndex: 12,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 140,
    position: 'absolute',
    top: -50,
    left: 0,
    zIndex: 999,
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#242424',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: '#4E5A37',
    fontWeight: 'bold',
  },
  button: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(55,73,87,0.2)',
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 50.46,
    elevation: 9,
    position: 'absolute',
    top: 50,
    left: '24%',
    width: 80,
    height: 30,
    zIndex: 9999,
    borderRadius: 100,
  },
});

export default styles;
