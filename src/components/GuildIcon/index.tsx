import React from 'react';
import { Image, View } from 'react-native';
import { CDN_IMAGE } from '../../config';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
    
    //'https://cdn.iconscout.com/icon/free/png-256/discord-2752210-2285027.png';
    return (
        <View style={styles.container}>
        {
            iconId ?
            <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
         />
         :
         <DiscordSvg 
            width={40}
            height={40}
         />
        }
        </View>
    )
}
