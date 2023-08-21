import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.32,
        shadowRadius: 0.46,
        elevation: 20,
    }
})

export default styles;