import { View, Text, StyleSheet } from 'react-native';

type Props = {
    title: string,
    prompt: string
}

export default function TitleAndPrompt({ title, prompt}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{prompt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '20%'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
      },
    subtitle: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 40,
      },
});