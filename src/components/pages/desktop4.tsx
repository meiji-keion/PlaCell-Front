import { useState } from 'react';
import { Grid, GridItem, Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Timetable from '../partsGroups/Timetable';
import HomeIcon from '../parts/HomeIcon';
import EventFormsGroup from '../partsGroups/EventFormsGroup';
import SetDateTime from '../partsGroups/SetDateTime';


const Event = () => {
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

            {/* 作成ボタン */}
            <GridItem colSpan={6} textAlign="center">
                <Button colorScheme="purple" variant="outline" size="lg" width="200px">
                    作成
                </Button>
            </GridItem>
        </Grid>
    );
}

export default Event;
