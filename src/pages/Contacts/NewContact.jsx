import { Typography, Box } from '@mui/material';
import { ContactForm } from 'components/Phonebook/ContactsForm';

const sectionStyles = {
  width: '416px',
  mx: 'auto',
  mt: '20px',
  p: [4],
  // bg: 'white',
  border: ' 1px solid',
  borderColor: '#e4e9f0',
  borderRadius: '4px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  as: 'section',
};

export const NewContact = () => {
  return (
    <>
      <Box sx={{ ...sectionStyles }}>
        <Typography component="h1" variant="h5" textAlign="center">
          Phonebook
        </Typography>
        <ContactForm />
      </Box>
    </>
  );
};
