import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'



const Usercard = ({ text, name, lastname, avatar, id, email, detailurl, company }) => {

    return (
        <View style={styles.container}>
            {/* userid details ekranına gönderildi */}
            <View
                style={styles.card}>

                <View style={styles.top}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: `${avatar}`,
                        }}
                    />

                    <View>

                        <Text style={styles.contact}
                        >{name.toUpperCase()} {lastname.toUpperCase()}</Text>

                        <Text style={styles.mail}
                        >{email}</Text>

                        <Text style={styles.mail}
                        >Experience : 10 years</Text>

                    </View>
                </View>

                <View style={styles.information}>
                    <View style={styles.row}>
                        <Image style={{ margin: '2%' }}
                            source={require('../icons/company.png')}
                        />
                        <Text style={styles.title}>COMPANY</Text>
                    </View>
                    <Text style={{ fontSize: 18, marginTop: '2%', color: '#33416B' }}>{company} </Text>
                </View>

                <View style={styles.information}>
                    <View style={styles.row}>
                        <Image style={{ margin: '2%' }}
                            source={require('../icons/web.png')}
                        />
                        <Text style={styles.title}>WEBSITE</Text>
                    </View>
                    <Text style={{ fontSize: 18, marginTop: '2%', color: '#0000ff' }}>{detailurl} </Text>
                </View>

                <View style={styles.information}>
                    <View style={styles.row}>
                        <Image style={{ margin: '2%' }}
                            source={require('../icons/info.png')}
                        />
                        <Text style={styles.title}>INFORMATION</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginTop: '2%' }}> {text} </Text>
                </View>

                <View style={styles.button}>
                    <Text style={styles.makecontact}> MAKE CONTACT</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        maxHeight: 525,
        maxWidth: 375,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 11,
        elevation: 1,
        padding: '3%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: -30
    },
    img: {
        marginTop: 30,
        margin: 10,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 20,
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
    top: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    information: {
        margin: '3%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        margin: '3%',
        backgroundColor: '#0C0910',
        width: 325,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    makecontact: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default Usercard;