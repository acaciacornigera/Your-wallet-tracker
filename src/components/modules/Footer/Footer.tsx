import { Box, Flex, Text } from '@chakra-ui/react';
import { MoralisBadge } from 'components/elements';

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        Edited by JD SIDLER
      </Text>
      <Flex justifyContent="center">
        <MoralisBadge />
      </Flex>
    </Box>
  );
};

export default Footer;
