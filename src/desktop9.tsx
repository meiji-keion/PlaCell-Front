import React from 'react';
import { Center, Grid, GridItem, Button, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const hyou = () => {
     const dates = ['8/14', '8/15', '8/16', '8/17', '8/18']; //設定した日程範囲
    const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];　//設定した時間範囲

    return (
        <div>
            {/* ホームボタン */}
            <IconButton 
                aria-label="Home"
                icon={<ArrowBackIcon />} 
                position="absolute" 
                top="1rem" 
                left="1rem"
                onClick={() => console.log('Go to home')} // ここにホーム(TopPage)に戻る処理を追加
            />

            <Center mt={8}>
                {/* 表の作成 */}
                <Grid templateColumns={`repeat(${dates.length + 1}, 1fr)`} gap={2}>
                    {/* ヘッダー (日付) */}
                    <GridItem />
                    {dates.map((date) => (
                        <GridItem key={date} textAlign="center" fontWeight="bold">
                            {date}
                        </GridItem>
                    ))}

                    {/* 表の内容 (時間とセル) */}
                    {times.map((time) => (
                        <React.Fragment key={time}>
                            <GridItem fontWeight="bold">{time}</GridItem>
                            {dates.map((date) => (
                                <GridItem key={date} bg="gray.200" height="40px" borderRadius="md" />
                            ))}
                        </React.Fragment>
                    ))}
                </Grid>
            </Center>

            {/* 作成ボタン */}
            <Center mt={8}>
                <Button colorScheme='gray' variant='outline'>作成</Button> 
            </Center>
        </div>
    );
}

export default hyou;
