import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react'
import React from 'react'

const Hashimoto = () => {
  return (
    <div>
      <h1>ytytっytっっytyty</h1>
      <button>橋本</button>
      <button>よろしくお願いします</button>
      <button>よろしくお願ふあファファsファsf</button>
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>
  )
}
export default Hashimoto
