import { Button, Card, CardBody, Center, FormControl, FormLabel, Input } from "@chakra-ui/react"

const LoginPage = () => {
  return (
<div style={{ display: "flex", justifyContent: "center",  }}>
  <Card variant="outline" mt={60} w={400}>
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
  )
}

export default LoginPage