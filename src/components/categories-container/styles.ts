import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 22,
        backgroundColor: '#fff',
    },
    contentContainer:{
        height: 100,
        paddingEnd: 22,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer:{
        alignContent: 'center',
        justifyContent: 'center',
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
    },
    title: {
        color:'#909090',
        paddingStart: 5,        
        marginTop: 4,
    },
    selectedTitle :{
        color:'#000',
        paddingStart:2,        
    }
})

export default styles;