import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import {InfoClubs} from '../Components/Modal/Info'; 


const ClubsList = ({route}) => {
    const[modalVisible, setModalVisible] = useState(false);
    const [selectedClub, setSelectedClub] = useState('');
    // abre o modal de informação
    const openInfo = (club)=> {
        setSelectedClub(club);
        setModalVisible(true);
    }

    // Verifica se route e params estão definidos
    const { region } = route ? route.params : {};

    // Lógica para obter a lista de clubes com base na região selecionada
    const getClubsByRegion = (region) => {
    // Substitua isso com a lógica real para obter a lista de clubes
        switch (region) {
        case 'Europe':
            return [
                {name: 'Barcelona', logo: require('../assets/barcelona.png')},
                {name: 'Inter Milan', logo: require('../assets/inter.png')} , 
                {name: 'Liverpool', logo: require('../assets/Liverpool.png')},
                {name: 'Real Madrid', logo: require('../assets/Real-Madrid.png')}];
        case 'Asia':
            return [
                {name: 'Al-Hilal', logo: require('../assets/al-hilal.png')},
                {name: 'Al-Nassr', logo: require('../assets/al-nassr.png')} , 
                {name: 'Kashima Antlers', logo: require('../assets/kashima-antlers.png')},
                {name: 'Urawa Red Diamonds', logo: require('../assets/urawa.png')}];
        case 'America':
            return [
                {name: 'Boca Juniors', logo: require('../assets/CABJ.png')},
                {name: 'Flamengo', logo: require('../assets/fla.png')} , 
                {name: 'Palmeiras', logo: require('../assets/palmeiras.png')},
                {name: 'River Plate', logo: require('../assets/river.png')}];
        case 'Africa':
            return [
                {name: 'Al-Ahly', logo: require('../assets/al-ahly.png')},
                {name: 'Mazembe', logo: require('../assets/Mazembe.png')} , 
                {name: 'Raja Casablanca', logo: require('../assets/Raja.png')},
                {name: 'Wydad AC', logo: require('../assets/Wydad.png')}];
        default:
            return [];
        }
    };

    const clubs = getClubsByRegion(region);

    
    return (
        
        <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.text_title}>Clubs of {region}</Text>
        </View>
        <View style={styles.list_clubs}>
            {clubs.map(({ name, logo }, index) => (
                <TouchableOpacity key={index} onPress={() => openInfo(name)}>
                    <View style={styles.clubItemContainer}>
                        <Text style={styles.text_clubs}>{name}</Text>
                        <Image source={logo} style={styles.clubLogo} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
        <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <InfoClubs club={selectedClub} closeInfo={() => setModalVisible(false)} />
        </Modal>
    </View>
    
    );
  };

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#A9A9A9'
         },
        title:{
          backgroundColor: '#191970',
          alignItems: 'center', 
          },
        text_title: {
          fontSize: 26,
          color: "#FFFFFF",
          fontWeight: "bold",
          marginTop: 40,
          marginBottom: 40
        },
        clubItemContainer:{
            flexDirection: 'row', 
            alignItems: 'center'
        },
        list_clubs:{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 80,
          marginBottom: 10,
        },
        text_clubs:{
            fontSize: 26,
            color: "#191970",
            fontWeight: "bold",
            marginRight: 10,
            marginBottom: 80    
        },
        clubLogo: {
            width: 50, 
            height: 50, 
            marginBottom: 80
        }


});

export default ClubsList;