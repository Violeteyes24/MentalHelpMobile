import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomDivider = () => {
    return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#ccc', // Divider color
        marginVertical: 10, // Space around the divider
    },
});

export default CustomDivider;