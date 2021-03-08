import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView,TouchableOpacity,Image } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Spacer from '../Utility/Spacer';
import HomeFont from '../Fonts/HomeFont';
import ArrowFont from '../Fonts/ArrowFont';
import CircleFont from '../Fonts/CircleFont';
import moment from 'moment';
import LocationFont from '../Fonts/LocationFont';
import SearchFont from '../Fonts/SearchFont';
import PlusButton from '../Fonts/PlusButton';



export default function Screen4(props) {


  const [weatherNow,setWeatherNow] = useState('Loading data');
  const [weatherNowImg,setWeatherNowImg] = useState(require('../assets/cloud.png'))
  const [weatherNowForImg,setWeatherNowForImg] = useState('');
  const [tempNow, setTempNow] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));
  const [temp1hr, setTemp1hr] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));
  const [temp2hr, setTemp2hr] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));
  const [temp3hr, setTemp3hr] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));
  const [temp4hr, setTemp4hr] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));
  const [temp5hr, setTemp5hr] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));

  const [tempDay1,setTempDay1] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000));
  const [weather1Card,setWeather1Card] = useState('');
  const [weather1CardImg,setWeather1CardImg] = useState(require('../assets/rain.png'))


  const [tempDay2,setTempDay2] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000))
  const [weather2Card,setWeather2Card] = useState('');
  const [weather2CardImg,setWeather2CardImg] = useState(require('../assets/cloud.png'))


  const [tempDay3,setTempDay3] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000))
  const [weather3Card,setWeather3Card] = useState('');
  const [weather3CardImg,setWeather3CardImg] = useState(require('../assets/sun.png'))


  const [tempDay4,setTempDay4] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000))
  const [weather4Card,setWeather4Card] = useState('');
  const [weather4CardImg,setWeather4CardImg] = useState(require('../assets/rain.png'))


  const [tempDay5,setTempDay5] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000))
  const [weather5Card,setWeather5Card] = useState('');
  const [weather5CardImg,setWeather5CardImg] = useState(require('../assets/rain.png'))


  const [tempDay6,setTempDay6] = useState(parseInt(Math.round((563 - 273.5)*1000)/1000))
  const [weather6Card,setWeather6Card] = useState('');
  const [weather6CardImg,setWeather6CardImg] = useState(require('../assets/rain.png'))




  let moonSrc = '../assets/moon.png'
  let sunSrc = '../assets/sun.png';
  let cloudSrc = '../assets/cloud.png';
  let rainSrc = '../assets/rain.png';
  let plus = '../assets/plus.png'


  var currentHour = moment().format("H");
  let mess=''
  let isDay = true;
  if (currentHour > 18 || currentHour <= 5) {
    isDay = false
  }


  var nowDay = moment().format('dddd DD, MMMM');
  var now =  moment().format('LT');
  let today = moment().format('dddd');
  let todayPlus1 = moment().add(1,'day').format('dddd');
  let todayPlus2 = moment().add(2,'day').format('dddd');
  let todayPlus3 = moment().add(3,'day').format('dddd');
  let todayPlus4 = moment().add(4,'day').format('dddd');
  let todayPlus5 = moment().add(5,'day').format('dddd');
  let todayPlus6 = moment().add(6,'day').format('dddd');

  // var date1hr = now.add(1, 'hours').hours();
  // let date1hrF = moment(date1hr).format('LT')
  var hr1 = moment().add(1,'hours').format('H A');
  var hr2 = moment().add(2,'hours').format('H A');
  var hr3 = moment().add(3,'hours').format('H A');
  var hr4 = moment().add(4,'hours').format('H A');
  var hr5 = moment().add(5,'hours').format('H A');


  // useEffect({} => {

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=41.902782&lon=12.496365&appid=25068c72bbe11cb7c9b0600f15ebbd06')
    .then(response => response.json())
    .then(data => {

      setWeatherNow(data.current.weather[0].description)
      setWeatherNowForImg(data.current.weather[0].main)
      setTempNow(data.current.temp)
      setTemp1hr(data.hourly[1].temp)
      setTemp2hr(data.hourly[2].temp)
      setTemp3hr(data.hourly[3].temp)
      setTemp4hr(data.hourly[4].temp)
      setTemp5hr(data.hourly[5].temp)

      setTempDay1(data.daily[1].temp.day);
      setTempDay2(data.daily[2].temp.day);
      setTempDay3(data.daily[3].temp.day);
      setTempDay4(data.daily[4].temp.day);
      setTempDay5(data.daily[5].temp.day);
      setTempDay6(data.daily[6].temp.day);

      setWeather1Card(data.daily[1].weather[0].main);
      setWeather2Card(data.daily[2].weather[0].main);
      setWeather3Card(data.daily[3].weather[0].main);
      setWeather4Card(data.daily[4].weather[0].main);
      setWeather5Card(data.daily[5].weather[0].main);
      setWeather6Card(data.daily[6].weather[0].main);



            if (weatherNowForImg == 'Clouds' || weatherNowForImg == 'Snow') {
              setWeatherNowImg(require(cloudSrc));
            }
            if (weatherNowForImg == 'Clear' && isDay == false) {
              setWeatherNowImg(require(moonSrc));
            }
            if (weatherNowForImg == 'Clear' && isDay == true) {
              setWeatherNowImg(require(sunSrc));
            }
            if (weatherNowForImg == 'Rain' || weatherNowForImg == 'Drizzle' ||weatherNowForImg == 'Thunderstorm') {
              setWeatherNowImg(require(rainSrc))
            }

            if (weather1Card == 'Clouds' || weather1Card == 'Snow') {
              setWeather1CardImg(require(cloudSrc));
            }
            if (weather1Card == 'Clear') {
              setWeather1CardImg(require(sunSrc));
            }
            if (weather1Card == 'Rain' || weather1Card == 'Drizzle' || weather1Card == 'Thunderstorm') {
              setWeather1CardImg(require(rainSrc))
            }

            if (weather2Card == 'Clouds' || weather2Card == 'Snow') {
              setWeather2CardImg(require(cloudSrc));
            }
            if (weather2Card == 'Clear') {
              setWeather2CardImg(require(sunSrc));
            }
            if (weather2Card == 'Rain' || weather2Card == 'Drizzle' || weather2Card == 'Thunderstorm') {
              setWeather2CardImg(require(rainSrc))
            }

            if (weather3Card == 'Clouds' || weather3Card == 'Snow') {
              setWeather3CardImg(require(cloudSrc));
            }
            if (weather3Card == 'Clear') {
              setWeather3CardImg(require(sunSrc));
            }
            if (weather3Card == 'Rain' || weather3Card == 'Drizzle' || weather3Card == 'Thunderstorm') {
              setWeather3CardImg(require(rainSrc))
            }

            if (weather4Card == 'Clouds' || weather4Card == 'Snow') {
              setWeather4CardImg(require(cloudSrc));
            }
            if (weather4Card == 'Clear') {
              setWeather4CardImg(require(sunSrc));
            }
            if (weather4Card == 'Rain' || weather4Card == 'Drizzle' || weather4Card == 'Thunderstorm') {
              setWeather4CardImg(require(rainSrc))
            }

            if (weather5Card == 'Clouds' || weather5Card == 'Snow') {
              setWeather5CardImg(require(cloudSrc));
            }
            if (weather5Card == 'Clear') {
              setWeather5CardImg(require(sunSrc));
            }
            if (weather5Card == 'Rain' || weather5Card == 'Drizzle' || weather5Card == 'Thunderstorm') {
              setWeather5CardImg(require(rainSrc))
            }

            if (weather6Card == 'Clouds' || weather6Card == 'Snow') {
              setWeather6CardImg(require(cloudSrc));
            }
            if (weather6Card == 'Clear') {
              setWeather6CardImg(require(sunSrc));
            }
            if (weather6Card == 'Rain' || weather6Card == 'Drizzle' || weather6Card == 'Thunderstorm') {
              setWeather6CardImg(require(rainSrc))
            }
            
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // },[])


  return (

    <View style={styles.container} >
      <ImageBackground source={require('../assets/cover.jpg')} style={styles.image}>

        <View style={styles.upperView}>
          <TouchableOpacity style={styles.title1} onPress={() => props.navigation.navigate('Screen1')} >
            <ArrowFont style={styles.arrowFont} />
          </TouchableOpacity>
          <Text style={styles.title1} >Rome</Text>
          <TouchableOpacity>
            <PlusButton style={styles.plusFont} ></PlusButton>
          </TouchableOpacity>
        </View>

        <Spacer size={1} />

        <View style={styles.displayDate} >
          <Text style={styles.displayDateTxt}>{nowDay}</Text>
        </View>

        <Spacer size={2} />

        <View style={styles.weatherGeneral} >
          <Text style={styles.weatherGeneralTxt}> {weatherNow} </Text>
        </View>

        <Spacer size={2} />

        <View style={styles.containerBig} >
          <Image
          style={styles.imgBig}
          source={weatherNowImg} />
          <Text style={styles.textBig}>{parseInt(Math.round((tempNow - 273.5)*1000)/1000)}°</Text>
        </View>

        <Spacer size={3} />

        <View style={styles.tempBox} >

          <View style={styles.firstRow}>
            <Text style={styles.now}>Now </Text>
            <Text style={styles.firstLine}>{hr1} </Text>
            <Text style={styles.firstLine}>{hr2} </Text>
            <Text style={styles.firstLine}>{hr3} </Text>
            <Text style={styles.firstLine}>{hr4} </Text>
            <Text style={styles.firstLine}>{hr5} </Text>
          </View>

          <View style={styles.secondRow} >
            <CircleFont style={styles.bigDot} />
            <CircleFont style={styles.dot} />
            <CircleFont style={styles.dot} />
            <CircleFont style={styles.dot} />
            <CircleFont style={styles.dot} />
            <CircleFont style={styles.dot} />
          </View>

          <View style={styles.thirdRow}>
            <Text style={styles.tempThirdLine}>{parseInt(Math.round((tempNow - 273.5)*1000)/1000)}°</Text>
            <Text style={styles.tempThirdLine}>{parseInt(Math.round((temp1hr - 273.5)*1000)/1000)}°</Text>
            <Text style={styles.tempThirdLine}>{parseInt(Math.round((temp2hr - 273.5)*1000)/1000)}°</Text>
            <Text style={styles.tempThirdLine}>{parseInt(Math.round((temp3hr - 273.5)*1000)/1000)}°</Text>
            <Text style={styles.tempThirdLine}>{parseInt(Math.round((temp4hr - 273.5)*1000)/1000)}°</Text>
            <Text style={styles.tempThirdLine}>{parseInt(Math.round((temp5hr - 273.5)*1000)/1000)}°</Text>
          </View>

        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

          <View style={styles.cardBox}>

              <View style={styles.cardView}>
                <TouchableOpacity>
                  <Text style={styles.dayCard}> {todayPlus1} </Text>
                  <Text style={styles.dayTemp}>{parseInt(Math.round((tempDay1 - 273.5)*1000)/1000)}°</Text>
                  <Image
                  style={styles.imgCard}
                  source={weather1CardImg} />
                </TouchableOpacity>
              </View>

              <View style={styles.cardView}>
                <TouchableOpacity>
                  <Text style={styles.dayCard}> {todayPlus2} </Text>
                  <Text style={styles.dayTemp}> {parseInt(Math.round((tempDay2 - 273.5)*1000)/1000)}° </Text>
                  <Image
                  style={styles.imgCard}
                  source={weather2CardImg} />
                </TouchableOpacity>
              </View>

              <View style={styles.cardView}>
                <TouchableOpacity>
                  <Text style={styles.dayCard}> {todayPlus3} </Text>
                  <Text style={styles.dayTemp}> {parseInt(Math.round((tempDay3 - 273.5)*1000)/1000)}° </Text>
                  <Image
                  style={styles.imgCard}
                  source={weather3CardImg} />
                </TouchableOpacity>
              </View>

              <View style={styles.cardView}>
                <TouchableOpacity>
                  <Text style={styles.dayCard}> {todayPlus4} </Text>
                  <Text style={styles.dayTemp}> {parseInt(Math.round((tempDay4 - 273.5)*1000)/1000)}° </Text>
                  <Image
                  style={styles.imgCard}
                  source={weather4CardImg} />
                </TouchableOpacity>
              </View>

              <View style={styles.cardView}>
                <TouchableOpacity>
                  <Text style={styles.dayCard}> {todayPlus5} </Text>
                  <Text style={styles.dayTemp}> {parseInt(Math.round((tempDay5 - 273.5)*1000)/1000)}° </Text>
                  <Image
                  style={styles.imgCard}
                  source={weather5CardImg} />
                </TouchableOpacity>
              </View>

              <View style={styles.cardView}>
                <TouchableOpacity>
                  <Text style={styles.dayCard}> {todayPlus6} </Text>
                  <Text style={styles.dayTemp}> {parseInt(Math.round((tempDay6 - 273.5)*1000)/1000)}° </Text>
                  <Image
                  style={styles.imgCard}
                  source={weather6CardImg} />
                </TouchableOpacity>
              </View>

          </View>

        </ScrollView >

        <View style={styles.bottomSpace} >
          <View style={styles.bottomBar} >
            <View style={styles.navBar} >
              <TouchableOpacity onPress={() => props.navigation.navigate('Screen1')} >
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

      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: '#597FE9',
    flex:1,
  },
  arrowFont:{
    color:'white',
    height:20,
    width:20,
  },
  title1:{
    color:'white',
    fontSize:29,
    fontFamily: 'Roboto',
  },
  plusFont:{
    color:'white',
    height:27,
    width:27,
    fontFamily: 'Roboto',
    alignSelf:'center'
  },
  image:{
    resizeMode: "contain",
    opacity: 10,
    width:'100%',
    height:'100%',
  },
  upperView: {
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'92%',
    alignSelf:'center'
  },
  displayDate:{
    alignItems:'center'
  },
  displayDateTxt:{
    color:'white',
    fontSize:18
  },
  weatherGeneral:{
    alignItems:'center',
  },
  weatherGeneralTxt:{
    color:'white',
    fontSize:19
  },
  containerBig:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around'
  },
  imgBig:{
    resizeMode:'contain',
    height:'100%'
  },
  textBig:{
    color:'white',
    fontSize:70
  },
  tempBox:{
    flexDirection:'column',
    marginLeft:17,
  },
  firstRow:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',
  },
  now:{
    color:'white',
  },
  firstLine:{
    fontSize:10,
    color:'white'
  },
  secondRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingVertical:3,
    width:'100%'
  },
  bigDot:{
    height:25,
    width:20,
    color:'white'
  },
  dot:{
    width:15,
    height:15,
    color:'white'
  },
  inLine:{
    color:'white',
    marginBottom:13.5,
    fontSize:15.3
  },
  tempThirdLine:{
    color:'white',
  },
  thirdRow:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',
  },
  bottomSpace:{
    alignItems:'center',
    justifyContent: 'center',
  },
  bottomBar:{
      width: '100%',
      height: 50,
      justifyContent: 'center',
      // position: 'absolute',
      bottom:'15%',
      width:'90%',
      backgroundColor:'white',
      paddingHorizontal:20,
      marginTop:20,
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
  },
  cardView:{
    borderRadius: 20,
    // elevation: 0.5,
    backgroundColor:'rgba(242, 242, 242,0.1)',
    marginHorizontal: 5,
    marginVertical: 6,
    height:135,
    width:120,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  cardBox:{
    flexDirection:'row',
  },
  dayCard:{
    color:'white',
    alignSelf:'center',
    fontSize:20
  },
  dayTemp:{
    color:'white',
    alignSelf:'center',
    fontSize:20
  },
  imgCard:{
    height:50,
    width:50,
    alignSelf:'center'
  },
})
