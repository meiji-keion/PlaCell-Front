import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"

const EventFormsGroup = () => {
  return (
    <div>
        <Flex direction="column" gap={4}>
            <Flex gap={10}>
                {/* イベントネーム */}
                <FormControl isRequired>
                    <FormLabel whiteSpace="nowrap">イベントネーム</FormLabel>
                    <Input placeholder='イベントネーム' />
                </FormControl>

                {/* イベント詳細 */}
                <FormControl isRequired>
                    <FormLabel whiteSpace="nowrap">イベント詳細</FormLabel>
                    <Input placeholder='イベント詳細' />
                </FormControl>
            </Flex>
                {/* 編集用パスワード */}
                <FormControl isRequired>
                    <FormLabel whiteSpace="nowrap">編集用パスワード</FormLabel>
                    <Input placeholder='編集用パスワード' />
                </FormControl>
        </Flex>
    </div>
  )
}

export default EventFormsGroup