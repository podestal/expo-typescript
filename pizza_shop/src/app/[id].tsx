import { StyleSheet, View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const product = () => {

  const { id } = useLocalSearchParams()

  return (
    <Text>Product Id: {id}</Text>
  )
}

export default product