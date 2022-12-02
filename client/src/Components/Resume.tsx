import '../Styles/Resume.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import myResume from '../Assets/Patrick Hart - Resume.pdf'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Resume() {
  return (
    <Box 
        sx={{ flexGrow: 1 }}
        style={{ padding: '1vh'}}
    >
      <Typography variant="h4" gutterBottom>
        Resumé
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs>
            <Item>
              <iframe
                  title="Resume"
                  src={ `${myResume}#view=FitH` }
              />
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}