import { StatusBar } from 'expo-status-bar';
import { Image, View, ImageSourcePropType } from 'react-native';
import { homeStyles as styles } from './MainView.styles';
import { TitleText, RegularText, CustomButton, Container } from '../';

interface MainViewProps {
  img: ImageSourcePropType;
  title: string;
  text: string;
  navigateNext: () => void;
  navigateSkip: () => void;
}

export default function MainView({
  img,
  title,
  text,
  navigateNext,
  navigateSkip,
}: MainViewProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <Container style={styles.textContainer}>
        <TitleText>{title}</TitleText>
        <RegularText>{text}</RegularText>
        <CustomButton title='Next' variant='primary' onPress={navigateNext} />
        <CustomButton title='Skip' variant='ghost' onPress={navigateSkip} />
        <StatusBar style='auto' />
      </Container>
    </View>
  );
}
