import { Button, Card, CardBody, Center, FormControl, FormLabel, Input } from "@chakra-ui/react"

const RegisterPage = () => {
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
        <Button>新規登録</Button>
      </Center>
    </CardBody>
  </Card>
</div>
  )
}

export default RegisterPage