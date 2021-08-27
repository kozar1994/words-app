import React, { useMemo } from 'react';
import { Box, Card, CircularProgress, Grid } from '@material-ui/core';

import Layout from '../layaut';

import { useGetAllListQuery } from '../generated/graphql';
import CountList from '../components/card-list';

const ListsPage: React.FC = () => {
    const { data, loading } = useGetAllListQuery({fetchPolicy: "network-only"});
    const lists = useMemo(() => data?.getAllList || [], [data]);
    return (
        <Layout>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box p={2}>
                            <h1>All lists with words</h1>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
            <Box mb={2}></Box>
            {loading && <Box display="flex" justifyContent="center" alignContent="center" p={4}>
                <CircularProgress />
            </Box>}
            {!loading && (
                <Grid container spacing={2}>
                    {lists.map((it: any) => (
                        <Grid item xs={4}>
                            <CountList id={it._id} title={it.listTitle} count={it.words.length} />
                        </Grid>)
                    )}
                </Grid>)
            }
        </Layout>
    );
};

export default ListsPage;