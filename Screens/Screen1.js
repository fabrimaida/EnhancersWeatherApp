import React, {useEffect, useState } from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView,TouchableOpacity,Image } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Spacer from '../Utility/Spacer';
import moment from 'moment';
import HomeFont from '../Fonts/HomeFont';
import LocationFont from '../Fonts/LocationFont';
import SearchFont from '../Fonts/SearchFont';
import PlusButton from '../Fonts/PlusButton';


// https://api.openweathermap.org/data/2.5/onecall?lat=45.070339&lon=7.686864&exclude=hourly,daily,minutely&appid={API key}

function Screen1(props) {

  const [tempCurrentCard01, setTempCurrentCard01] = useState(0);
  const [weatherCard01,setWeatherCard01] = useState('');
  const [imgWeatherCard01,setImgWeatherCard01] = useState(require('../assets/sun.png'));



  // secondcard setter
  const [tempCurrentCard02, setTempCurrentCard02] = useState(0);
  const [weatherCard02,setWeatherCard02] = useState('');
  const [imgWeatherCard02,setImgWeatherCard02] = useState(require('../assets/sun.png'));



  // thirdcard setter
  const [tempCurrentCard03, setTempCurrentCard03] = useState(0);
  const [weatherCard03,setWeatherCard03] = useState('');
  const [imgWeatherCard03,setImgWeatherCard03] = useState(require('../assets/sun.png'));

  // Let's open with the greetings according to the hour
  var currentHour = moment().format("H");
  let greetings = '';

  if (currentHour >= 3 && currentHour < 12){
      greetings = "Good Morning,";
  } else if (currentHour >= 12 && currentHour < 15){
      greetings = "Good Afternoon,";
  }   else if (currentHour >= 15 && currentHour < 19){
      greetings = "Good Evening,";
  } else if (currentHour >= 19 || currentHour < 3){
      greetings = "Good Night,";
  }


  let mess=''
  let isDay = true;
  if (currentHour > 18 || currentHour <= 5) {
    isDay = false
    mess ='notte'
  } else {
    mess='giorno'
  }

  // Setting the time and the timezone with moment.js

  let nowDay = moment().format('dddd DD,MMMM');
  let nowUTC = moment().subtract(1,'hours').format('LT')
  let now =  moment().format('LT');

  // Settings the cards background changing accordingly to the weather
  let typologyContainerStyleCard01 = "";
  let typologyContainerStyleCard02 = "";
  let typologyContainerStyleCard03 = "";

  // Declaring path to png
  let sunSrc = '../assets/sun.png';
  let cloudSrc = '../assets/cloud.png';
  let rainSrc = '../assets/rain.png';
  let moonSrc = '../assets/moon.png'
//
  // Starting API calls to the server for the card info here
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=51.507351&lon=-0.127758&exclude=hourly,daily,minutely&appid=25068c72bbe11cb7c9b0600f15ebbd06`)
  .then(response => response.json())
  .then(data => {
    // setLocationLocalCard01(data.name);
    setTempCurrentCard01(data.current.temp);
    setWeatherCard01(data.current.weather[0].main);
    if (weatherCard01 == 'Clouds' || weatherCard01 == 'Snow') {
      setImgWeatherCard01(require(cloudSrc));
    }
    if (weatherCard01 == 'Clear' && isDay == false) {
      setImgWeatherCard01(require(moonSrc));
    }
    if (weatherCard01 == 'Clear' && isDay == true) {
      setImgWeatherCard01(require(sunSrc))
    }
    if (weatherCard01 == 'Rain' || weatherCard01 == 'Drizzle' || weatherCard01 == 'Thunderstorm') {
      setImgWeatherCard01(require(rainSrc))
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.070339&lon=7.686864&exclude=hourly,daily,minutely&appid=25068c72bbe11cb7c9b0600f15ebbd06`)
  .then(response => response.json())
  .then(data => {

    setTempCurrentCard02(data.current.temp);
    setWeatherCard02(data.current.weather[0].main);
    if (weatherCard02 == 'Clouds'|| weatherCard02 == 'Snow') {
      setImgWeatherCard02(require(cloudSrc));
    }
    if (weatherCard02 == 'Clear' && isDay == false) {
      setImgWeatherCard02(require(moonSrc));
    }
    if (weatherCard02 == 'Clear' && isDay == true) {
      setImgWeatherCard02(require(sunSrc))
    }
    if (weatherCard02 == 'Rain' || weatherCard02 == 'Drizzle' || weatherCard02 == 'Thunderstorm') {
      setImgWeatherCard02(require(rainSrc))
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.902782&lon=12.496365&exclude=hourly,daily,minutely&appid=25068c72bbe11cb7c9b0600f15ebbd06`)
  .then(response => response.json())
  .then(data => {
    setTempCurrentCard03(data.current.temp);
    setWeatherCard03(data.current.weather[0].main);
    if (weatherCard03 == 'Clouds' || weatherCard03 == 'Snow') {
      setImgWeatherCard03(require(cloudSrc));
    }
    if (weatherCard03 == 'Clear' && isDay == false) {
      setImgWeatherCard03(require(moonSrc));
    }
    if (weatherCard03 == 'Clear' && isDay == true) {
      setImgWeatherCard03(require(sunSrc))
    }
    if (weatherCard03 == 'Rain' || weatherCard03 == 'Drizzle' || weatherCard03 == 'Thunderstorm') {
      setImgWeatherCard03(require(rainSrc))
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // Settings the background for the cards with CSS
  if (weatherCard01 == "Clouds" || weatherCard01 == 'Snow') {
    typologyContainerStyleCard01 = styles.buttonCardClouds;
  } if(weatherCard01 == 'Rain' || weatherCard01 == 'Drizzle'  || weatherCard01 == 'Thunderstorm') {
    typologyContainerStyleCard01 = styles.buttonCardRain;
  } if (weatherCard01 == "Clear") {
    typologyContainerStyleCard01 = styles.buttonCardClear;
  }

  if (weatherCard02 == "Clouds" || weatherCard02 == 'Snow') {
    typologyContainerStyleCard02 = styles.buttonCardClouds;
  } if(weatherCard02 == 'Rain' || weatherCard02 == 'Drizzle'  || weatherCard02 == 'Thunderstorm') {
    typologyContainerStyleCard02 = styles.buttonCardRain;
  } if (weatherCard02 == "Clear") {
    typologyContainerStyleCard02 = styles.buttonCardClear;
  }

  if (weatherCard03 == "Clouds" || weatherCard03 == 'Snow') {
    typologyContainerStyleCard03 = styles.buttonCardClouds;
  } if(weatherCard03 == 'Rain' || weatherCard03 == 'Drizzle'  || weatherCard03 == 'Thunderstorm') {
    typologyContainerStyleCard03 = styles.buttonCardRain;
  } if (weatherCard03 == "Clear ") {
    typologyContainerStyleCard03 = styles.buttonCardClear;
  }

  // Finally we put a return and start with the actual screen view
  return (


    <View style={styles.container}>

      <Text style={styles.title1}>{greetings}</Text>
      <Text style= {styles.title2}>Mario</Text>
      <Text>Il pazzo</Text>

      <Spacer size={2} />

      <TouchableOpacity>
        <View style={styles.parentButton}>
          <PlusButton style={styles.plusButton}/>
          <Text style={styles.buttonText}> Aggiungi una città</Text>
        </View>
      </TouchableOpacity>



      <Spacer size={3} />

      <ScrollView vertical={true} showsHorizontalScrollIndicator={true} >

        <View style={styles.containerAdd}>

          <TouchableOpacity style={[styles.buttonCard, typologyContainerStyleCard01]} onPress={() => props.navigation.navigate('Screen3')} >
            <View style={styles.cardView}>
              <View style={styles.firstRow}>
                <Text style={styles.locationTxt}>London</Text>
                <Text style={styles.date}>{nowDay}</Text>
                <Text style={styles.now}>{nowUTC}</Text>
              </View>
              <View style={styles.secondRow}>
                <Image
                style={styles.imgWeather}
                source={imgWeatherCard01}
                />
              </View>
              <View style={styles.thirdRow}>
                <Text style={styles.celsius}>{parseInt(Math.round((tempCurrentCard01 - 273.5)*1000)/1000)}°</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonCard, typologyContainerStyleCard02]} onPress={() => props.navigation.navigate('Screen2')} >
            <View style={styles.cardView}>
              <View style={styles.firstRow}>
                  <Text style={styles.locationTxt}>Turin</Text>
                  <Text style={styles.date}>{nowDay}</Text>
                  <Text style={styles.now}>{now}</Text>
              </View>
              <View style={styles.secondRow}>
                <Image
                  style={styles.imgWeather}
                  source={imgWeatherCard02}
                />
              </View>
              <View style={styles.thirdRow}>
                <Text style={styles.celsius}>{parseInt(Math.round((tempCurrentCard02 - 273.5)*1000)/1000)}°</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonCard, typologyContainerStyleCard03]} onPress={() => props.navigation.navigate('Screen4')} >
            <View style={styles.cardView}>
              <View style={styles.firstRow}>
                <Text style={styles.locationTxt}>Rome</Text>
                <Text style={styles.date}>{nowDay}</Text>
                <Text style={styles.now}>{now}</Text>
              </View>
              <View style={styles.secondRow}>
                <Image
                  style={styles.imgWeather}
                  source={imgWeatherCard03}
                />
              </View>
              <View style={styles.thirdRow}>
                <Text style={styles.celsius}>{parseInt(Math.round((tempCurrentCard03 - 273.5)*1000)/1000)}°</Text>
              </View>
            </View>
          </TouchableOpacity>



        </View>

      </ScrollView>

      <View style={styles.bottomSpace} >
        <View style={styles.bottomBar} >
          <View style={styles.navBar} >
            <TouchableOpacity>
              <HomeFont style={styles.homeFont} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SearchFont style={styles.searchFont} />
            </TouchableOpacity>
            <TouchableOpacity>
              <LocationFont style={styles.locationFont} />
            </TouchableOpacity>
          </View>
        </View>
      </View>


    </View>








  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight:'98%',
    flex:1
  },
  title1:{
    color:'black',
    textAlign:'center',
    marginTop:30,
    fontSize:24,
    fontFamily: 'Roboto',
    color: '#01175F',
  },
  title2:{
    color:'black',
    textAlign:'center',
    fontSize:24,
    fontFamily: 'Roboto',
    color: '#01175F'
  },
  parentButton: {
      justifyContent: 'center',
      flexDirection:'row'
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  plusButton:{
    width: 21,
    height: 21,
    resizeMode: 'contain',
    color: '#01175F'
  },
  buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#01175F',
      paddingHorizontal:10
  },containerAdd:{
    // maxHeight:'60%'
  },
  cardBox:{
    backgroundColor:'yellow'
  },
  buttonCard:{
    borderRadius: 15,
    elevation: 3,
    shadowOffset: {width:1, height:1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius:2,
    marginHorizontal: 9,
    marginVertical: 6,
    // height: window.height
  },
  locationTxt:{
    color:'white',
    fontSize:20,
  },
  imgWeather:{
    width:80,
    height:80,
    resizeMode: 'contain',

  },
  buttonCardClouds:{
    backgroundColor:'#788497'
  },
  buttonCardClear:{
    backgroundColor:'#4B87CA',
  },
  buttonCardRain:{
    backgroundColor:'#234A8C',
  },
  cardView: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    marginVertical: 12,
    paddingVertical:'1%'
  },
  firstRow:{
    maxWidth:90
  },
  secondRow:{
    paddingHorizontal:4
  },
  date:{
    color:'white',
    fontSize:15,
    paddingVertical:3
  },
  now:{
    color:'white',
    fontSize:12,
  },
  celsius:{
    color:'white',
    fontSize:27
  },
  thirdRow:{
    marginLeft:20,
    marginRight:10,
  },
  bottomSpace:{
    alignItems:'center',
    justifyContent: 'center'
  },
  bottomBar:{
      width: '100%',
      height: 50,
      justifyContent: 'center',
      // position: 'absolute',
      // bottom: 10,
      width:'90%',
      backgroundColor:'white',
      paddingHorizontal:20,
      marginTop:5,
      paddingVertical:20,
      borderRadius:15,
      flexDirection:'column',
  },
  navBar:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  homeNavBar:{
    height:'83%',
    elevation:3,
    shadowOffset: {width:0, height:10},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius:14,
  },
  homeFont:{
    color: '#01175F',
    height:75,
    width:30,
  },
  locationFont:{
    color: '#797B95',
    height:73,
    width:20,
  },
  searchFont:{
    color: '#797B95',
    height:75,
    width:27,
  }
});



export default Screen1;
