import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Image} from 'react-native';


const Home = ({ navigation }) => {
  const handleRegionSelect = (region) => {
    navigation.navigate('clubsList', { region });
  };



  return (
    <View style={styles.container}>
        <View style={styles.touchableArea}>
            <View style={styles.row_style}>
              <TouchableOpacity  style={styles.touchable} onPress={() => handleRegionSelect('Europe')}>
                <Text style={styles.touchableText}>Europe</Text>
              </TouchableOpacity>
              <View style={styles.column_image}>
                <Image source={require('../assets/champions.png')} style={styles.image}/>
              </View>
            </View>
            <View style={styles.row_style}>
              <TouchableOpacity style={styles.touchable} onPress={() => handleRegionSelect('Asia')}>
                <Text style={styles.touchableText}>Asia</Text>
              </TouchableOpacity>
              <View style={styles.column_image}>
                <Image source={require('../assets/AFC.png')} style={styles.image}/>
              </View>
            </View>
            <View style={styles.row_style}>
              <TouchableOpacity style={styles.touchable} onPress={() => handleRegionSelect('America')}>
                <Text style={styles.touchableText}>America</Text>
              </TouchableOpacity>
              <View style={styles.column_image}>
                 <Image source={require('../assets/Libertadores.png')} style={styles.image}/>
              </View>
            </View>
            <View style={styles.row_style}>
              <TouchableOpacity  style={styles.touchable} onPress={() => handleRegionSelect('Africa')}>
                <Text style={styles.touchableText}>Africa</Text>
              </TouchableOpacity>
              <View style={styles.column_image}>
                <Image source={require('../assets/CAF.png')} style={styles.image}/>
              </View>
            </View>
        </View>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    padding: 16
  },
  touchableArea:{
    flexDirection: "column",
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 16
  },
  touchable:{
    marginVertical: 50,
    alignItems: "center",
    padding: 8
  },
  touchableText:{
    fontSize: 24,
    color: "#B8860B",
    fontWeight: "bold"

  },
  row_style:{
    marginBottom: 16,
    flexDirection: 'row', 
    alignItems: 'center'
  },
  column_image: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "column"

  },
  image: {
    marginLeft: 16,
    width: 80,
    height: 80,
    resizeMode: 'cover'
  }
});

export default Home ;