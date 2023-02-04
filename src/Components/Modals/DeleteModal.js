import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalAtom } from '../../StateAtoms/modalAtom';
import { useRecoilState } from 'recoil';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const DeleteModal = (props)  => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false)};

  const [modalStr, setModalStr] = useRecoilState(modalAtom);
  console.log('delete modal');
  // React.useEffect(() => {
  //   console.log('delete modal useEffect');
  //   setOpen(true);
  // }, [])
  // console.log(props);
  return (
    // <></>
    <Modal
      open={modalStr.selectedModal === 'DeleteModal'}
      onClose={() => {
        setModalStr({selectedModal: ''});
        // handleClose();
      }}  
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>

  );
}
