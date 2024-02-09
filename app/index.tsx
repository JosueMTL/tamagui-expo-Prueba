import { Stack, Link } from 'expo-router';
import { Image, YStack } from "tamagui";

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../.tamagui/tamagui.config.json';

export default function Page() {
  return (
    <Container style={{ backgroundColor: '#760424', textAlign: 'center', justifyContent: 'center', fontStyle: 'Inter' }}>
      <Main justifyContent='center' alignItems='center'>
        <Stack.Screen options={{ title: 'Triologia de Broune' }} />
        <Image
          source={
            require('../assets/img.png')
          }
        />
        <YStack>
          <Title style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Movie {'\n'} Making </Title>
        </YStack>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button backgroundColor='#752D59' width='40%'>
            <ButtonText>Begin</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
