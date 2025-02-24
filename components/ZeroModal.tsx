import { View, Modal, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    setTitle: (title: string) => void,
    setPrompt: (prompt: string) => void
    setIsScreenZero: (isScreenZero: boolean) => void
}

export default function ModalZero({setTitle, setPrompt, setIsScreenZero}: Props) {
    const nextScreen = () => {
        setTitle('Hey!')
        setPrompt('What should we call you? *')
        setIsScreenZero(false)
    }
    return (
            <Modal animationType="slide" transparent={true} visible={true}>
                <View style={styles.overlay} />
                <TouchableOpacity style={styles.sheet} onPress={nextScreen}>
                </TouchableOpacity>
            </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        // backgroundColor: "rgba(0,0,0,0.2)", // Semi-transparent background
    },
    sheet: {
        height: "10%", // Take up 50% of the screen height
        backgroundColor: '#A8E6CF',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 20,
        elevation: 5,
        justifyContent: 'center',
    }
})