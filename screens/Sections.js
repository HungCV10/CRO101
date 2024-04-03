import React from "react";
import { Text, View, StyleSheet, SectionList, Image } from "react-native";

const Sections = () => {
    const sections = [
        { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
        {
            title: 'J',
            data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
            ],
        },
    ];

    const renderSectionHeader = ({ section }) => {
        return (
            <Text style={styles.sectionHeader}>{section.title}</Text>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text>{item}</Text>
    
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: 36 }}>SectionList</Text>
            <SectionList
                sections={sections}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Sections;
