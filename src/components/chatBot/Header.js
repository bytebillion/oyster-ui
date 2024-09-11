import React from 'react';
import { Box } from '@chakra-ui/react';

function Header({ showSidebarButton = true, onShowSidebar }) {
  return (
    <div className='bg-#fff p-4 color-black justify-center border-2 text-center'>
      
      <div flex="1" h="40px">
        <h3 fontSize="xxl"  >Welcome</h3>
      </div>
      <Box flex="1" />
    </div>
  );
}

export default Header;