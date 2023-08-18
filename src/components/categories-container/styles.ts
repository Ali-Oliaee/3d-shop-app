import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 22,
    },
    contentContainer:{
        height: 120,
        paddingEnd: 22,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    buttonContainer:{
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 14,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 20,
    },
    selected:{
        backgroundColor:'#303030'
    },
    icon :{
        transform: [{ scale: 1.3 }],
    },
    title: {
        color:'#909090',
        marginTop: 4,
        width: 50,
        fontSize: 13,
        textAlign: 'center',
    },
    selectedTitle :{
        color:'#000',
        paddingStart:2,        
    }
})

export default styles;