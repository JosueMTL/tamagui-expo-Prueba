import { Github } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Image,
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
        >
          <H1 textAlign="center">MOVIE
            MAKING</H1>
          <Paragraph textAlign="center">
            welcome&apos; to your favorite movie section
          </Paragraph>
          <Image
            source={{
              uri: require("../assets/img.png"),
              width: 360,
              height: 210,
            }}
          />
        </YStack>
        <YStack space="$2.5">
          <Button onPress={() => router.push("/tabs")}>Begin</Button>
          <Button themeInverse size="$3">
            Inverse
          </Button>
        </YStack>
        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
            <YGroup.Item>
              <Link
                asChild
                href="https://github.com/ivopr/tamagui-expo"
                target="_blank"
              >
                <ListItem
                  hoverTheme
                  pressTheme
                  title="My Git"
                  icon={Github}
                />
              </Link>
            </YGroup.Item>
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
