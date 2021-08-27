import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../layaut';

import { useGetListByIdQuery, useUpdateListMutationMutation } from '../generated/graphql';
import AddWords from '../components/add-word';

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});


const ListPage = () => {
    const { id } = useParams<{ id: string }>();

    const classes = useStyles();

    const { data, loading, refetch } = useGetListByIdQuery({
        variables: {
            getListByIdId: id
        }
    });

    const [updateList, { loading: updateListLoading }] = useUpdateListMutationMutation();

    const onDelete = async (id: string) => {
        if(data?.getListById){
            const { _id, listTitle, words } = data?.getListById;
            const filter: any = words?.filter(it => it?._id !== id).map(it => it?._id);
            
            await updateList({
                variables: {
                    updateListInput: {
                        _id,
                        listTitle,
                        words: filter
                    }
                }
            })
            refetch()
        }
    }

    const rows = useMemo(() => {
        const formRow = data?.getListById?.words;
        if (formRow) {
            return formRow.map((it: any, index: number) => ({
                id: index + 1,
                _id: it._id,
                word_en: it.word_en,
                word_ua: it.word_ua
            }))
        }

        return []

    }, [data])

    if (loading) {
        return (<Box display="flex" justifyContent="center" alignContent="center" p={4}>
            <CircularProgress />
        </Box>)
    }

    const rowsLength = rows.length === 0;

    return (
        <Layout>
            {rowsLength && <Box display="flex" justifyContent="center" alignContent="center" p={4}>
                Non words
            </Box>}
            {!rowsLength && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>index</TableCell>
                            <TableCell align="left">Orifin</TableCell>
                            <TableCell align="left">Translate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.word_en}</TableCell>
                                <TableCell align="left">{row.word_ua}</TableCell>
                                <TableCell align="left">
                                    <IconButton aria-label="delete" onClick={() => onDelete(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            <Box mt={2}>
                <AddWords oldList={data?.getListById} resend={refetch} />
            </Box>
        </Layout>
    )
}

export default ListPage;