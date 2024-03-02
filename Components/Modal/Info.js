import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export function InfoClubs({ closeInfo, club }){


     // Lógica para obter a informação de acordo com o clube selecionado
     const getInfoByClubs = (club) => {
            switch (club) {
            case 'Barcelona':
                return [
                    {country: '  Spain',
                     city: '     Barcelona',
                     stadium: '  Camp Nou',
                     trophies:'  La Liga: 27, Copa del Rey: 31, Champions League: 5, Intercontinental/Fifa Club World Cup: 3'}
                    ]
            case 'Inter Milan':
                return [
                    {country: '  Italy',
                     city: '     Milan',
                     stadium: '  Giuseppe Meazza',
                     trophies:'  Serie A: 19, Coppa Italia: 9, UEFA League: 3, Champions League: 3, Intercontinental/Fifa Club World Cup: 3 '}
                ] 
            case 'Liverpool':
                return [
                    {country: '  England',
                     city: '     Liverpool',
                     stadium: '  Anfield Stadium',
                     trophies:'  Premier League: 19, FA Cup: 8, UEFA League: 3, Champions League: 6, Intercontinental/Fifa Club World Cup: 1 '}
                ]
            case 'Real Madrid':
                return [
                    {country: '  Spain',
                     city: '     Madrid',
                     stadium: '  Santiago Bernabeu',
                     trophies:'  La Liga: 35, Copa del Rey: 20, Champions League: 14, Intercontinental/Fifa Club World Cup: 8 '}
                ]
            case 'Al-Hilal':
                return [
                    {country: '  Saudi Arabia',
                     city: '     Riyadh',
                     stadium: '  Kingdom Arena',
                     trophies:'  Pro League: 18, King Cup: 10, Super Cup: 3, AFC Champions League: 4 '}
                    ]
            case 'Al-Nassr':
                return [
                    {country: '  Saudi Arabia',
                     city: '     Riyadh',
                     stadium: '  Al-Awwal Park',
                     trophies:'  Pro League: 9, King Cup: 6, Super Cup: 2, AFC Champions League: 1 '}
                    ]
            case 'Kashima Antlers':
                return [
                    {country: '  Japan',
                     city: '     Kashima',
                     stadium: '  Kashima Soccer Stadium',
                     trophies:'  J1 League: 8, Emperors Cup: 5, AFC Champions League: 1 '}
                    ]
            case 'Urawa Red Diamonds':
                return [
                    {country: '  Japan',
                     city: '     Saitama',
                     stadium: '  Saitama Stadium',
                     trophies:'  J1 League: 5, Emperors Cup: 8, AFC Champions League: 3  '}
                    ]
            case 'Boca Juniors':
                return [
                    {country: '  Argentina',
                     city: '     Buenos Aires',
                     stadium: '  La Bombonera',
                     trophies:'  Primeira División: 35, Copa Argentina: 4, Copa Libertadores: 6, Recopa: 4, Intercontinental/Fifa Club World Cup: 3 '}
                       ]
            case 'Flamengo':
                return [
                    {country: '  Brazil',
                     city: '     Rio de Janeiro',
                     stadium: '  Maracanã',
                     trophies:'  Brasileiro: 8, Copa do Brasil: 4, Copa Libertadores: 3, Recopa: 1, Intercontinental/Fifa Club World Cup: 1 '}
                    ]
            case 'Palmeiras':
                return [
                    {country: '  Brazil',
                     city: '     São Paulo',
                     stadium: '  Allianz Parque',
                    trophies:'   Brasileiro: 8, Copa do Brasil: 4, Copa Libertadores: 3, Recopa: 1'}
                    ]
            case 'River Plate':
                return [
                    {country: '  Argentina',
                     city: '     Buenos Aires ',
                     stadium: '  Monumental de Núñez',
                     trophies:'  Primeira División: 38, Copa Argentina: 3, Copa Libertadores: 4, Recopa: 3, Intercontinental/Fifa Club World Cup: 1  '}
                    ]
            case 'Al-Ahly':
                return [
                    {country: '  Egypt',
                     city: '     Cairo',
                     stadium: '  Cairo International Stadium',
                     trophies:'  Egyptian Premier League: 43, Egypt Cup: 38, CAF Champions League: 11 '}
                    ]
            case 'Mazembe':
                return [
                    {country: '  Congo',
                     city: '     Katanga Province',
                     stadium: '  Stade TP Mazembe',
                     trophies:'  Vodacom Ligue 1: 19, Congo Cup: 5, CAF Champions League: 5 '}
                    ]
            case 'Raja Casablanca':
                return [
                    {country: '  Morocco',
                     city: '     Casablanca',
                     stadium: '  Stade Mohammed V',
                     trophies:'  Botola Pro: 12, Moroccan Cup: 8, CAF Champions League: 3 '}
                    ]
            case 'Wydad AC':
                return [
                    {country: '  Morocco',
                     city: '     Casablanca',
                     stadium: '  Stade Mohammed V',
                     trophies:'  Botola Pro: 22, Moroccan Cup: 9, CAF Champions League: 3 '}
                    ]    
            default:
                return [];
            }
        };
    

    const info = getInfoByClubs(club);


    return(
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <View style={styles.title}>
                    <Text style={styles.info_title}>Information</Text>
                </View>
                {info.map(({ country, city, stadium, trophies }, index)  => (
                    <View key={index} style={styles.information}>
                        <Text style={styles.info_content}>Country:{country}</Text>
                        <Text style={styles.info_content}>City:{city}</Text>
                        <Text style={styles.info_content}>Stadium:{stadium}</Text>
                        <Text style={styles.info_content}>Trophies:{trophies}</Text>
                    </View>
                ))}
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}  onPress={closeInfo}>
                            <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent:{
        backgroundColor: '#B8860B',
        borderColor: '#191970',
        borderWidth: 3,
        width: "85%",
        paddingTop: 24,
        paddingBottom: 30,
        borderRadius: 8
    },
    information:{
        marginTop: 40,
        marginStart: 10,
        paddingBottom: 30,
        justifyContent: "flex-start"

    },
    title: {
        justifyContent: "center",
        alignItems: "center"
    },
    info_title: {
        fontSize: 24,
        color: '#191970',
        fontWeight: "bold"
    },
    info_content: {
        fontSize: 18,
        color: '#191970',
        fontWeight: "bold"
    },
    buttonArea:{
        flexDirection: "column",
        width: "100%",
        marginTop: 8,
        alignItems:"center",
        justifyContent: "flex-end"

    },
    button:{
        alignItems: "center",
        marginTop: 14,
        backgroundColor: '#191970',
        borderRadius: 8,
        width: "50%",
        padding: 6
    },
    buttonText:{
        fontSize: 18,
        color: "#FFFFFF"

    }
})


export default InfoClubs; 



