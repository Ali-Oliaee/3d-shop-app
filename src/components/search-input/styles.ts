import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 14,
        marginTop: 10,
        height: 60,
    },
    icon: {
        transform: [{ scale: 1.2 }],
        marginStart: 12
    },
    input: {
        fontSize: 16,
        width: '64%',
    },
    filterButton: {
        backgroundColor: '#303030',
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;