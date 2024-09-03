import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Indicator, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModel from './FullProjectModel';
const ProjectCards=(props:any)=>{
  const [opened, { open, close }] = useDisclosure(false);
return(
  <>
  <div data-aos="flip-right" data-aos-duration="800" data-aos-easing="ease-in-sine">
    <Card onClick={open} className='!bg-bgColor cursor-pointer transition-transform duration-300ms ease-in-out mb-5 hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor bottom-2' w="360px" shadow="lg" padding="sm" radius="lg" withBorder>
    <Card.Section className='p-3'>
      <Image className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
        src={props.image}
 
        alt={props.image}
      />
    </Card.Section>

    <Group justify="space-between" mt="xm" mb="xs">
      <Text className='!text-2xl gap-2 !font-bold !text-white flex items-center'>{props.title} {props.live === true &&<Badge variant='outline' color="pink" rightSection={<Indicator color="red" position="middle-end" processing></Indicator>}>Live   </Badge>}</Text>

    </Group>
    <Group  mt="xm" mb="xs">
      {props.technologies.map((tech:string, index:number)=>index<3 && <Badge key={index} size='lg' variant="light" color="yellow">tech</Badge>)}
    </Group>

    <Text className='!text-justify' size="sm" c="dimmed" lineClamp={5}>
{props.description}
    </Text>

    <Button onClick={open} className='!bg-primaryColor !text-bgColor' fullWidth mt="md" radius="md">
 show more
    </Button>
  </Card>
  <FullProjectModel opened={opened} close={close} title={props.title} description={props.description} image={props.image} live={props.live} link={props.link} github={props.github} technologies={props.technologies}/>
  </div>
  </>
)
}
export default ProjectCards;