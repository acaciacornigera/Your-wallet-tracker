import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisBadge = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/Powered-by-Moralis-Badge-Text-Inverted.png' : '/Powered-by-Moralis-Badge-Text-Grey.png'}
      height={45}
      width={150}
      alt="MoralisBadge"
    />
  );
};

export default MoralisBadge;
