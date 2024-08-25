import { Button, Card, CardBody, Center, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"

const EditLoginPage = () => {
  return (
    <div>
      <Center>
        <div style={{ position: "relative" }}>
          <Heading mt={56} mb={4} size="lg" textAlign="center" sx={{ 
            position: "lative", 
            display: "inline-block", 
            marginBottom: "10px", // 下線との間隔を調整
            _after: { 
              content: '""', 
              position: "absolute", 
              left: "50%", 
              transform: "translateX(-50%)", 
              bottom: "-4px", 
              width: "100%", 
              height: "1px", 
              backgroundColor: "currentColor" 
            } 
          }}>
            表の編集：認証
          </Heading>
        </div>
      </Center>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 150px)" }}>
        <Card variant="outline" w={400} mt={-96}> {/* ここで値を調整してカードを上に上げる */}
          <CardBody>
            <Center>
              <FormControl w={300}>
                <FormLabel>name</FormLabel>
                <Input type="email" />
                <FormLabel>password</FormLabel>
                <Input type="email" />
              </FormControl>
            </Center>
            <Center mt={5}>
              <Button>Login</Button>
            </Center>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default EditLoginPage





