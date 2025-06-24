import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModel from './FullProjectModel';

const ProjectCards = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        className="w-full sm:w-[360px] max-w-[90vw]"
      >
        <Card
          onClick={open}
          className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out mb-5 hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor bottom-2"
          shadow="lg"
          padding="sm"
          radius="lg"
          withBorder
        >
          <Card.Section className="p-2 sm:p-3">
            <Image
              className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
              src={props.image}
              alt={props.image}
            />
          </Card.Section>

          <Group justify="space-between" mt="xm" mb="xs" className="flex-wrap">
            <Text className="!text-lg sm:!text-xl md:!text-2xl gap-2 !font-bold !text-white flex items-center">
              {props.title}{" "}
              {props.live === true && (
                <Badge
                  variant="outline"
                  color="pink"
                  rightSection={
                    <Indicator color="red" position="middle-end" processing />
                  }
                >
                  Live
                </Badge>
              )}
            </Text>
          </Group>

          <Group mt="xm" mb="xs" className="flex-wrap gap-1 sm:gap-2">
            {props.technologies.map(
              (tech: string, index: number) =>
                index < 3 && (
                  <Badge key={index} size="md" variant="light" color="yellow">
                    {tech}
                  </Badge>
                )
            )}
          </Group>

          <Text className="!text-justify text-xs sm:text-sm" c="dimmed" lineClamp={5}>
            {props.description}
          </Text>

          <Button
            onClick={open}
            className="!bg-primaryColor !text-bgColor"
            fullWidth
            mt="md"
            radius="md"
          >
            Show more
          </Button>
        </Card>

        <FullProjectModel
          opened={opened}
          close={close}
          title={props.title}
          description={props.description}
          image={props.image}
          live={props.live}
          link={props.link}
          github={props.github}
          technologies={props.technologies}
        />
      </div>
    </>
  );
};

export default ProjectCards;
