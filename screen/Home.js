import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import SIU from '../img/siulogoeffect.png'
import UCard from '../components/Usercard'

const Home = ({ navigation }) => {

    const [inf, setInf] = React.useState(null);
    const [data, setData] = React.useState([]);

    /* list user verileri çekildi */
    React.useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => setData(data.data));
    });

    return (

        <View style={styles.container}>
            <View style={{backgroundColor :'#0C0910',alignItems :'center'}}>
                <View style={styles.input}>
                    <TextInput>
                    </TextInput>
                    <Image style={{ height: 30, width: 30, marginRight: '2%' }} source={require('../icons/search.png')}
                    ></Image>
                </View>
            </View>

            <View style={styles.head}>



                <TouchableOpacity onPress={() => setInf(true)}>
                    <Image style={styles.img} source={SIU}></Image>
                </TouchableOpacity>
                {/* LOGO TIKLAMA ŞİRKET INF. */}
                {
                    inf && (
                        <Text style={styles.siu}> SIU DIGITAL </Text>
                    )
                }
            </View>


            <ScrollView style={{ marginTop: -70 }}>
                <View>

                    <Text style={styles.title}>ENGINEER</Text>

                    <View style={{ marginLeft: '3%' }}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={styles.scroll}>
                            {/* list user verileri cardlara eklendi */}
                            {
                                data.map((get, i) => {
                                    return <UCard key={i} navigation={navigation} email={get.email} id={get.id} name={get.first_name} lastname={get.last_name} url={get.avatar}></UCard>
                                })
                            }
                        </ScrollView>
                    </View>

                    <Text style={styles.title}>DOCTOR</Text>

                    <View style={{ marginLeft: '3%' }}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={styles.scroll}>
                            {/* list user verileri cardlara eklendi */}
                            {
                                data.map((get, i) => {
                                    return <UCard key={i} navigation={navigation} email={get.email} id={get.id} name={get.first_name} lastname={get.last_name} url={get.avatar}></UCard>
                                })
                            }
                        </ScrollView>
                    </View>

                </View>
            </ScrollView>


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
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 200
    },
    img: {
        marginBottom: '15%',
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    scroll: {
        height: 455,
    },
    siu: {
        marginBottom: '25%',
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        color: '#33416B',
        marginLeft: '5%',
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input :{
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        backgroundColor: '#fff', 
        height: 40, 
        width: 350, 
        alignItems: 'center', 
        borderRadius: 10
    }
});

export default Home;