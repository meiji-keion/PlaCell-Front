import React, { useState } from 'react';
import { Center, Grid, GridItem, Button, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';

const Timetable = () => {
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
        <div>
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
            </Center>
        </div>
    );
}

export default Timetable;
