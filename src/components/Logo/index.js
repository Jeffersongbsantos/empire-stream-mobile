import React from 'react'
import { StyleSheet, View, Image } from 'ract-native'
import logoImage from '../../../assets/LogoEmpire.png'

export const Logo = () => {
    return (
        <Image style={styles.logo} source={logoImage}/>
    )
}

const styles = StyleSheet.create({ 
    logo: {
      height: 64,
      width: 64
    },
  
  });
  