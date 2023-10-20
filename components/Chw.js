import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts,ShantellSans_500Medium} from '@expo-google-fonts/dev';
export default function Chw(){
  let [fontsLoaded, fontError] = useFonts({
    ShantellSans_500Medium
  });

  //se a  fontes nao existi 
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
     <LinearGradient
      colors={['#700000','#000000']} // Cores do gradiente    
    >
    <SafeAreaView>    
    <ScrollView>
    <View style={styles.container}>
     <View  style={styles.banner}>
    <Text style={styles.txtinicial}> Chaisawn Man</Text>

    <Image style={styles.poster} source={require('../assets/posterchw.jpg')}></Image>
  
      <Text style={styles.txt}>Denji, um adolescente que passa por dificuldades financeiras, até que, certo dia, ele morre e renasce como o Homem-Motosserra após um pacto com um demônio.</Text>
     </View> 
       <Text style={styles.txtinicial}> Personagens</Text>
  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/chw.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/power.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Denji</Text>
              <Text style={styles.txt2}>Power</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/cebolinha.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/pochita.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Aki</Text>
              <Text style={styles.txt2}>Pochita</Text>
              
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/makima.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/angel.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Makima</Text>
              <Text style={styles.txt2}>Angel</Text>
              </View>

       <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/kobeni.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/profe.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Kobeni</Text>
              <Text style={styles.txt2}>Kishibe</Text>
              </View>

    </View>
    </ScrollView>
    </SafeAreaView>
    </LinearGradient>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  poster:{
   width:300,
   height:400,
   margin:10,
  },
  banner:{
     flex: 1,
    justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#700000',
   borderBottomLeftRadius:40,
   borderBottomRightRadius:40,

  },
  txtinicial: {
    margin: 30,
    fontSize: 30,
    textAlign: 'center',
    color:'#FFFAFA',
    fontFamily: 'ShantellSans_500Medium'

  },
  perso:{
   justifyContent:'center',
   alignItems:'center',
   flexDirection:'row',
  },
 img:{
   width:170,
   height:180,
   margin:10,
   borderRadius:30,
 },
 txt1:{
   fontSize: 20,
   marginRight:60,
    color:'#FFFAFA',
    fontFamily: 'ShantellSans_500Medium'
 },
 txt2:{
   fontSize: 20,
marginLeft:60, 
 color:'#FFFAFA',
     fontFamily: 'ShantellSans_500Medium'
},
txt:{
   color:'#FFFAFA',
   margin:20,
     fontSize: 20,
    fontFamily: 'ShantellSans_500Medium'
}
});
