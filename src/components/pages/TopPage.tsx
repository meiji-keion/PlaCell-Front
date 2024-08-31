import { Heading } from "@chakra-ui/react"
import { Center, Square, Circle } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

const TopPage = () => {
  return (
    <div>
      <Center mt={20}>
      <Heading color='purple.700' fontSize='6xl'>PlaCell</Heading>
      </Center>
      <Center mt={5}>
      <Heading color='purple.300' fontSize='xl'>時間単位で日程調整できる予定決めアプリ</Heading>
      </Center>
      <Center mt={8}>
       <Button colorScheme='purple' variant='outline' mr={4}>編集</Button> 
       <Button colorScheme='blue'variant='outline' ml={4}>作成</Button> 
     </Center>
     
    </div>
  )
}

export default TopPage
/*説明図都下分とか書き込むかもだけど一旦*/ 