import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
  },
  body: {
    flex: 1,
    padding: 18,
    marginTop: 30,
  },
  field: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.7)',
  },
  value: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
});

export default styles;
