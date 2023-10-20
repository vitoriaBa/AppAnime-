import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet,ImageBackground} from 'react-native';

export default function Home(){
  return (
    <SafeAreaView style={styles.container}>    
     <ImageBackground style={styles.img} source={require('../assets/fundo.jpg')}>
    <ScrollView>
     
    <View >
    <View style={styles.img}>
    <Text style={styles.txtinicial}> Animes 
</Text>
  
      <Text style={styles.txt}>Os melhores Animes </Text>
 
   </View>
</View>

    </ScrollView>
    </ImageBackground>
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

 
  txtinicial: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFFAFA',
  },
   img: {
    padding: 27,
  },
txt:{
   color:'#FFFAFA',
   margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
}
});
