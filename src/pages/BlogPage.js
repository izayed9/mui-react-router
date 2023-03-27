import { Helmet } from 'react-helmet-async';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
// components

// ----------------------------------------------------------------------

// const SORT_OPTIONS = [
//   { value: 'latest', label: 'Latest' },
//   { value: 'popular', label: 'Popular' },
//   { value: 'oldest', label: 'Oldest' },
// ];

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button variant="outlined" >
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">

        </Stack>


      </Container>
    </>
  );
}
