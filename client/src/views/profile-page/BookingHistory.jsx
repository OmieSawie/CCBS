import React from 'react'
import { Paragraph } from './Typography'
import { Box, styled, useTheme } from '@mui/system'
import MuiTypography from '@mui/material/Typography';
import { tableCellClasses } from '@mui/material/TableCell';
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const HistoryTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
  
const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const BookingHistory = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main

    return (
        <Card variant="outlined" elevation={0} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
            <MuiTypography variant="h1" gutterBottom>Booking History</MuiTypography>
            </CardHeader>
            <Box overflow="auto">
                <HistoryTable>
                    <TableHead>
                        <TableRow color="#000000">
                            <StyledTableCell sx={{ px: 3 }} colSpan={2}>
                                Booking Date and time
                            </StyledTableCell>
                            <StyledTableCell sx={{ px: 9 }} colSpan={2}>
                                Title
                            </StyledTableCell>
                            <StyledTableCell sx={{ px: 0 }} colSpan={2}>
                                Status
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <StyledTableRow key={index} hover>
                                <StyledTableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 3, textTransform: 'capitalize' }}
                                >
                                    {product.Time}
                                </StyledTableCell>
                                <StyledTableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 9, textTransform: 'capitalize' }}
                                >
                                    {product.Title}
                                </StyledTableCell>

                                <StyledTableCell
                                    sx={{ px: 0 }}
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.Status=='Pending' ? (
                                            <Small bgcolor={bgError}>
                                                Pending
                                            </Small>
                                        ) : product.Status=='Approved' ? (
                                            <Small bgcolor={bgPrimary}>
                                                Approved
                                            </Small>
                                        )
                                     : (
                                        <Small bgcolor={bgSecondary}>
                                            {product.Status}
                                        </Small>
                                    )}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </HistoryTable>
            </Box>
        </Card>
    )
}

const productList = [
    {
        Time: '3:00 PM, 15/02/22 - 6:00 PM, 15/02/22',
        Title: 'Workshop by Neuromancers',
        Status: 'Pending',
    },
    {
        Time: '4:30 PM, 16/02/22 - 6:00 PM, 16/02/22',
        Title: 'WebNd inductions',
        Status: 'Pending',
    },
    {
        Time: '5:00 PM, 17/02/22 - 6:00 PM, 17/02/22',
        Title: 'Workshop by Nakshatra',
        Status: 'Approved',
    },
    {
        Time: '8:00 PM, 16/02/22 - 9:00 PM, 16/02/22',
        Title: 'Risc inductions',
        Status: 'Pending',
    },
]

export default BookingHistory
