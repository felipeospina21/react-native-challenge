import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import avatar from '../../assets/avatar.png';
import img1 from '../../assets/img1.png';
import { CustomButton, TitleText } from '../../components';
import { profileStyles as styles } from './Profile.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function Profile({ navigation }: Props): JSX.Element {
  function handlePress() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image source={img1} style={styles.image} resizeMode="stretch" />
      <View style={styles.textContainer}>
        <TitleText>Profile</TitleText>
        <View style={styles.wrapper}>
          <Image source={avatar} style={styles.avatar} />
          <View>
            <Text style={styles.userData}>Ramiro Vargas</Text>
            <Text style={styles.userData}>ramiro_v@gmail.com</Text>
            <Text style={styles.userData}>bio</Text>
          </View>
        </View>
        <CustomButton title="Sign Out" variant="outline" onPress={handlePress} />
      </View>
    </View>
  );
}
