
import { ScrollArea, Modal } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import {Info} from "../user"
import { Tooltip, Button } from '@mantine/core';
import { IconArrowBigDownLineFilled } from '@tabler/icons-react';

import { Document, Page } from 'react-pdf';
const ResumeViewer=(props:any)=>{
    return(
<div className=' mx-36 mt-10 mb-8 font-mono ' id="ResumeViewer">
<Modal.Root  scrollAreaComponent={ScrollArea.Autosize} size="auto" className='font-mono'  opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
          <Modal.Header className='!bg-bgColor !border-primaryColor !border-b-0 !border-2 !rounded-tl-3xl !rounded-tr-3xl'>
            <Modal.Title  data-autofocus className='!text-4xl  text-white flex gap-3 items-center  !font-bold'>Resume
            <Tooltip label="Download" className='!text-primaryColor'  position="right" offset={5}>
    

            <ActionIcon component="a"  href="/resume-document.pdf" download={Info.name} variant="outline" color="teal" aria-label="Settings">
      <IconArrowBigDownLineFilled/>
    </ActionIcon>
    </Tooltip>
            </Modal.Title>
            <Modal.CloseButton size="md" iconSize="30px" className='!bg-bgColor !text-red-500' />
          </Modal.Header>
          <Modal.Body  className='!bg-bgColor !border-primaryColor !pt-2 !border-t-0 !border-2 !rounded-bl-3xl !rounded-br-3xl'>
          <Document file="/resume-document.pdf">
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>

          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

</div>
    )

}
export default ResumeViewer;