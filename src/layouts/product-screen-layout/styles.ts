import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    backButton:{
        position: 'absolute',
        top: 40,
        left: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    },
    title:{
        fontSize: 14,
        marginBottom: 6
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4E5A37'
    },
    counter:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    counterButton:{
        backgroundColor: '#E0E0E0',
        width: 26,
        height: 26,
        borderRadius:4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterButtonText:{
        fontSize: 18
    },
    count:{
        marginHorizontal: 16,
        fontSize: 16,
        color: '#242424'
    },
    rateContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    rate:{
        fontSize: 16,
        marginStart: 2,
    },
    reviewers:{
        fontSize: 12,
        marginStart: 8,
        color: '#9A9A9A'
    },
    description:{ 
        fontSize: 14,
        marginBottom: 30,
        fontWeight: '300'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    archiveButton:{
        width: '18%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        paddingVertical: 16,
    },
    confirmButton:{
        backgroundColor: "#242424",
        padding: 20,
        paddingVertical: 16,
        width: '78%',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10
    },
    confirmButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff'
    }
})

export default styles