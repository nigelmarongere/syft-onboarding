import {Text, View, StyleSheet } from 'react-native';

type Props = {
    number: number
}

export default function ProgressBar({number}: Props) {
    return (
        <View style={styles.header}>
            <View style={styles.progressContainer}>
                <View style={styles.progressCircleActive}>
                    <Text style={styles.progressCirleNumberActive}>1</Text>
                </View>
                <View style={styles.progressLineActive} />
                <View style={styles.progressCircle}>
                    <Text style={styles.progressCirleNumber}>2</Text>
                </View>
                <View style={styles.progressLine} />
                <View style={styles.progressCircle}>
                    <Text style={styles.progressCirleNumber}>3</Text>
                </View>
            </View>
            <View style={styles.progressTextContainer}>
                <Text style={styles.progressText}>Quick Setup</Text>
                <Text style={styles.progressText}>Get Connected</Text>
                <Text style={styles.progressText}>Smart Inbox</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      alignItems: 'center'
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    progressCircle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressCircleActive: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressCirleNumber: {
      color: '#fff',
      fontSize: 16
    },
    progressCirleNumberActive: {
        color: '#3D5BFF',
        fontSize: 16
      },
    progressLine: {
      width: 50,
      height: 2,
      backgroundColor: '#fff',
      borderStyle: 'dashed',
      borderColor: '#3D5BFF',
      borderWidth: 1,
    },
    progressLineActive: {
      width: 50,
      height: 2,
      backgroundColor: '#fff',
      borderStyle: 'dashed',
      borderColor: '#3D5BFF',
      borderWidth: 1,
    },
    progressTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressText: {
      color: '#fff',
      fontSize: 12,
      marginHorizontal: 5,
    }
  });
  