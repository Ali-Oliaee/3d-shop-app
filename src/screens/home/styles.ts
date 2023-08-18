import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10,
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    basketIcon: {
        transform: [{ scale: 1.1 }]
    }
})

export default styles;