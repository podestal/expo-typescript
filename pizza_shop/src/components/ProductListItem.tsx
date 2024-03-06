import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Colors from '../constants/Colors';
import { Product } from '../types';

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({product}: ProductListItemProps) => {

    return (
      <Link href={`/${product.id}`} asChild>
        <Pressable style={styles.container}>
            <Image source={{ uri: product.image || '' }} style={styles.image}/>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
        </Pressable>
      </Link>
    )
  }

  const styles = StyleSheet.create({

    image: {
      width: '100%',
      aspectRatio: 1,
      marginVertical: 10
    },
    container: {
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 30,
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#000',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 14,
      marginTop: 10,
      color: Colors.light.tint,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });

export default ProductListItem