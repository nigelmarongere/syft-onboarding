import { Text, StyleSheet } from 'react-native';

type Props = {
    name: string
}

export default function Logo({name}: Props) {
    return (
        <Text style={styles.logo}>{name}</Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        paddingTop: "10%",
        paddingBottom: "10%",
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
      },
});