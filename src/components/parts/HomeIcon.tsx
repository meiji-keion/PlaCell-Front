import { IconButton } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

const HomeIcon = () => {
  return (
    <div>
        <IconButton 
            aria-label="Home"
            icon={<FaHome/>} 
            onClick={() => console.log('Go to home')} // ここにホーム(TopPage)に戻る処理を追加
        />
    </div>
  )
}

export default HomeIcon