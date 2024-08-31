import React, { useState } from 'react';
import { Grid, GridItem, Button, IconButton, Input, Box, Center } from '@chakra-ui/react';
import {FormControl,FormLabel} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';


const Event = () => {
    const dates = ['8/14', '8/15', '8/16', '8/17', '8/18'];
    const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    // 各セルの状態を管理するための配列を作成
    const initialGridState = times.map(() =>
        dates.map(() => false)
    );
    const [gridState, setGridState] = useState(initialGridState);

    const handleClick = (row: number, col: number) => {
        const newGridState = gridState.map((rowArray, rowIndex) =>
            rowIndex === row
                ? rowArray.map((cell, colIndex) => (colIndex === col ? !cell : cell))
                : rowArray
        );
        setGridState(newGridState);
    };

    return (
        <Grid 
            templateColumns="repeat(6, 1fr)" 
            templateRows="auto auto 1fr auto"
            gap={6}
            height="100vh"
            padding={4}
        >
            {/* ホームボタン */}
            <GridItem colSpan={1}>
                <IconButton 
                    aria-label="Home"
                    icon={<FaHome/>} 
                    onClick={() => console.log('Go to home')} // ここにホーム(TopPage)に戻る処理を追加
                />
            </GridItem>

            <Flex direction="column" mt={8}>
                {/* イベント入力フォーム */}
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

                {/*日程と時間設定*/}
                <Box maxW="400px" mx="auto" p="4" mt={12}>
                    <Grid templateColumns="1fr 1fr" gap={4}>
                    <FormControl>
                        <FormLabel >開始日</FormLabel>
                        <Input placeholder='Select Start Date' size='md' type='date' />
                    </FormControl>

                    <FormControl>
                        <FormLabel >終了日</FormLabel>
                        <Input placeholder='Select  End Date' size='md' type='date' />
                    </FormControl>

                    <FormControl>
                        <FormLabel >開始時刻</FormLabel>
                        <Input placeholder='Select Start Time' type="time" />
                    </FormControl>

                    <FormControl>
                        <FormLabel >終了時刻</FormLabel>
                        <Input placeholder='Select End Time' type="time" />
                    </FormControl>
                    </Grid>

                </Box>
            </Flex>
            {/* 時間とセルの表 */}
            <GridItem colStart={5} colEnd={7} rowSpan={2} position="relative" left="-160px" mt={8}>
                <Grid templateColumns={`repeat(${dates.length + 1}, 1fr)`} gap={2}>
                    {/* ヘッダー (日付) */}
                    <GridItem />
                    {dates.map((date) => (
                        <GridItem key={date} textAlign="center" fontWeight="bold">
                            {date}
                        </GridItem>
                    ))}

                    {/* 表の内容 (時間とセル) */}
                    {times.map((time, rowIndex) => (
                        <React.Fragment key={time}>
                            <GridItem fontWeight="bold">{time}</GridItem>
                            {dates.map((date, colIndex) => (
                                <GridItem 
                                    key={date} 
                                    bg={gridState[rowIndex][colIndex] ? "purple.500" : "gray.200"} 
                                    height="40px" 
                                    borderRadius="md" 
                                    cursor="pointer"
                                    onClick={() => handleClick(rowIndex, colIndex)} // クリックイベントの処理
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </Grid>
            </GridItem>

            {/* 編集ボタン */}
            <GridItem colSpan={6} textAlign="center">
                <Center mt={8}>
                    <Button colorScheme='purple' variant='outline' mr={4} size='lg' w={40}>編集</Button> 
                    <Button colorScheme='red'variant='outline' ml={4} size='lg' w={40}>削除</Button> 
                </Center>
            </GridItem>
        </Grid>
 
    );
}

export default Event;
