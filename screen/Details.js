import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import SIU from '../img/siulogo.png'
import UserDetailsCard from '../components/UserDetailsCard'


const Details = ({ route, navigation }) => {
    const { userId,name,lastname,email,url } = route.params;
    const [dataDetails, setDataDetails] = React.useState({});

    /* carddan gelen userid ye göre get isteği */
    React.useEffect(() => {
        var url = "https://reqres.in/api/users/" + userId
        fetch(url)
            .then(response => response.json())
            .then(dataDetails => setDataDetails(dataDetails.ad));
    });

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image style={styles.img} source={SIU}></Image>
            </View>
            {/* idye göre alınan veriler detail karta gönderildi */}
            <UserDetailsCard company ={dataDetails.company} detailurl={dataDetails.url} text={dataDetails.text} email={email} name={name} lastname={lastname} avatar={url}></UserDetailsCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    head: {
        backgroundColor: '#0C0910',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    img :{
        marginBottom : '5%',
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
});

export default Details;