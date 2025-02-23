import { use, useState } from 'react'
import './App.css'
import { Box, Button, CircularProgress, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

function App() {
  const[emailContent,setEmailcontent]=useState('')
  const[tone,setTone]=useState('')
  const[generatedReply,setGeneratedReply]=useState('');
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(false);
  
  const handleSubmit=()=>{

  }

  return (
    <>
    <Container maxWidth='md' sx={{py:4}}>
      <Typography variant='h3' component='h1' gutterBottom>
        Email Reply Genertaor
      </Typography>
      <Box sx={{mx:3}}>
        <TextField
        fullWidth multiline rows={6} variant='outlined' label="Original Email Content"
        value={emailContent || ''} 
        onChange={(e)=>setEmailcontent(e.target.value)}
        sx={{mb:2}}/>
        <FormControl fullWidth sx={{mb:2}}>
          <InputLabel>Tone(Optional)</InputLabel>
          <Select 
          value={tone ||''}
          label={"Tone(Optional)"}
          onChange={(e)=>setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>

          </Select>
        </FormControl>
        <Button 
         variant='contained'
         onClick={handleSubmit}
         disabled={!emailContent || loading}
         fullWidth
         >
          {loading?<CircularProgress size={24}/>:"Generate Reply"}
         </Button>
        </Box>
        {
          error && (
            <Typography color='error' sx={{mb:2}}>
              {error}
            </Typography>
            
          )
          
        }
        <Box></Box>

    </Container>
      
    </>
  )
}

export default App
