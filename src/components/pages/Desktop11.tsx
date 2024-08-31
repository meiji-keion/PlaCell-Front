import Hyou from "./desktop9";
import { Button, Center, Flex, Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'

const Desktop11 = () => {
  return (
    <div>
      <Center mt={8} mb={16}>
        <Text as="h1" display="inline-block" fontSize="2xl" fontWeight="bold" borderBottom="2px solid" borderColor="gray.300" width="200px" textAlign="center">バンド練習</Text>
      </Center>

      <Flex justify="center">
        <div>
          {/* みんなの予定 */}
          <Center mt={8}>
            <Text as="h2" display="inline-block" borderBottom="2px solid" borderColor="gray.300" width="200px" textAlign="center">みんなの予定</Text>
          </Center>
          
          {/* 表の表示 */}
          <Hyou />
          
        </div>

        <Flex direction="column" ml={36}>
          {/* メンバーというテキストを追加 */}
          <Text mt={8} mb={8} borderBottom="2px solid" borderColor="gray.300" textAlign="center">メンバー</Text>
          <Button mb={24}>あなたの予定を追加</Button>
          <Text mt={8} mb={8} borderBottom="2px solid" borderColor="gray.300" textAlign="center">共有</Text>
          <Input placeholder='Basic usage' />
        </Flex>
      </Flex>
      <Flex justify="center">
        <div>
          {/* みんなの予定 */}
          <Center mt={24}>
            <Text as="h2" display="inline-block" borderBottom="2px solid" borderColor="gray.300" width="200px" textAlign="center">空いている日程</Text>
          </Center>
          
        </div>

        <Flex direction="column" ml={36}>
          <Text mt={24} borderBottom="2px solid" borderColor="gray.300" textAlign="center">ノート</Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default Desktop11;
