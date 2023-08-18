import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 22,
        backgroundColor: '#fff',
    },
    contentContainer:{
        paddingEnd: 22
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 18,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 14,
    },
    selected:{
        backgroundColor:'#303030'
    }
})

export default styles;