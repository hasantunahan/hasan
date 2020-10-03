import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Usercard = ({ navigation, name, lastname, url, id, email }) => {

    return (
        <View style={styles.container}>
            {/* userid details ekranına gönderildi */}
            <TouchableOpacity onPress={() =>
                navigation.push('Details', {
                    userId: `${id}`,
                    name: name,
                    lastname: lastname,
                    url: url,
                    email: email
                })
            }
                style={styles.card}>

                <Image
                    style={styles.img}
                    source={{
                        uri: `${url}`,
                    }}
                />
                <View style={styles.infoTop}>
                    <View style={styles.info}>
                        <Image style={{ margin: '2%' }}
                            source={require('../icons/contact.png')}
                        />
                        <Text style={styles.contact}
                        >{name.toUpperCase()} {lastname.toUpperCase()}</Text>
                    </View>

                    <View style={styles.info}>
                        <Image style={{ margin: '2%' }}
                            source={require('../icons/mail.png')}
                        />
                        <Text style={styles.mail}
                        >{email}</Text>
                    </View>
                    <View style={styles.lorem}>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</Text>
                    </View>

                </View>

                <Image style={styles.arrow}
                    source={require('../icons/angledown.png')}
                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        height: '95%',
        width: '95%',
        maxWidth: 330,
        maxHeight: 600,
        borderRadius: 20,
        marginLeft: 25,
        padding : '5%',
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 11,
        elevation: 1,
    },
    container: {
        flex: 1,
    },
    img: {
        margin: 10,
        width: 225,
        height: 225,
        resizeMode: 'contain',
        borderRadius: 15,
    },
    contact: {
        fontSize: 20,
        color: '#0C0910',
        fontWeight: 'bold'
    },
    mail: {
        fontSize: 18,
        color: '#33416B'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: -5
    },
    infoTop: {
        flexDirection: 'column'
    },
    lorem: {
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    arrow: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 30,
        width: 30
    }
});

export default Usercard;