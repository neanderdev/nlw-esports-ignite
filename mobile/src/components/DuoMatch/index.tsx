import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { Heading } from '../Heading';

import { THEME } from '../../theme';

import { styles } from './styles';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false);

    async function handleCopyDiscordUserToClipboard() {
        setIsCopping(true);

        await Clipboard.setStringAsync(discord);

        Alert.alert('Dicord copiado!', 'Usuário copiado para você colocar no Discord.');

        setIsCopping(false);
    }

    return (
        <Modal
            transparent
            statusBarTranslucent
            animationType='fade'
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name='close'
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight='bold'
                    />

                    <Heading
                        title="Let's play"
                        subtitle="Agora é só comecar a jogar!"
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />

                    <Text style={styles.label}>
                        Adicione no Discord
                    </Text>

                    <TouchableOpacity
                        onPress={handleCopyDiscordUserToClipboard}
                        disabled={isCopping}
                        style={styles.discordButton}
                    >
                        <Text style={styles.discord}>
                            {
                                isCopping
                                    ? <ActivityIndicator
                                        color={THEME.COLORS.PRIMARY}
                                    />
                                    : discord
                            }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}