import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts,ShantellSans_500Medium} from '@expo-google-fonts/dev';

export default function Jojo(){
  let [fontsLoaded, fontError] = useFonts({
    ShantellSans_500Medium
  });

  //se a  fontes nao existi 
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#040081', '#4a0079']}    
    >
    <SafeAreaView>    
    <ScrollView>
    <View style={styles.container}>
    <View  style={styles.banner}>
    <Text style={styles.txtinicial}> JoJo's Bizarre Adventure
</Text>
    <Image style={styles.poster} source={require('../assets/poster.jpg')}></Image>
  
      <Text style={styles.txt}>JoJo's conta a história da família Joestar, uma família cujos vários membros descobrem que estão destinados a derrubar inimigos sobrenaturais</Text>
      </View>
       <Text style={styles.txtinicial}> Personagens</Text>
  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/jonathan.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/dio.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Jonathan</Text>
              <Text style={styles.txt2}>Dio Brando</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/jotaro_kujo.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/dio_j.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>jotaro kujo</Text>
              <Text style={styles.txt2}>Dio Brando</Text>
              </View>



  <View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/josuke.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/kira.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Josuke</Text>
              <Text style={styles.txt2}>Kira</Text>
              </View>

<View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/giorno.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/diavolo.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Giorno</Text>
              <Text style={styles.txt2}>Diavolo</Text>
              </View>


<View style={styles.perso}>
    <Image style={styles.img}  source={require('../assets/jolyne.jpg')}></Image>
    <Image style={styles.img}   source={require('../assets/padre.jpg')}></Image>
  </View>    
               <View style={styles.perso}> 
              <Text style={styles.txt1}>Jolyne</Text>
              <Text style={styles.txt2}>Padre</Text>
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
   banner:{
     flex: 1,
    justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#040081',
   borderBottomLeftRadius:40,
   borderBottomRightRadius:40,

  },
  poster:{
   width:300,
   height:400,
   margin:10,
  },
  txtinicial: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFFAFA',
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
marginLeft:60, 
 color:'#FFFAFA',
    fontSize: 20,
  fontFamily: 'ShantellSans_500Medium'
},
txt:{
   color:'#FFFAFA',
    fontSize: 20,
  fontFamily: 'ShantellSans_500Medium'
}
});
