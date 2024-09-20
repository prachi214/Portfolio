import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { Drawer, Burger} from '@mantine/core';
import { IconHexagonLetterP} from '@tabler/icons-react';
import { navLinks } from './Header';

const Sidebar=()=>{
  const [opened, {toggle }] = useDisclosure(false);

  return (
    <>

{/* from here */}
      <Drawer.Root className='md:hidden !-z-40' size="45vw" position='right'   radius="md" opened={opened} onClose={toggle}>
        <Drawer.Overlay className='!-z-0' style={{ backgroundOpacity: 0.5, blur: 4 }} opacity={0}  />
        <Drawer.Content className='!-z-0' bg="#0A192F">

          <Drawer.Body className='mt-20 flex flex-col gap-8' bg="#0A192F">
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <Burger className='md:!hidden !z-40' size="lg"  color='#64FFDA'  opened={opened} onClick={toggle} />

    </>
  )

}

export default Sidebar;