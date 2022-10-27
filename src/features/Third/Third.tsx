import { ScrollView, Image } from 'react-native';
import { Container, CustomButton, RegularText, TitleText } from '../../components';
import img3 from '../../assets/img3.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { thirdStyles as styles } from './Third.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Third'>;

export default function ThirdView({ navigation }: Props) {
  return (
    <ScrollView>
      <Image source={img3} style={styles.image} resizeMode="stretch" />
      <Container style={styles.innerContainer}>
        <TitleText>Trick or Treat ?</TitleText>
        <RegularText>get ready for a spookie time...</RegularText>
        <CustomButton
          title="Get started"
          variant="primary"
          onPress={() => navigation.navigate('SignIn')}
        />
      </Container>
    </ScrollView>
  );
}
