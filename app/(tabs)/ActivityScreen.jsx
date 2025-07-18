// app/welcome.tsx
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/welcome-image.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to Haven</Text>

      <Text style={styles.textRow}>
        <Text style={styles.text}>First Time? Go and </Text>
        <Text style={styles.link}>Sign Up</Text>
      </Text>

      <Text style={styles.textRow}>
        <Text style={styles.text}>Coming Back? Go and </Text>
        <Text style={styles.link}>Log In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: 250, height: 250, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 25, color: '#333', textAlign: 'center' },
  textRow: { flexDirection: 'row', marginVertical: 5 },
  text: { fontSize: 16, color: '#777' },
  link: { color: '#007AFF', fontSize: 16 },
});
