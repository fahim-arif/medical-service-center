import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import Image from 'next/image';
import mission from '../../../../../public/images/mission.png';

export default function MissionAndVision() {
  return (
    <Box width="80%" mx="auto" fontFamily="Asap" marginTop="110px">
      <SimpleGrid columns={2}>
        <Box width="475px" mx="auto">
          <Flex direction="column">
            <Box>
              <Text fontSize="45px" fontWeight="700" color="#0A2E72">
                Our Mission & Vission.
              </Text>
            </Box>
            <Box>
              <Text fontSize="16px" fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                rem eum ipsam architecto praesentium inventore similique
                adipisci nostrum commodi quidem magni sequi optio aperiam,
                itaque, rerum repellendus? Ipsa, assumenda animi.
              </Text>
            </Box>
            <Box marginTop="30px">
              <SimpleGrid columns={2}>
                <Box>
                  {' '}
                  <Text fontSize="16px" fontWeight="700" color="#0A2E72">
                    <span border="5px" borderColor="#0088FF" color="#0088FF">
                      &#10003;
                    </span>{' '}
                    Free Consultation
                  </Text>
                </Box>
                <Box>
                  {' '}
                  <Text fontSize="16px" fontWeight="700" color="#0A2E72">
                    <span border="5px" borderColor="#0088FF" color="#0088FF">
                      &#10003;
                    </span>{' '}
                    Fitness Assessment
                  </Text>
                </Box>
                <Box>
                  {' '}
                  <Text fontSize="16px" fontWeight="700" color="#0A2E72">
                    <span border="5px" borderColor="#0088FF" color="#0088FF">
                      &#10003;
                    </span>{' '}
                    24 Hours Service
                  </Text>
                </Box>
                <Box>
                  {' '}
                  <Text fontSize="16px" fontWeight="700" color="#0A2E72">
                    <span border="5px" borderColor="#0088FF" color="#0088FF">
                      &#10003;
                    </span>{' '}
                    Discounts & Updates
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box marginTop="39px">
              <Text fontSize="28px" fontWeight="700" color="#0A2E72">
              We have certified doctors & using modern technology.
              </Text>
            </Box>

            <Box marginTop="30px">
              <Text fontSize="16px" fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                rem eum ipsam architecto praesentium inventore similique
                adipisci nostrum commodi quidem magni sequi optio aperiam,
                itaque, rerum repellendus? Ipsa, assumenda animi.
              </Text>
            </Box>

          </Flex>
        </Box>
        <Box width="475px" height="600px">
          <Image src={mission}></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
