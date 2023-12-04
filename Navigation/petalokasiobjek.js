import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';

const Tab = createBottomTabNavigator();

const statistik = require('../Peta/kondisijalan.html');

const formInput = 'https://rinihsd.github.io/GeoRoad-Spreadsheet/';

const webmap = 'https://rinihsd.github.io/GeoRoad-Spreadsheet/map.html';

const roadlist = require('../Peta/roadlist.html');

function HomeScreen() {
    return (
        <View>
            <Text style = {styles.title}>Aplikasi GeoRoad Report</Text>
            <Text style = {styles.caption}>Stack</Text>
            <Text style = {styles.listitems}>1. React Native</Text>
            <Text style = {styles.listitems}>2. HTML</Text>
            <Text style = {styles.listitems}>3. Leaflet</Text>
            <Text style = {styles.listitems}>4. Google Sheets</Text>
            <Text style = {styles.listitems}>5. App Script</Text>
            <Text style = {styles.listitems}>6. FontAwesome5</Text>
            <Text style = {styles.listitems}>7. Github Page</Text>
            <Text style = {styles.caption}>Sumber Data BPS Kabupaten Siak</Text>
            <Text style = {styles.listitems}>1. Informasi Penduduk Data BPS Kabupaten Siak</Text>
            <Text style = {styles.listitems}>2. Tingkat Jalan Kewenangan Pemerintah</Text>
            <Text style = {styles.listitems}>3. Jenis Permukaan Jalan</Text>
            <Text style = {styles.listitems}>4. Tingkat Kerusakan Jalan</Text>
        </View>
    );
}

function MapsScreen() {
    return (
    <WebView
    source={{ uri: webmap}}
    />
    );
}

function AddDataScreen() {
    return (
    <WebView
    source={{ uri: formInput}}
    />
    );
}

function StatisticScreen() {
    return (
    <WebView
    source={statistik}
    />
    );
}

function ListScreen() {
    return (
        <ScrollView>
            <Text style = {styles.title}> Daftar Kerusakan Jalan </Text>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/jalanrusak1.jpg')} style={styles.image} />
                <Text style = {styles.caption}> Jalan Aspal Rusak Sedang </Text>
            </View>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/rusakparah.jpg')} style={styles.image} />
                <Text style = {styles.caption}> Jalan Aspal Rusak Parah</Text>
            </View>
            <View style = {styles.listitems}>
                <Image source={require('../Peta/rusakparah12.jpg')} style={styles.image} />
                <Text style = {styles.caption}> Jalan Tanah Rusak Parah </Text>
            </View>
        </ScrollView>
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}

// function MahasiswaScreen() {
//     return (
//         <View>
//             <Getjsonfile/>
//         </View>
//     );
// }


function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Map" component={MapsScreen} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Add Data" component={AddDataScreen} options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="plus-circle" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Statistic" component={StatisticScreen} options={{
        tabBarLabel: 'Statistic',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="chart-bar" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Road List" component={ListScreen} options={{
        tabBarLabel: 'RoadList',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="road" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size}/>
        ),
        }}
    />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image : {
        width : 356.4,
        height : 252,
        resizeMode : 'stretch',
    },
    listitems :{
        padding: 10,
        color: '#000'
    },
    caption: {
        fontSize: 20,
        color: '#000',
        marginTop : 5,
        fontWeight: 'bold',
        padding: 8,
    },
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        textAlign : 'center',
        marginTop : 10
    },
});