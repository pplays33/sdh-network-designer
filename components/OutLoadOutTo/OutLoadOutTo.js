'use client'
import React, { useEffect, useState } from 'react';
import styles from './OutLoadOutTo.module.css';
import FromToOutLoads from '../../utils/calc/FromToOutLoads';
import FindMinimumChannels from '../../utils/calc/ErlangBUtil';

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';



function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function OutLoadOutTo() {
    const [outLoads, setOutLoads] = useState([]);
    const [fromToOutLoads, setFromToOutLoads] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const OutLoadDatas = JSON.parse(localStorage.getItem('totalOutgoingLoad') || '{}');
        setOutLoads(OutLoadDatas);
        const result = FromToOutLoads(OutLoadDatas);
        const NewResult = result.map((res, index) => ({
            ...res,
            channels: FindMinimumChannels(res.load ,0.01),
        }));
        setFromToOutLoads(NewResult);
        localStorage.setItem('FromToOutLoads', JSON.stringify(NewResult));
    }, []);


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fromToOutLoads.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                height: '100vh' // Обеспечивает занятие всей высоты видимой области окна браузера
            }}
        >
            <TableContainer component={Paper} sx={{ maxWidth: 520, width: '100%', }}>
                <Table sx={{ minWidth: 300 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>От станции</TableCell>
                            <TableCell align="right">К станции</TableCell>
                            <TableCell align="right">Нагрузка&nbsp;(Эрл)</TableCell>
                            <TableCell align="right">кол-во каналов:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? fromToOutLoads.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : fromToOutLoads
                        ).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.from}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.to}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.load}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.channels}
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, { label: 'All', value: -1 }]}
                                colSpan={4}
                                count={fromToOutLoads.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                slotProps={{
                                    select: {
                                        inputProps: {
                                            'aria-label': 'строк на странице',
                                        },
                                        native: true,
                                    },
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}


/* export default function OutLoadOutTo() {
    const [outLoads, setOutLoads] = useState([]);
    const [fromToOutLoads, setFromToOutLoads] = useState([]);

    useEffect(() => {
        const OutLoadDatas = JSON.parse(localStorage.getItem('totalOutgoingLoad') || '{}');
        setOutLoads(OutLoadDatas);
        const result = FromToOutLoads(OutLoadDatas);
        setFromToOutLoads(result);
        localStorage.setItem('FromToOutLoads', JSON.stringify(result));
    }, []);

    return (
        <div>
            <h1>Исходящие нагрузки между городами</h1>
            <table>
                <thead>
                    <tr>
                        <th>Из города</th>
                        <th>В город</th>
                        <th>Нагрузка</th>
                    </tr>
                </thead>
                <tbody>
                    {fromToOutLoads.map((load, index) => (
                        <tr key={index}>
                            <td>{load.from}</td>
                            <td>{load.to}</td>
                            <td>{load.load}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} */