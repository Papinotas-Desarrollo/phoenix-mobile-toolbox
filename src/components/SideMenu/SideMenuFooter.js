import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    View,
} from 'react-native';
import Proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const headerHeight = Dimensions.get('screen').height * 0.15;

const styles = StyleSheet.create({
    container: {
        minHeight: headerHeight,
        backgroundColor: colors.papinotasBlue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        margin: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    headerTitle: {
        color: colors.white,
        fontSize: 25,
    },
    headerSubtitle: {
        color: colors.white,
        fontSize: 20,
    },
    headerDescription: {
        color: colors.white,
        fontSize: 15,
    },
    headerImage: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.white,
    },
});

const SideMenuFooter = ({
    footerStyle,
    callback,
    icon,
}) => (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    closeMenu();
                }}
            >
                <Icon color={colors.white} name="chevron-left" size={40} />
            </TouchableOpacity>
            <Image source={{ uri: source }} style={styles.headerImage} />
            <View style={styles.textContainer}>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
                <Text style={styles.headerSubtitle}>{headerSubtitle}</Text>
                <Text style={styles.headerDescription}>{headerDescription}</Text>
            </View>
        </SafeAreaView>
    );

export default SideMenuFooter;

SideMenuFooter.propTypes = {
    footerStyle: Proptypes.object,
    callback: Proptypes.func,
    icon: Proptypes.string
};
