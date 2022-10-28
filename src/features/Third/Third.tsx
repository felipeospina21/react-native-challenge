import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import img3 from '../../assets/img3.png';
import { CustomButton, RegularText, TitleText } from '../../components';
import { thirdStyles as styles } from './Third.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Third'>;

export default function ThirdView({ navigation }: Props) {
  return (
    <ScrollView>
      <Image source={img3} style={styles.image} resizeMode="stretch" />
      <View style={styles.innerContainer}>
        <TitleText>Trick or Treat ?</TitleText>
        <RegularText>get ready for a spookie time...</RegularText>
        <CustomButton
          title="Get started"
          variant="primary"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
}
