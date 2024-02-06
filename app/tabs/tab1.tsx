import { H5, Tabs, Text, Box, Divider, useUserBreakpoints } from "tamagui";
import * as React from 'react';
import { Tamagui, useTheme } from 'tamagui';
import { MyStack } from "../../components/MyStack";

interface FilmCardProps {
  title: string;
  time: string;
  director: string;
}

function FilmCard({ title, time, director }: FilmCardProps) {
  return (
      <Box
          backgroundColor="$card"
          padding="$3 $4"
          borderRadius="$4"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop="$3"
      >
        <Box>
          <Text fontSize="$4" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="$3" color="$loContrast">
            {director}
          </Text>
        </Box>
        <Box>
          <Text fontSize="$3" color="$loContrast">
            {time}
          </Text>
        </Box>
      </Box>
  );
}

export default function Tab1() {
  const theme = useTheme();
  const breakpoints = useUserBreakpoints();

  return (
      <Tamagui theme={theme} defaultTheme="dark" breakpoints={breakpoints}>
        <MyStack>
          <Tabs
              defaultValue="tab1"
              orientation="horizontal"
              flexDirection="column"
              width="100%"
          >
            <Tabs.List>
              <Tabs.Tab value="tab1">
                <Text>SubTab 1</Text>
              </Tabs.Tab>
              <Tabs.Tab value="tab2">
                <Text>SubTab 2</Text>
              </Tabs.Tab>
              <Tabs.Tab value="tab3">
                <Text>SubTab 3</Text>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Content value="tab1">
              <Box
                  backgroundColor="$loContrast"
                  padding="$3 $4"
                  borderRadius="$4"
                  marginTop="$5"
              >
                <Text fontSize="$5" fontWeight="bold" textAlign="center">
                  DASHBOARD
                </Text>
                <Divider marginTop="$3" marginBottom="$3" />
                <FilmCard title="FILM 1" time="1:30:25" director="Director 1" />
                <FilmCard title="FILM 2" time="2:15:05" director="Director 2" />
                <FilmCard title="FILM 3" time="1:50:10" director="Director 3" />
              </Box>
            </Tabs.Content>

            <Tabs.Content value="tab2">
              <H5>Contenido de la SubPestaña 2</H5>
            </Tabs.Content>

            <Tabs.Content value="tab3">
              <H5>Contenido de la SubPestaña 3</H5>
            </Tabs.Content>
          </Tabs>
        </MyStack>
      </Tamagui>
  );
}
