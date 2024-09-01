import React from 'react';
import { Container, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Box } from '@mui/material';

const rows = [
  { id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', age: 45, email: 'alice.johnson@example.com' },
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'email', label: 'Email' },
];

function MainContent({ title }) {
  return (
    <Container
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: '240px', // Adjust margin to account for Sidebar width
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title} Content
      </Typography>
      {title === "Home" && (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Data Table
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column.id}>
                          <TableSortLabel>{column.label}</TableSortLabel>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      )}
      {title === "About" && (
        <Typography variant="body1">
          This is the About section. Here you can include information about the dashboard or application.
        </Typography>
      )}
      {title === "Contact" && (
        <Typography variant="body1">
          This is the Contact section. You can provide contact information or a contact form here.
        </Typography>
      )}
      <Box sx={{ flexGrow: 1 }} />
    </Container>
  );
}

export default MainContent;
