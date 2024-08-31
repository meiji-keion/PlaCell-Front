import { Box, FormControl, FormLabel, Grid, Input } from "@chakra-ui/react"

const SetDateTime = () => {
  return (
    <div>
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
    </div>
  )
}
export default SetDateTime