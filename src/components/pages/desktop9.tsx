import { Button, Grid, GridItem } from "@chakra-ui/react"
import Timetable from "../partsGroups/Timetable"
import HomeIcon from "../parts/HomeIcon"

const Enter = () => {
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

            {/* 予定表 */}
            <GridItem colStart={5} colEnd={7} rowSpan={2} position="relative" left="-444px" mt={4}>
                <Timetable/>
            </GridItem>
            
            {/* 完了ボタン */}
            <GridItem colSpan={6} textAlign="center">
                <Button colorScheme="purple" variant="outline" size="lg" width="200px" mt={4}>
                    完了
                </Button>
            </GridItem>
        </Grid>
    </div>
  )
}
export default Enter