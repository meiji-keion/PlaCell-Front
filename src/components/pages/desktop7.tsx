import { Grid, GridItem, Button, Center, useDisclosure } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Timetable from '../partsGroups/Timetable';
import HomeIcon from '../parts/HomeIcon';
import EventFormsGroup from '../partsGroups/EventFormsGroup';
import SetDateTime from '../partsGroups/SetDateTime';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'
import React from 'react';


const Event = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<HTMLButtonElement>(null);
    return (
        <div>
        <Grid 
            templateColumns="repeat(6, 1fr)" 
            templateRows="auto auto 1fr auto"
            gap={6}
            height="100vh"
            padding={4}
        >
            {/* ホームボタン */}
            <GridItem colSpan={1}>
                <HomeIcon/>
            </GridItem>

            <Flex direction="column" mt={8}>
                {/* イベント入力フォーム */}
                <EventFormsGroup/>
                {/*日程と時間設定*/}
                <SetDateTime/>
            </Flex>
            {/* 時間とセルの表 */}
            <GridItem colStart={5} colEnd={7} rowSpan={2} position="relative" left="-160px" mt={8}>
                <Timetable/>
            </GridItem>

            {/* 編集ボタン */}
            <GridItem colSpan={6} textAlign="center">
                <Center mt={8}>
                    <Button colorScheme='purple' variant='outline' mr={4} size='lg' w={40}>編集</Button> 
                    <Button colorScheme='red'variant='outline' ml={4} size='lg' w={40} onClick={onOpen}>削除</Button> 
                </Center>
            </GridItem>
        </Grid>
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        >
        <AlertDialogOverlay>
        <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            削除
            </AlertDialogHeader>

            <AlertDialogBody>
            本当に削除しますか？
            </AlertDialogBody>

            <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
                キャンセル
            </Button>
            <Button colorScheme='red' onClick={onClose} ml={3}>
                削除
            </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialogOverlay>
        </AlertDialog>
        </div>
    );
}

export default Event;
