import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export function InfoClubs({ closeInfo, club }){


     // Lógica para obter a informação de acordo com o clube selecionado
     const getInfoByClubs = (club) => {
            switch (club) {
            case 'Barcelona':
                return [
                    {country: 'Spain',
                     city: 'Barcelona',
                     stadium: 'Camp Nou',
                     trophies:'La Liga: 27, Copa del Rey: 31, Champions League: 5 '}
                    ]
            case 'Inter Milan':
                return [
                    {country: 'Italy',
                     city: 'Milan',
                     stadium: 'Giuseppe Meazza',
                     trophies:'Serie A: 19, Coppa Italia: 9, UEFA League: 3, Champions League: 3 '}
                ] 
            case 'Liverpool':
                return [
                    {country: 'England',
                     city: 'Liverpool',
                     stadium: 'Anfield Stadium',
                     trophies:'Premier League: 19, FA Cup: 8, UEFA League: 3, Champions League: 6 '}
                ]
            case 'Real Madrid':
                return [
                    {country: 'Spain',
                     city: 'Madrid',
                     stadium: 'Santiago Bernabeu',
                     trophies:'La Liga: 35, Copa del Rey: 20, Champions League: 14 '}
                ]
            default:
                return [];
            }
        };
    

    const info = getInfoByClubs(club);


    return(
        <View style={styles.container}>
            <View style={styles.modalContent}>
                {info.map(({ country, city, stadium, trophies }, index)  => (
                    <View style={styles.information}>
                        <Text key={index} style={styles.text_title}>Country:{country}</Text>
                        <Text key={index} style={styles.text_title}>City:{city}</Text>
                        <Text key={index} style={styles.text_title}>Stadium:{stadium}</Text>
                        <Text key={index} style={styles.text_title}>Trophies:{trophies}</Text>
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
        paddingBottom: 50,
        borderRadius: 8
    },
    information:{
        marginTop: 40,
        marginStart: 10,
        paddingBottom: 90,
        justifyContent: "flex-start"

    },
    text_title: {
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



